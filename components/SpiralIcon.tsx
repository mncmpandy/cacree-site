type SpiralIconProps = {
  className?: string;
};

export default function SpiralIcon({ className }: SpiralIconProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/images/spiral.svg" alt="" className={className} />;
}
