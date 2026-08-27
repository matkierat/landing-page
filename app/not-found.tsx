import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-dark px-6 text-center text-white">
      <Image
        src="/logo.png"
        alt="Logo"
        width={140}
        height={140}
        className="h-12 w-auto"
      />

      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Błąd 404
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          Tej strony tu nie ma.
        </h1>
        <p className="mt-3 max-w-md text-slate-400">
          Link, w który kliknąłeś, mógł wygasnąć albo strona została
          przeniesiona. Wróć na stronę główną.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-accent-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
      >
        Wróć na stronę główną
      </Link>
    </main>
  );
}
