export default function ProblemSolution() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Znasz to? Tak może wyglądać Twoja zmiana.
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-100 p-8">
            <span className="mb-4 inline-block rounded-full bg-slate-300 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
              Przed
            </span>
            <p className="leading-relaxed text-slate-600">
              Wstajesz rano. Plecy sztywne. Biodra ciągną przy każdym kroku.
              Wychodzisz na bieg albo wchodzisz na matę. Po kwadransie brakuje
              tchu. Zaraz potem wraca ten sam znany ból. Koleżanki dają
              &bdquo;dobre rady&rdquo;, w sieci widzi się nierealne sylwetki z
              Instagrama, a w aptece polecają kolejne tabletki. Dźwigasz
              ciężary na siłowni, ale na ringu czy trasie biegowej nie masz z
              tego nic. Robisz mętny zestaw ćwiczeń bez planu. Życie jak w
              kieracie.
            </p>
          </div>

          <div className="rounded-xl border-2 border-accent bg-white p-8 shadow-lg shadow-accent/10">
            <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Po
            </span>
            <p className="mb-2 text-2xl font-bold text-slate-900">6:00.</p>
            <p className="leading-relaxed text-slate-700">
              Budzik dzwoni, plecy milczą. Nie dlatego, że masz farta – bo
              ktoś w końcu zajął się tym, co naprawdę szwankowało. Trening
              siłowy robi swoje: więcej dynamiki na macie, lepsze tempo w
              trasie, brak powodów żeby znowu jechać do fizjo. Bez
              zgadywania, bez &bdquo;chyba tak będzie dobrze&rdquo; – plan
              wynika z tego, jak się faktycznie ruszasz, nie z poradnika z
              internetu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
