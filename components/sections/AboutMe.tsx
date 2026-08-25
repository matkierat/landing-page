import Image from "next/image";

const courses = [
  {
    title: "Fizjoterapia – studia jednolite magisterskie",
    issuer: "Gdańska Akademia Medyczna Nauk Stosowanych",
    date: "Lipiec 2024",
  },
  {
    title: "Sport – studia licencjackie",
    issuer:
      "Akademia Wychowania Fizycznego i Sportu im. Jędrzeja Śniadeckiego w Gdańsku",
    date: "Lipiec 2020",
  },
  {
    title: "ASCA Level 1 S&C Coach Accreditation",
    issuer: "ASCA",
    date: "Styczeń 2023",
  },
  {
    title: "ATHLETIX COACH",
    issuer: "Paweł Łydek",
    date: "Maj 2025",
  },
  {
    title: "RTS post ACLR",
    issuer: "Piotr Ciebiera",
    date: "Wrzesień 2022",
  },
  {
    title: "Dwubój Olimpijski",
    issuer: "Pomorska Szkoła Fitness 4Fit",
    date: "Październik 2021",
  },
  {
    title: "Strength&Power development",
    issuer: "Praktyczna Strona Treningu",
    date: "Kwiecień 2023",
  },
  {
    title: "Programowanie i periodyzacja treningu siły mięśniowej",
    issuer: "Praktyczna Strona Treningu",
    date: "Październik 2023",
  },
  {
    title: "Mobility Work",
    issuer: "Akademia Kultury Fizycznej",
    date: "Styczeń 2022",
  },
  {
    title: "Współczesna kinezyterapia",
    issuer: "Praktyczna Strona Treningu",
    date: "Wrzesień 2024",
  },
];

export default function AboutMe() {
  return (
    <section id="o-nas" className="bg-dark py-20 text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[280px_1fr]">
        <div className="mx-auto h-56 w-56 shrink-0 overflow-hidden rounded-full border-2 border-accent md:h-64 md:w-64">
          <Image
            src="/Ja.png"
            alt="Zdjęcie trenera i fizjoterapeuty"
            width={512}
            height={512}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">O mnie</h2>

          <p className="mb-6 text-lg leading-relaxed text-slate-300">
            Połączyłem wiedzę fizjoterapeutyczną z praktyką trenera
            przygotowania motorycznego. Nie sprzedaję gotowców z internetu
            ani &bdquo;magicznych metod&rdquo; na odchudzanie – patrzę na
            dane, mechanikę Twojego ciała i to, jak faktycznie wygląda Twój
            dzień.
          </p>

          <p className="text-lg leading-relaxed text-slate-300">
            Dwie operacje, kilka kontuzji, sporo błędów po drodze – sam
            przeszedłem tę drogę, więc wiem, jak wygląda powrót do sportu po
            urazach i jak wyciągnąć organizm z ciągłego zmęczenia przy
            siedzącym trybie życia. Dostajesz proste narzędzia, które
            działają. Ty przynosisz zaangażowanie, ja daję dokładny schemat
            działania.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-6">
        <h3 className="mb-8 text-center text-2xl font-bold md:text-left">
          Kursy i szkolenia
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-lg border border-slate-700 bg-dark-soft p-5"
            >
              <p className="font-semibold text-white">{course.title}</p>
              <p className="mt-1 text-sm text-slate-400">
                {course.issuer} | {course.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
