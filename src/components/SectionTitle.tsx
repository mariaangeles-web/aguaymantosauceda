import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  etiqueta?: string;
  titulo: ReactNode;
  descripcion?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionTitle({
  etiqueta,
  titulo,
  descripcion,
  align = "left",
  tone = "light",
  className,
  as: Heading = "h2",
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        tone === "dark" && "text-cream",
        className,
      )}
    >
      {etiqueta ? (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase",
            align === "center" && "justify-center",
            tone === "dark" ? "text-gold-soft" : "text-leaf",
          )}
        >
          <span className="inline-block h-px w-8 bg-gold" />
          {etiqueta}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-balance text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-cream" : "text-primary",
        )}
      >
        {titulo}
      </Heading>
      {descripcion ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "dark" ? "text-cream/80" : "text-muted-foreground",
          )}
        >
          {descripcion}
        </p>
      ) : null}
    </div>
  );
}
