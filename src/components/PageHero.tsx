import type { ReactNode } from "react";

export function PageHero({
  etiqueta,
  titulo,
  descripcion,
  imagen,
  alt,
}: {
  etiqueta: string;
  titulo: ReactNode;
  descripcion?: string;
  imagen: string;
  alt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary pt-36 pb-20 lg:pt-44 lg:pb-28">
      <img
        src={imagen}
        alt={alt}
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="overlay-hero absolute inset-0" />
      <div className="relative container-page">
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-gold-soft uppercase">
          <span className="inline-block h-px w-10 bg-gold" />
          {etiqueta}
        </p>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.1] text-balance text-cream sm:text-5xl lg:text-6xl">
          {titulo}
        </h1>
        {descripcion ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {descripcion}
          </p>
        ) : null}
      </div>
    </section>
  );
}
