import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Bieganie, mata, siłownia — a ból i tak wraca? Zbuduj ciało, które
            nadąża za Twoim trybem życia, bez kontuzji.
          </h1>

          <h2 className="text-lg text-slate-300 md:text-xl">
            Trening motoryczny i rehabilitacja online pod opieką trenera i
            fizjoterapeuty w jednym. Przenieś siłę z siłowni na sportowe
            wyniki.
          </h2>

          <a
            href="https://calendly.com/mat-kierat/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-md bg-accent px-10 py-5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark md:text-lg"
          >
            Umów darmową konsultację
          </a>
        </div>

        <div className="flex justify-center">
          <div className="mx-auto aspect-[3/4] w-[96%] overflow-hidden rounded-lg sm:w-[72%] md:w-[96%]">
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
