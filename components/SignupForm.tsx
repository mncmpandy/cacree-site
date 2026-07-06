"use client";

import { useId, useRef, useState } from "react";
import {
  GOOGLE_FORM_ACTION_URL,
  GOOGLE_FORM_EMAIL_ENTRY,
  GOOGLE_FORM_OPTIN_ENTRY,
  GOOGLE_FORM_TIMESTAMP_ENTRY,
} from "@/lib/config";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

export default function SignupForm({
  triggerLabel = "Inscription",
  className = "",
}: {
  triggerLabel?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [optIn, setOptIn] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const timestampRef = useRef<HTMLInputElement>(null);
  const iframeName = useId();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!EMAIL_REGEX.test(email)) {
      e.preventDefault();
      setStatus("error");
      return;
    }
    if (timestampRef.current) {
      timestampRef.current.value = new Date().toLocaleString("fr-FR");
    }
    setStatus("submitting");
    // La soumission réelle part vers l'iframe cachée, voir onLoad ci-dessous.
  }

  function handleIframeLoad() {
    if (status === "submitting") {
      setStatus("success");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ||
          "rounded-full bg-olive px-8 py-3 text-sm font-semibold tracking-wide text-cream shadow-sm transition hover:bg-olive-light"
        }
      >
        {triggerLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-cream p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {status === "success" ? (
              <div className="text-center">
                <p className="font-serif text-lg text-ink">
                  Merci, tu es inscrit·e !
                </p>
                <p className="mt-2 text-sm text-ink/70">
                  On se retrouve le 31 juillet. Surveille ta boîte mail.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-full bg-olive px-6 py-2 text-sm font-semibold text-cream"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <p className="font-serif text-lg text-ink">
                  Rejoins le cercle de lecture
                </p>
                <p className="mt-1 text-sm text-ink/70">
                  Laisse ton mail, pour rejoindre nos rendez-vous hebdomadaire
                </p>
                <form
                  ref={formRef}
                  action={GOOGLE_FORM_ACTION_URL}
                  method="POST"
                  target={iframeName}
                  onSubmit={handleSubmit}
                  className="mt-4 flex flex-col gap-3"
                >
                  <label htmlFor="email" className="sr-only">
                    Adresse email
                  </label>
                  <input
                    id="email"
                    name={GOOGLE_FORM_EMAIL_ENTRY}
                    type="email"
                    required
                    placeholder="ton@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    className="rounded-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-olive"
                  />
                  {status === "error" && (
                    <p className="text-sm text-red-700">
                      Merci d&apos;entrer une adresse email valide.
                    </p>
                  )}

                  {/* Valeurs cachées envoyées au Google Form en texte clair */}
                  <input
                    type="hidden"
                    name={GOOGLE_FORM_OPTIN_ENTRY}
                    value={optIn ? "Oui" : "Non"}
                  />
                  <input
                    ref={timestampRef}
                    type="hidden"
                    name={GOOGLE_FORM_TIMESTAMP_ENTRY}
                    defaultValue=""
                  />

                  <label className="flex items-start gap-2 text-left text-xs leading-relaxed text-ink/70">
                    <input
                      type="checkbox"
                      checked={optIn}
                      onChange={(e) => setOptIn(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-olive"
                    />
                    Je souhaite rester informé(e) des prochains cercles,
                    ateliers et nouvelles expériences créatives.
                  </label>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-full bg-olive px-6 py-3 text-sm font-semibold text-cream transition hover:bg-olive-light disabled:opacity-60"
                  >
                    {status === "submitting" ? "Envoi..." : "Je m'inscris"}
                  </button>

                  <p className="text-center text-xs text-ink/50">
                    En t&apos;inscrivant, tu acceptes notre{" "}
                    <a
                      href="/politique-confidentialite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </form>
              </>
            )}
          </div>
          {/* Iframe cachée qui reçoit la réponse du Google Form sans recharger la page */}
          <iframe
            name={iframeName}
            title="signup-frame"
            className="hidden"
            onLoad={handleIframeLoad}
          />
        </div>
      )}
    </>
  );
}
