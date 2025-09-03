import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "obuddy5000",
  description: "Vehicle diagnostics assistant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification (replace xxxxxxx with the code from AdSense/Search Console) */}
        <meta
          name="google-site-verification"
          content="xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />

        {/* ✅ Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2479836262167230"
          crossOrigin="anonymous"
        ></script>
      
      <link rel="manifest" href="/manifest.json" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2479836262167230" crossorigin="anonymous"></script>
    
</head>
      <body>
        {children}

        {/* Monetag Script */}
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

        {/* Counter.dev Script */}
        <Script
          src="https://cdn.counter.dev/script.js"
          data-id="81321b51-0ec8-4922-a991-afb5927fa309"
          data-utcoffset="-4"
          strategy="afterInteractive"
        />
      
      <script>
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/service-worker.js');
        }
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
          e.preventDefault();
          deferredPrompt = e;
          const installBtn = document.getElementById('install-button');
          if (installBtn) installBtn.style.display = 'inline-block';
        });
        function installApp() {
          if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => {
              deferredPrompt = null;
            });
          }
        }
      </script>
    

        <button id="install-button" className="ml-4 px-3 py-1 rounded bg-red-800 text-white hover:bg-red-700">
          Download OBuddy App
        </button>
        <script dangerouslySetInnerHTML={{ __html: `
          let deferredPrompt;
          const installBtn = document.getElementById('install-button');
          installBtn.style.display = 'none';
          window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            installBtn.style.display = 'inline-block';
          });
          installBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
              deferredPrompt.prompt();
              const { outcome } = await deferredPrompt.userChoice;
              deferredPrompt = null;
            } else {
              alert('To install, use your browser\'s "Add to Home Screen" option.');
            }
          });
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js');
          }
        `}} />

</body>
    </html>
  );
}


        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4b0000" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2479836262167230"
                crossOrigin="anonymous"></script>
