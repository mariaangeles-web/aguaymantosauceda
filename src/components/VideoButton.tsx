import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import { video } from "@/config/site";

/** Botón que abre el video de YouTube a pantalla completa. */
export function VideoButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group mt-6 inline-flex items-center gap-4 text-cream focus-visible:outline-none"
      >
        <span className="relative grid size-14 place-items-center rounded-full bg-gold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:ring-2 group-focus-visible:ring-cream">
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" aria-hidden="true" />
          <Play className="relative size-5 translate-x-0.5 fill-current" aria-hidden="true" />
        </span>
        <span className="text-left">
          <span className="block text-sm font-semibold">Ver video</span>
          <span className="block text-xs text-cream/70">{video.titulo}</span>
        </span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={video.titulo}
          className="fixed inset-0 z-[70] bg-ink"
          onClick={() => setOpen(false)}
        >
          <iframe
            className="size-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.titulo}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar video"
            className="absolute top-5 right-5 grid size-12 place-items-center rounded-full bg-cream text-primary shadow-lift transition-transform hover:scale-105"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </>
  );
}
