import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import InstallButton from "./InstallButton";

export const metadata: Metadata = {
  title: "obuddy5000",
  description: "Vehicle diagnostics assistant",
  manifest: "/manifest.json",
  themeColor: "#4b0000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4b0000" />
      </head>
      <body>
        <div className="flex justify-end items-center p-2">
          {/* Google Translate widget should be here */}
          <div id="google-translate-element" className="mr-4"></div>
          <InstallButton />
        </div>

        {children}

        {/* ✅ Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2479836262167230"
          crossOrigin="anonymous"
        />

        {/* ✅ Monetag Script */}
        <Script
          id="monetag-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, z, s) {
                s.src = 'https://' + d + '/400/' + z;
                try {
                  (document.body || document.documentElement).appendChild(s);
                } catch (e) {}
              })('gizokraijaw.net', 9787836, document.createElement('script'));
            `,
          }}
        />

        {/* ✅ Counter.dev Script */}
        <Script
          src="https://cdn.counter.dev/script.js"
          data-id="81321b51-0ec8-4922-a991-afb5927fa309"
          data-utcoffset="-4"
          strategy="afterInteractive"
        />

        {/* ✅ Register Service Worker */}
        <Script id="sw-register" strategy="afterInteractive">{`
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js');
          }
        `}</Script>
      </body>
    </html>
  );
}

