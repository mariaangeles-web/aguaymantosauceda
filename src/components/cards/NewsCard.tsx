import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { Noticia } from "@/data/noticias";

export function NewsCard({ noticia }: { noticia: Noticia }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <Link
        to="/noticias/$slug"
        params={{ slug: noticia.slug }}
        className="relative block aspect-[16/10] overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={noticia.imagen}
          alt={noticia.alt}
          width={1408}
          height={880}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-secondary px-3 py-1 font-semibold tracking-[0.1em] text-leaf uppercase">
            {noticia.categoria}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            <time dateTime={noticia.fecha}>{noticia.fechaTexto}</time>
          </span>
        </div>
        <h3 className="mt-4 text-xl leading-snug text-balance text-primary">
          <Link
            to="/noticias/$slug"
            params={{ slug: noticia.slug }}
            className="transition-colors hover:text-leaf"
          >
            {noticia.titulo}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {noticia.resumen}
        </p>
        <Link
          to="/noticias/$slug"
          params={{ slug: noticia.slug }}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-leaf"
        >
          Leer más
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
