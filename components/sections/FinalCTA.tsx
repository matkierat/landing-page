export default function FinalCTA() {
  return (
    <section id="kontakt" className="bg-dark py-20 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
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
          className="inline-flex items-center justify-center rounded-md bg-accent px-10 py-5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
        >
          Umawiam się!
        </a>
      </div>
    </section>
  );
}
