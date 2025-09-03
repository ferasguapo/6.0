"use client";

import { useEffect, useState } from "react";

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setShow(false);
    } else {
      alert("To install, use your browser's 'Add to Home Screen' option.");
    }
  };

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      id="install-button"
      className="ml-4 px-3 py-1 rounded bg-red-800 text-white hover:bg-red-700"
    >
      Download OBuddy App
    </button>
  );
}

