import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { NewsCard } from "@/components/cards/NewsCard";
import { noticias } from "@/data/noticias";
import { site } from "@/config/site";
import plantacion from "@/assets/plantacion.jpg";

const titulo = "Noticias y actualidad | Aguaymanto Perú";
const descripcion =
  "Novedades de la empresa, agricultura, mercado y todo sobre el aguaymanto peruano.";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/noticias` }],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero
        etiqueta="Noticias"
        titulo="Noticias y actualidad"
        descripcion="Novedades de la empresa, del cultivo y del mercado del aguaymanto."
        imagen={plantacion}
        alt="Plantación de aguaymanto en terrazas andinas"
      />
      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {noticias.map((n, i) => (
            <Reveal key={n.slug} delay={i * 100}>
              <NewsCard noticia={n} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
