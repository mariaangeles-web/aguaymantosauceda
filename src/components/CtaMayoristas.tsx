import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { whatsappHref } from "@/config/site";

const beneficios = [
  "Pedidos por volumen",
  "Atención personalizada",
  "Presentaciones comerciales",
  "Coordinación de entregas",
  "Cotizaciones",
];

export function CtaMayoristas() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionTitle
            etiqueta="Clientes mayoristas"
            tone="dark"
            titulo="¿Buscas un proveedor de aguaymanto?"
            descripcion="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto."
          />
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {beneficios.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 rounded-lg border border-cream/15 bg-cream/6 px-5 py-4 text-sm font-medium text-cream/90"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
