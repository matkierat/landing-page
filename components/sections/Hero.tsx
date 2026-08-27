import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark text-white">
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Bieganie, mata, siłownia. Ból i tak wraca? Zbuduj ciało, które
            nadąża za Twoim trybem życia, bez kontuzji.
          </h1>

          <h2 className="max-w-md text-lg text-slate-400 md:text-xl">
            Trening motoryczny i rehabilitacja online pod opieką trenera i
            fizjoterapeuty w jednym. Przenieś siłę z siłowni na sportowe
            wyniki.
          </h2>

          <a
            href="https://calendly.com/mat-kierat/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-md bg-accent px-10 py-5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark md:text-lg"
          >
            Umów darmową konsultację
          </a>
        </div>

        <div className="relative md:justify-self-end">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl md:w-[85%] md:rounded-tr-[4rem]">
            <Image
              src="/front.jpg"
              alt="Praca z pacjentem nad mobilnością i stabilizacją"
              width={2947}
              height={4229}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
