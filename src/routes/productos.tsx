import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCard } from "@/components/cards/ProductCard";
import { CtaMayoristas } from "@/components/CtaMayoristas";
import { productos } from "@/data/productos";
import { atributosCalidad } from "@/data/empresa";
import { site } from "@/config/site";
import fruto from "@/assets/hero-fruto.jpg";
import seleccion from "@/assets/seleccion.jpg";

const titulo = "Productos | Aguaymanto fresco y al por mayor";
const descripcion =
  "Aguaymanto fresco, presentaciones para distribución y pedidos especiales. Consulta disponibilidad y solicita información.";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/productos` }],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        etiqueta="Nuestros productos"
        titulo="Aguaymanto peruano seleccionado"
        descripcion="Fruto fresco y presentaciones pensadas para particulares, negocios y distribuidores."
        imagen={fruto}
        alt="Aguaymanto fresco con cáliz"
      />

      <section id="presentaciones" className="py-20 lg:py-28">
        <div className="container-page">
          <SectionTitle etiqueta="Catálogo" titulo="Nuestras presentaciones" />
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <div id={p.slug}>
                  <ProductCard producto={p} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="calidad" className="bg-secondary py-20 lg:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={seleccion}
              alt="Control de calidad y selección del aguaymanto"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle etiqueta="Calidad que se nota" titulo="Cuidamos cada detalle" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {atributosCalidad.map((a) => (
                <li key={a.titulo} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-primary">{a.titulo}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{a.texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <div id="pedidos-mayoristas">
        <CtaMayoristas />
      </div>
    </>
  );
}
