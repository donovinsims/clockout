import { useState } from "react";

type Props = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  label?: string;
  className?: string;
};

export function ImageWithFallback({
  src,
  alt,
  width = 400,
  height = 500,
  label,
  className = "",
}: Props) {
  const [errored, setErrored] = useState(false);
  // If no source or image failed to load, don't render anything.
  if (!src || errored) return null;
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
