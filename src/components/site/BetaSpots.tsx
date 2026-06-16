import { offer } from "@/data/offer";

export function BetaSpots({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-signal)]/40 bg-[color-mix(in_oklab,var(--color-signal)_12%,transparent)] px-3 py-1 text-xs font-medium text-[color-mix(in_oklab,var(--color-signal)_70%,var(--color-foreground))] ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
      </span>
      <span className="mono-num">
        {offer.spotsRemaining} of {offer.spotsTotal}
      </span>{" "}
      beta spots remain
    </span>
  );
}
