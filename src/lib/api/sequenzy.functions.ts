import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getServerConfig } from "../config.server";

const SEQUENZY_API = "https://api.sequenzy.com/api/v1";

async function sequenzyFetch(
  path: string,
  body: Record<string, unknown>,
  label: string,
): Promise<Response> {
  const config = getServerConfig();
  const apiKey = config.sequenzyApiKey;
  if (!apiKey) throw new Error("SEQUENZY_API_KEY not configured");

  const res = await fetch(`${SEQUENZY_API}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errBody = await res.text();
    console.error(`[sequenzy] ${label} failed:`, res.status, errBody);
    throw new Error(errBody);
  }

  return res;
}

export const createSubscriber = createServerFn({ method: "POST" })
  .validator(
    z.object({
      email: z.string().email(),
      firstName: z.string().min(1).max(100),
      tag: z.string().min(1).max(50).optional(),
    }),
  )
  .handler(async ({ data }) => {
    const json = await sequenzyFetch(
      "/subscribers",
      {
        email: data.email,
        firstName: data.firstName,
        duplicateStrategy: "merge",
        tags: data.tag ? [data.tag] : [],
      },
      "createSubscriber",
    ).then((r) => r.json());

    return {
      success: true as const,
      subscriberId: json.subscriber?.id ?? null,
      created: json.subscriber?.created ?? false,
    };
  });

export const addTag = createServerFn({ method: "POST" })
  .validator(
    z.object({
      email: z.string().email(),
      tag: z.string().min(1).max(50),
    }),
  )
  .handler(async ({ data }) => {
    const json = await sequenzyFetch(
      "/subscribers/tags",
      { email: data.email, tag: data.tag },
      "addTag",
    ).then((r) => r.json());

    return {
      success: true as const,
      subscriberCreated: json.subscriber?.created ?? false,
      tagCreated: json.tag?.created ?? false,
    };
  });
