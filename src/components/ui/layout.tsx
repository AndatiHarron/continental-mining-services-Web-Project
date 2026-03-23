import { Footer } from "@/components/features/layout/footer";
import { Navbar } from "@/components/features/layout/navbar";

import { useEffect } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const scriptId = "lyrro-ai-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://code.tidio.co/zlndi6qxipdtoljf37hsefdf5wlwzjce.js";
      script.async = true;
      document.body.appendChild(script);
    }
    return () => {
      const script = document.getElementById(scriptId);
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">{children}</main>
      {/* Floating Lyrro AI widget anchor */}
      <div
        id="lyrro-ai-anchor"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 9999,
          pointerEvents: "none", // Let the widget handle its own pointer events
        }}
      />
      <Footer />
    </div>
  );
}
