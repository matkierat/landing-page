"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Czy rehabilitacja i trening motoryczny online są bezpieczne?",
    answer:
      "Tak. Każde ćwiczenie analizuję na podstawie Twoich nagrań wideo. Otrzymujesz dokładne instrukcje wykonania i dobór ciężaru na podstawie Twojego aktualnego stanu zdrowia.",
  },
  {
    question: "Co jeśli mam stary uraz po operacji i nadal czuję ból?",
    answer:
      "Założeniem współpracy jest eliminacja takich problemów. Łączę diagnostykę fizjoterapeutyczną z progresywnym obciążeniem, by odbudować osłabione tkanki i pozbyć się dyskomfortu.",
  },
  {
    question:
      "Pracuję przy komputerze i nie mam czasu na długie sesje. Damy radę?",
    answer:
      "Plan układam pod Twój plan dnia. Wystarczą krótkie, celowane jednostki treningowe nakierowane na Twoje słabe punkty.",
  },
  {
    question: "Czym różni się to od zwykłego planu od trenera z siłowni?",
    answer:
      "Zwykły trener rzadko zna mechanikę kontuzji i fizjologię bólu. Jako fizjoterapeuta buduję Twój plan tak, aby leczyć urazy i jednocześnie podnosić Twoją sprawność sportową.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Najczęściej zadawane pytania
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-accent transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
