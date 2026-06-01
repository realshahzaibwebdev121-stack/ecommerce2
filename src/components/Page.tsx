import { useEffect, useRef } from "react";
import manifest from "../data/pages-manifest.json";

type PageName = keyof typeof manifest;

export function Page({ name }: { name: PageName }) {
  const ref = useRef<HTMLDivElement>(null);
  const entry = manifest[name] as { body: string; scripts: string; styles: string };

  useEffect(() => {
    // Inject page-specific scripts inside the mounted DOM.
    const el = ref.current;
    if (!el) return;
    // Wait a tick to ensure tailwind CDN scans the new DOM
    const t = setTimeout(() => {
      try {
        // Re-run page scripts. Wrap in IIFE so vars are scoped.
        // eslint-disable-next-line no-new-func
        const fn = new Function(entry.scripts);
        fn();
      } catch (err) {
        console.warn("[page-script]", name, err);
      }
    }, 30);
    return () => clearTimeout(t);
  }, [name, entry.scripts]);

  return (
    <>
      {entry.styles && <style dangerouslySetInnerHTML={{ __html: entry.styles }} />}
      <div ref={ref} dangerouslySetInnerHTML={{ __html: entry.body }} />
    </>
  );
}
