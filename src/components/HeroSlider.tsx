import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import campo from "@/assets/hero-campo.jpg";
import cosecha from "@/assets/hero-cosecha.jpg";
import fruto from "@/assets/hero-fruto.jpg";

type Slide = {
  imagen: string;
  alt: string;
  titulo: string;
  texto?: string;
  acciones: {
    label: string;
    to: "/productos" | "/contacto" | "/quienes-somos";
    variant: "gold" | "onDark";
  }[];
};


const slides: Slide[] = [
  {
    imagen: campo,
    alt: "Cultivo de aguaymanto al amanecer en los Andes peruanos",
    titulo: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    texto:
      "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    acciones: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "gold" },
      { label: "Solicitar cotización", to: "/contacto", variant: "onDark" },
    ],
  },
  {
    imagen: cosecha,
    alt: "Productores peruanos cosechando aguaymanto en el campo",
    titulo: "Del campo peruano a nuevos mercados",
    texto:
      "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    acciones: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "gold" }],
  },
  {
    imagen: fruto,
    alt: "Aguaymanto fresco seleccionado en una caja de madera",
    titulo: "Natural, versátil y de excelente calidad",
    acciones: [{ label: "Ver productos", to: "/productos", variant: "gold" }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => window.clearInterval(id);
  }, [paused, index]);

  return (
    <section
      aria-label="Presentación de la empresa"
      className="relative min-h-[88svh] overflow-hidden bg-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.titulo}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1200ms] ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={slide.imagen}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "size-full object-cover transition-transform duration-[9000ms] ease-out",
              i === index ? "scale-110" : "scale-100",
            )}
          />
          <div className="overlay-hero absolute inset-0" />
        </div>
      ))}

      <div className="relative z-10 container-page flex min-h-[88svh] flex-col justify-end pt-32 pb-24 sm:justify-center sm:pb-32">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-gold-soft uppercase">
            <span className="inline-block h-px w-10 bg-gold" />
            Producción y comercialización de aguaymanto
          </p>
          {slides.map((slide, i) => (
            <div
              key={slide.titulo}
              className={cn(
                "transition-all duration-700",
                i === index
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-x-0 translate-y-4 opacity-0",
              )}
            >
              <h1 className="font-display text-4xl leading-[1.08] text-balance text-cream sm:text-5xl lg:text-6xl">
                {slide.titulo}
              </h1>
              {slide.texto ? (
                <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
                  {slide.texto}
                </p>
              ) : null}
              <div className="mt-9 flex flex-wrap gap-3">
                {slide.acciones.map((accion) => (
                  <Button key={accion.label} asChild variant={accion.variant} size="xl">
                    <Link to={accion.to}>{accion.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Diapositivas">
            {slides.map((slide, i) => (
              <button
                key={slide.titulo}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none",
                  i === index ? "w-12 bg-gold" : "w-6 bg-cream/40 hover:bg-cream/70",
                )}
              />
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Diapositiva anterior"
              className="grid size-11 place-items-center rounded-full border border-cream/40 text-cream transition-colors hover:bg-cream hover:text-primary"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Diapositiva siguiente"
              className="grid size-11 place-items-center rounded-full border border-cream/40 text-cream transition-colors hover:bg-cream hover:text-primary"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
