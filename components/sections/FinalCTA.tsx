export default function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-dark py-24 text-white"
    >
      <div
        className="pointer-events-none absolute -right-32 -bottom-32 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Koniec ze zgadywaniem, brakiem tchu i bólem, który nie odpuszcza.
          Czas na sprawne ciało.
        </h2>

        <p className="text-lg text-slate-300">
          Umów darmową konsultację. Przeanalizujemy Twój problem i ustalimy
          konkretny plan działania.
        </p>

        <a
          href="https://calendly.com/mat-kierat/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-accent px-10 py-5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
        >
          Umawiam się!
        </a>
      </div>
    </section>
  );
}
