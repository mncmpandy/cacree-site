import type { CSSProperties } from "react";

type SpiralIconProps = {
  className?: string;
  style?: CSSProperties;
};

export default function SpiralIcon({ className, style }: SpiralIconProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/images/spiral.svg" alt="" className={className} style={style} />;
}
