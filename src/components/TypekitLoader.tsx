// src/components/TypekitLoader.tsx
"use client";

import { useEffect } from "react";

interface TypekitConfig {
  kitId: string;
  scriptTimeout: number;
  async: boolean;
}

declare global {
  interface Window {
    Typekit?: {
      load: (config: TypekitConfig) => void;
    };
  }
}

const TypekitLoader = () => {
  useEffect(() => {
    (function (d) {
      const config:TypekitConfig = {
        kitId: "vzk2wef",
        scriptTimeout: 3000,
        async: true,
      };
      const h = d.documentElement;
      const t = setTimeout(function () {
        h.className =
          h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
      }, config.scriptTimeout);
      const tk = d.createElement("script");
      h.className += " wf-loading";
      tk.src = "https://use.typekit.net/" + config.kitId + ".js";
      tk.async = true;
      tk.onload = () => {
        clearTimeout(t);
        try {
          if (window.Typekit) {
            window.Typekit.load(config);
          }
        } catch (e) {
          console.error("Error loading Typekit fonts", e);
        }
      };
      const s = document.getElementsByTagName("script")[0];
      s.parentNode?.insertBefore(tk, s);
    })(document);
  }, []);

  return null;
};

export default TypekitLoader;
