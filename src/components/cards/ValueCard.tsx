import { Icon } from "@/components/Icon";

type Props = { icono: string; titulo: string; texto: string; tone?: "light" | "dark" };

export function ValueCard({ icono, titulo, texto, tone = "light" }: Props) {
  if (tone === "dark") {
    return (
      <article className="group h-full rounded-xl border border-cream/15 bg-cream/6 p-7 transition-colors duration-500 hover:border-gold/60 hover:bg-cream/10">
        <span className="grid size-12 place-items-center rounded-lg bg-gold/18 text-gold-soft">
          <Icon name={icono} className="size-5.5" />
        </span>
        <h3 className="mt-5 text-lg text-cream">{titulo}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-cream/75">{texto}</p>
      </article>
    );
  }

  return (
    <article className="group h-full rounded-xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <span className="grid size-12 place-items-center rounded-lg bg-secondary text-leaf transition-colors duration-500 group-hover:bg-gold group-hover:text-gold-foreground">
        <Icon name={icono} className="size-5.5" />
      </span>
      <h3 className="mt-5 text-lg text-primary">{titulo}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{texto}</p>
    </article>
  );
}
