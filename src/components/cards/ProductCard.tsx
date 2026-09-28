import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Producto } from "@/data/productos";

export function ProductCard({ producto }: { producto: Producto }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={producto.imagen}
          alt={producto.alt}
          width={1408}
          height={1008}
          loading="lazy"
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-gold-foreground uppercase">
          Producto
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl text-primary">{producto.nombre}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{producto.descripcion}</p>
        <ul className="mt-5 space-y-2 text-sm text-foreground/75">
          {producto.caracteristicas.map((c) => (
            <li key={c} className="flex items-start gap-2.5">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
        <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-5 text-xs">
          <div>
            <dt className="font-semibold tracking-[0.12em] text-leaf uppercase">Presentación</dt>
            <dd className="mt-1 text-muted-foreground">{producto.presentacion}</dd>
          </div>
          <div>
            <dt className="font-semibold tracking-[0.12em] text-leaf uppercase">Peso</dt>
            <dd className="mt-1 text-muted-foreground">{producto.peso}</dd>
          </div>
          <div>
            <dt className="font-semibold tracking-[0.12em] text-leaf uppercase">Disponibilidad</dt>
            <dd className="mt-1 text-muted-foreground">{producto.disponibilidad}</dd>
          </div>
          <div>
            <dt className="font-semibold tracking-[0.12em] text-leaf uppercase">Precio</dt>
            <dd className="mt-1 text-muted-foreground">{producto.precio}</dd>
          </div>
        </dl>
        <Button asChild variant="quiet" size="lg" className="mt-7 w-full">
          <Link to="/contacto" search={{ producto: producto.slug }}>
            {producto.cta}
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
