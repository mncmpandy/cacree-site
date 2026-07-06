import Image from "next/image";
import { BOOK_LINK } from "@/lib/config";

export default function DescriptionSection() {
  return (
    <section
      className="relative px-6 py-14 sm:py-20"
      style={{ backgroundColor: "#3f412e" }}
    >
      <div className="relative mx-auto max-w-2xl">
        {/* Le trombone reste accroché au rebord de la feuille, au-dessus du fond vert. */}
        <Image
          src="/images/paperclip.png"
          alt=""
          width={142}
          height={360}
          className="absolute right-6 top-0 z-10 h-20 w-auto -translate-y-[15%] sm:right-10 sm:h-24"
        />

        <div
          className="relative overflow-hidden rounded-2xl pt-16 shadow-xl"
          style={{
            backgroundImage: "url('/images/paper-bg.jpg')",
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
          }}
        >
          <Image
            src="/images/dried-flower.png"
            alt=""
            width={736}
            height={736}
            className="pointer-events-none absolute right-[-10%] top-[28%] w-[70%] max-w-xs rotate-[12deg] opacity-60"
          />

          <div className="relative mx-auto max-w-md space-y-4 px-6 pb-14 text-[15px] leading-relaxed [font-family:var(--font-modern-typewriter)] text-ink/80">
            <p>
              Tout commence autour d&apos;un livre &apos;The Artist&apos;s
              Way&apos; ou &apos;Libérez votre créativité&apos; en français.
              Mais c&apos;est plus un guide qu&apos;un simple livre, pour
              faire court c&apos;est un programme de 12 semaines qui te
              permet de renouer avec ton toi créatif à travers plein
              d&apos;exercices différents.
            </p>
            <p>
              Pendant ce processus tu réapprends à te connaitre, à
              interroger des mécanismes qui te bloquent sur le plan créatif
              mais aussi dans ta vie en général. Juste ça c&apos;est déjà
              trop bien, mais ce qui est encore mieux c&apos;est de trouver
              une communauté avec laquelle échanger sur ces réflexions.
            </p>
            <p>
              C&apos;est la raison pour laquelle je lance Çacrée, un espace
              pour les créatifs qui ne créent pas, plus ou moins, et qui
              sont prêts à changer ça.
            </p>
            <p>
              On se retrouve une fois par semaine à partir du 31 juillet, à
              distance, et juste les mots pour nous rapprocher !
            </p>
            <p>
              Inscris-toi sur le bouton en haut et, en attendant, tu peux te
              procurer le livre sur le bouton en dessous !
            </p>

            <div className="pt-4 text-center font-sans">
              <a
                href={BOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-ink/30 bg-transparent px-8 py-3 text-sm font-semibold tracking-wide text-ink transition hover:bg-ink/5"
              >
                Se procurer le livre
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
