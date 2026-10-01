import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ValueCard } from "@/components/cards/ValueCard";
import { CtaMayoristas } from "@/components/CtaMayoristas";
import { servicios } from "@/data/servicios";
import { razones } from "@/data/empresa";
import { site } from "@/config/site";
import empaque from "@/assets/producto-empaque.jpg";

const titulo = "Servicios | Venta mayorista de aguaymanto";
const descripcion =
  "Venta de aguaymanto, pedidos al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/servicios` }],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        etiqueta="Nuestros servicios"
        titulo="Soluciones comerciales alrededor del aguaymanto"
        descripcion="Atendemos desde pedidos particulares hasta volúmenes mayoristas, con atención personalizada."
        imagen={empaque}
        alt="Aguaymanto empacado para distribución"
      />
      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal key={s.ancla} delay={(i % 3) * 90}>
              <ServiceCard servicio={s} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaMayoristas />
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionTitle align="center" etiqueta="¿Por qué elegirnos?" titulo="Confianza en cada pedido" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {razones.map((r, i) => (
              <Reveal key={r.titulo} delay={i * 80}>
                <ValueCard icono={r.icono} titulo={r.titulo} texto={r.texto} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
