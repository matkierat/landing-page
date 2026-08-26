import Image from "next/image";

const stories = [
  {
    initial: "E",
    name: "Edyta Bielska",
    discipline: "Lekkoatletyka – multimedalistka Mistrzostw Polski",
    quote:
      "Współpracuję z Mateuszem od dłuższego czasu i śmiało mogę polecić jego usługi. Zmagałam się z problemem kolana skoczka, dzięki profesjonalnemu podejściu i doborowi zestawu ćwiczeń dzisiaj mogę bić swoje rekordy na bieżni. Mateusz gasi każdy pożar, który pojawia się na drodze – mniejsza kontuzja czy przeciążenie czy jakiś inny problem związany z profesjonalnym treningiem zostaje szybko zdiagnozowany i wyleczony. Pełen profesjonalizm, duża wiedza i świetne podejście do sportowców!",
    photos: ["/testimonials/Edyta-1.jpg", "/testimonials/Edyta-2.jpg"],
  },
  {
    initial: "S",
    name: "Szymon Majewski",
    discipline: "K1 – Vice Mistrz Świata WAKO i zdobywca Pucharu Świata WAKO",
    quote:
      "Nawet podczas kontuzji ręki treningi nie musiały zostać przerwane – Mateusz tak modyfikował ćwiczenia, żebym mógł dalej robić realny progres, nie obciążając ręki. Po sezonie z nim moje największe słabości stały się najmocniejszymi atutami. Pełen profesjonalizm i świetna wiedza!",
    photos: ["/testimonials/szymon-1.jpg", "/testimonials/szymon-2.jpg"],
  },
  {
    initial: "M",
    name: "Marta Łagownik",
    discipline: "Triathlon – PRO Series",
    quote:
      "Trzy dyscypliny to trzy różne obciążenia dla ciała. Praca nad stabilizacją i mobilnością pozwoliła mi trenować na pełnych obrotach bez tego chronicznego napięcia, które wcześniej towarzyszyło mi na każdym etapie sezonu.",
    photos: [] as string[],
  },
  {
    initial: "M",
    name: "Mikołaj Cygert",
    discipline: "BJJ – Mistrz Polski ADCC",
    quote:
      "Z Mateuszem współpracuję od 5 lat i to czysta przyjemność. Jego przekrojowa wiedza z przygotowania motorycznego pozwoliła mi bezpiecznie rozwijać się w kilku sportach – siłownia, boks, kickboxing, BJJ – zawsze z planem dopasowanym do aktualnych celów. Dzięki temu mimo sportów kontaktowych znacznie ograniczyłem kontuzje na macie. Efekt? Szczytowa forma dokładnie na dzień zawodów ADCC – które wygrałem.",
    photos: ["/testimonials/Mikolaj-1.jpeg", "/testimonials/Mikolaj-2.jpeg"],
  },
];

export default function SocialProof() {
  return (
    <section className="bg-dark py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Zaufali mi
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Efekty podopiecznych
          </h2>
          <p className="leading-relaxed text-slate-400">
            Od amatorów trenujących po godzinach po reprezentantów Polski i
            mistrzów świata – pracuję z ludźmi, dla których sprawne ciało to
            warunek wyników, nie dodatek.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.name}
              className="flex flex-col gap-5 rounded-xl border border-slate-700 bg-dark-soft p-8"
            >
              {story.photos.length > 0 && (
                <div className="-mx-8 -mt-8 mb-2 grid grid-cols-2 gap-1 overflow-hidden rounded-t-xl">
                  {story.photos.map((photo) => (
                    <div key={photo} className="relative aspect-square">
                      <Image
                        src={photo}
                        alt={`${story.name} w akcji`}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 15vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <span className="text-3xl leading-none text-accent">
                &ldquo;
              </span>

              <p className="text-sm leading-relaxed text-slate-300">
                {story.quote}
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-slate-700 pt-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-light to-accent-dark text-base font-bold text-white">
                  {story.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {story.name}
                  </p>
                  <p className="text-xs text-slate-400">{story.discipline}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
