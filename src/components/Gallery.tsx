import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galeria } from "@/data/galeria";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [abierto, setAbierto] = useState<number | null>(null);

  useEffect(() => {
    if (abierto === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(null);
      if (e.key === "ArrowRight") setAbierto((i) => ((i ?? 0) + 1) % galeria.length);
      if (e.key === "ArrowLeft")
        setAbierto((i) => ((i ?? 0) - 1 + galeria.length) % galeria.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {galeria.map((foto, i) => (
          <li
            key={foto.alt}
            className={cn(
              "overflow-hidden rounded-xl",
              i === 0 && "col-span-2 row-span-2 lg:col-span-2",
              i === 3 && "lg:col-span-2",
            )}
          >
            <button
              type="button"
              onClick={() => setAbierto(i)}
              className="group block size-full cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
              aria-label={`Ampliar fotografía: ${foto.alt}`}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                width={1408}
                height={1008}
                loading="lazy"
                className={cn(
                  "size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105",
                  i === 0 ? "aspect-square lg:aspect-[4/3]" : "aspect-[4/3]",
                )}
              />
            </button>
          </li>
        ))}
      </ul>

      {abierto !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de la fotografía"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/95 p-4 backdrop-blur-sm"
          onClick={() => setAbierto(null)}
        >
          <button
            type="button"
            onClick={() => setAbierto(null)}
            aria-label="Cerrar"
            className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-primary"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              setAbierto((i) => ((i ?? 0) - 1 + galeria.length) % galeria.length);
            }}
            className="absolute left-3 grid size-11 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-primary sm:left-8"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <img
              src={galeria[abierto].src}
              alt={galeria[abierto].alt}
              className="max-h-[78svh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/75">
              {galeria[abierto].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={(e) => {
              e.stopPropagation();
              setAbierto((i) => ((i ?? 0) + 1) % galeria.length);
            }}
            className="absolute right-3 grid size-11 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-primary sm:right-8"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </>
  );
}
