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
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-[280px_1fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Pytania,
            <br />
            które słyszę najczęściej
          </h2>
          <p className="mt-4 text-slate-600">
            Nie znalazłeś odpowiedzi? Napisz bezpośrednio, odpowiadam sam.
          </p>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-slate-200 py-8 first:border-t-0 first:pt-0 md:grid-cols-[3rem_1fr]"
            >
              <span className="font-heading text-2xl font-bold text-slate-200 md:text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold text-slate-900 md:text-lg">
                {faq.question}
              </h3>
              <span className="hidden md:block" />
              <p className="leading-relaxed text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
