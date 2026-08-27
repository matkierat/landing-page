const benefits = [
  {
    title: "Łączenie fizjoterapii z treningiem motorycznym",
    description:
      "Naprawiasz stare urazy i jednocześnie budujesz siłę. Nie musisz chodzić osobno do gabinetu i osobno do trenera, który nie ma pojęcia o Twoim rozwalonym kolanie.",
  },
  {
    title: "Indywidualny system prowadzenia online",
    description:
      "Otrzymujesz plan dopasowany do Twojego dnia, sprzętu i celu. Eliminujesz chaotyczne ruchy i ćwiczenia z przypadku, które do tej pory kończyły się nawrotem bólu kolan i pleców.",
  },
  {
    title: "Przemyślany transfer siły na Twój sport",
    description:
      "Przekładasz kilogramy podniesione na siłowni na dynamikę w biegu i wytrzymałość w walce. Zapominasz o braku tchu w kluczowych momentach.",
  },
  {
    title: "Stała kontrola techniki i regeneracji",
    description:
      "Nagrywasz swoje serie i wysyłasz mi. Poprawiam wzorce ruchowe, a co tydzień dostajesz raport z postępów. Efekt? Twój kręgosłup nie płaci ceny za 8 godzin przy biurku.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Co zyskujesz?
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-accent" />
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {benefit.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
