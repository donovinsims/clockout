import { Link } from "@tanstack/react-router";
import { type ComponentProps } from "react";

type Variant = "primary" | "outline" | "ghost" | "signal";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[var(--primary-hover)] shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--color-primary)_60%,transparent)]",
  outline: "border border-border bg-transparent text-foreground hover:bg-surface",
  ghost: "bg-transparent text-foreground hover:bg-surface",
  signal: "bg-signal text-signal-foreground hover:opacity-90",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-base",
};

type CommonProps = {
  /** legacy "amber" maps to "primary" */
  variant?: Variant | "amber";
  size?: Size;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[12px] font-medium tracking-tight transition-all duration-150 active:scale-[.98] disabled:opacity-50 min-h-11 focus-visible:outline-2 focus-visible:outline-offset-2";

function resolveVariant(v: Variant | "amber" | undefined): Variant {
  if (!v || v === "amber") return "primary";
  return v;
}

export function CTA({
  to,
  href,
  children,
  variant,
  size = "md",
  className = "",
  ...rest
}: CommonProps & {
  to?: string;
  href?: string;
  children: React.ReactNode;
} & ComponentProps<"a">) {
  const v = resolveVariant(variant);
  const cls = `${base} ${variants[v]} ${sizes[size]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...(rest as object)}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}

export function CTAButton({
  children,
  variant,
  size = "md",
  className = "",
  ...rest
}: CommonProps & ComponentProps<"button">) {
  const v = resolveVariant(variant);
  return (
    <button className={`${base} ${variants[v]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
