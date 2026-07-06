import Image from "next/image";
import SpiralIcon from "./SpiralIcon";
import SignupForm from "./SignupForm";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-between overflow-hidden rounded-b-[2.5rem] px-6 pb-10 pt-8 text-center">
      <Image
        src="/images/hero-tree.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/25 to-ink/70" />

      <h1 className="relative text-4xl text-cream drop-shadow-sm [font-family:var(--font-stainger)]">
        Çacrée
      </h1>

      <SpiralIcon className="relative h-56 w-56 drop-shadow-sm" />

      <div className="relative flex flex-col items-center gap-6">
        <p className="max-w-xs text-balance text-sm leading-relaxed text-cream/95">
          Cercle de lecture autour de The Artist&apos;s Way - Libérez votre
          créativité par Julia Cameron
        </p>
        <SignupForm
          triggerLabel="Inscription"
          className="rounded-full bg-cream px-8 py-3 text-sm font-semibold tracking-wide text-olive shadow-sm transition hover:bg-cream/90"
        />
      </div>
    </section>
  );
}
