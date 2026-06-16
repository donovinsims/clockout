import { useState } from "react";

type Props = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  label?: string;
  className?: string;
};

export function ImageWithFallback({ src, alt, width = 400, height = 500, label, className = "" }: Props) {
  const [errored, setErrored] = useState(false);
  if (src && !errored) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onError={() => setErrored(true)}
        className={`rounded-xl border border-line object-cover ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center rounded-xl border-2 border-dashed border-line bg-surface text-center text-dim ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div className="px-6 py-10">
        <div className="mono-num text-xs uppercase tracking-wider text-amber">Photo placeholder</div>
        <div className="mt-2 text-sm">{label ?? alt}</div>
        <div className="mono-num mt-3 text-xs text-dim">
          {width} × {height} px
        </div>
      </div>
    </div>
  );
}
