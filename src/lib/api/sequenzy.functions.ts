import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getServerConfig } from "../config.server";

const SEQUENZY_API = "https://api.sequenzy.com/api/v1";

export const createSubscriber = createServerFn({ method: "POST" })
  .validator(
    z.object({
      email: z.string().email(),
      firstName: z.string().min(1).max(100),
      tag: z.string().min(1).max(50).optional(),
    }),
  )
  .handler(async ({ data }) => {
    const config = getServerConfig();
    const apiKey = config.sequenzyApiKey;
    if (!apiKey) {
      throw new Error("SEQUENZY_API_KEY not configured");
    }

    const body: Record<string, unknown> = {
      email: data.email,
      firstName: data.firstName,
      duplicateStrategy: "merge",
      tags: data.tag ? [data.tag] : [],
    };

    const res = await fetch(`${SEQUENZY_API}/subscribers`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("[sequenzy] createSubscriber failed:", res.status, errBody);
      throw new Error(errBody);
    }

    const json = await res.json();
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
    const config = getServerConfig();
    const apiKey = config.sequenzyApiKey;
    if (!apiKey) {
      throw new Error("SEQUENZY_API_KEY not configured");
    }

    const res = await fetch(`${SEQUENZY_API}/subscribers/tags`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        tag: data.tag,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("[sequenzy] addTag failed:", res.status, errBody);
      throw new Error(errBody);
    }

    const json = await res.json();
    return {
      success: true as const,
      subscriberCreated: json.subscriber?.created ?? false,
      tagCreated: json.tag?.created ?? false,
    };
  });
