import { cn } from "@/lib/utils";

/** Logotipo provisional de texto con identidad gráfica del fruto. [LOGO] */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-full",
          tone === "dark" ? "bg-gold/20" : "bg-primary/8",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="size-7" fill="none">
          <path
            d="M16 4c3 3.4 6.4 4.6 10 4.6-1.2 3.4-3.6 5.6-6.8 6.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="text-leaf"
          />
          <path
            d="M16 4c-3 3.4-6.4 4.6-10 4.6 1.2 3.4 3.6 5.6 6.8 6.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="text-leaf"
          />
          <circle cx="16" cy="21" r="7" className="fill-gold" />
          <circle cx="13.5" cy="18.5" r="2" className="fill-gold-soft" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-semibold tracking-tight",
            tone === "dark" ? "text-cream" : "text-primary",
          )}
        >
          AGUAYMANTO PERÚ
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-medium tracking-[0.28em] uppercase",
            tone === "dark" ? "text-gold-soft" : "text-leaf",
          )}
        >
          Producción y comercio
        </span>
      </span>
    </span>
  );
}
