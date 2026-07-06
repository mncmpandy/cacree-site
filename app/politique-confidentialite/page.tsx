import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Çacrée",
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-ink">
      <h1 className="font-serif text-2xl font-bold">
        Politique de confidentialité
      </h1>
      <p className="mt-2 text-sm text-ink/60">Dernière mise à jour : 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/80">
        <section>
          <h2 className="font-serif text-lg text-ink">
            Quelles données sont collectées ?
          </h2>
          <p className="mt-2">
            Quand tu t&apos;inscris via le formulaire du site, nous
            collectons : ton adresse email, ton choix (oui/non) de recevoir
            des nouvelles sur les prochains cercles et ateliers, et la date
            et l&apos;heure de ta soumission (horodatage de consentement).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-ink">
            Pourquoi ces données ?
          </h2>
          <p className="mt-2">
            Ton email sert uniquement à t&apos;envoyer les informations
            pratiques des rencontres du cercle de lecture Çacrée. Si tu
            coches la case correspondante, il peut aussi être utilisé pour
            t&apos;informer des prochains cercles, ateliers et nouvelles
            expériences créatives. L&apos;horodatage est conservé pour
            prouver la date de ton consentement, conformément au RGPD.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-ink">
            Où sont stockées ces données ?
          </h2>
          <p className="mt-2">
            Les réponses sont stockées dans un Google Sheet privé, via
            Google Forms. Elles ne sont ni vendues, ni partagées avec des
            tiers à des fins commerciales.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-ink">
            Combien de temps sont-elles conservées ?
          </h2>
          <p className="mt-2">
            Tes données sont conservées tant que tu fais partie de la
            communauté Çacrée, et supprimées sur simple demande de ta part.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-ink">Tes droits</h2>
          <p className="mt-2">
            Conformément au RGPD, tu peux à tout moment demander l&apos;accès,
            la rectification ou la suppression de tes données en nous
            écrivant à{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
