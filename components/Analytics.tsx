"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const STORAGE_KEY = "cookie-consent";
const PIXEL_ID = "1055939217276571";
const CLARITY_ID = "yf5kctfkb0";

type Consent = "granted" | "denied" | null;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function Analytics() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "granted" || saved === "denied") setConsent(saved);
    } catch {}
    setReady(true);
  }, []);

  // Zdarzenie Lead po kliknięciu w dowolny link do Calendly
  useEffect(() => {
    if (consent !== "granted") return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a");
      if (link?.href.includes("calendly.com")) {
        window.fbq?.("track", "Lead");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div
          role="dialog"
          aria-label="Zgoda na pliki cookies"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-dark/95 px-4 py-2.5 text-white backdrop-blur"
        >
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
            <p className="text-xs leading-snug text-slate-300">
              Ta strona używa cookies analitycznych i reklamowych (Meta,
              Clarity).
            </p>
            <div className="flex shrink-0 gap-1.5">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="rounded-md px-3 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light active:scale-[0.98]"
              >
                Odrzucam
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light active:scale-[0.98]"
              >
                Akceptuję
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
