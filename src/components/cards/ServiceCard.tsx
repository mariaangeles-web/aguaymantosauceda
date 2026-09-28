import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import type { Servicio } from "@/data/servicios";

export function ServiceCard({ servicio }: { servicio: Servicio }) {
  return (
    <article
      id={servicio.ancla}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-lift"
    >
      <span className="grid size-13 place-items-center rounded-lg bg-secondary text-leaf transition-colors duration-500 group-hover:bg-gold group-hover:text-gold-foreground">
        <Icon name={servicio.icono} className="size-6" />
      </span>
      <h3 className="mt-6 text-lg text-primary">{servicio.titulo}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {servicio.descripcion}
      </p>
      <Link
        to="/contacto"
        search={{ servicio: servicio.ancla }}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-leaf"
      >
        Consultar
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
