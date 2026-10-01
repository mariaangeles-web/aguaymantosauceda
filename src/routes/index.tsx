import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/cards/ProductCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ValueCard } from "@/components/cards/ValueCard";
import { NewsCard } from "@/components/cards/NewsCard";
import { CtaMayoristas } from "@/components/CtaMayoristas";
import { Gallery } from "@/components/Gallery";
import { FAQAccordion } from "@/components/FAQAccordion";
import { productos } from "@/data/productos";
import { servicios } from "@/data/servicios";
import { noticias } from "@/data/noticias";
import { razones } from "@/data/empresa";
import { site } from "@/config/site";
import plantacion from "@/assets/plantacion.jpg";
import seleccion from "@/assets/seleccion.jpg";

const titulo = "Aguaymanto Perú | Producción y venta de aguaymanto peruano";
const descripcion =
  "Proveedor de aguaymanto peruano fresco y seleccionado. Venta al por mayor para restaurantes, tiendas y distribuidores. Solicita tu cotización.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.nombre,
          url: site.url,
          description: site.descripcion,
          areaServed: "PE",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />

      {/* Sobre nosotros */}
      <section className="py-20 lg:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <img
              src={plantacion}
              alt="Plantación de aguaymanto en terrazas andinas"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lift"
            />
            <img
              src={seleccion}
              alt="Selección manual de aguaymanto"
              width={1408}
              height={1008}
              loading="lazy"
              className="absolute -right-4 -bottom-10 hidden w-1/2 rounded-xl border-8 border-background object-cover shadow-lift sm:block lg:-right-10"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle
              etiqueta="Sobre nosotros"
              titulo="Comprometidos con la calidad del aguaymanto peruano"
              descripcion="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
            />
            <Button asChild variant="leaf" size="xl" className="mt-9">
              <Link to="/quienes-somos">
                Conoce quiénes somos <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Productos */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              etiqueta="Nuestros productos"
              titulo="Aguaymanto seleccionado para cada necesidad"
            />
            <Button asChild variant="quiet" size="lg">
              <Link to="/productos">
                Ver productos <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProductCard producto={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              etiqueta="Nuestros servicios"
              titulo="Atención para particulares, negocios y mayoristas"
            />
            <Button asChild variant="quiet" size="lg">
              <Link to="/servicios">
                Conocer nuestros servicios <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s, i) => (
              <Reveal key={s.ancla} delay={(i % 3) * 90}>
                <ServiceCard servicio={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaMayoristas />

      {/* Por qué elegirnos */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <SectionTitle
            align="center"
            etiqueta="¿Por qué elegirnos?"
            titulo="Razones para trabajar con nosotros"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {razones.map((r, i) => (
              <Reveal key={r.titulo} delay={i * 80}>
                <ValueCard icono={r.icono} titulo={r.titulo} texto={r.texto} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-page">
          <SectionTitle
            etiqueta="Galería"
            titulo="Del campo a tu mesa"
            descripcion="Campos, cosecha, selección y empaque de nuestro aguaymanto."
          />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle etiqueta="Noticias" titulo="Novedades y actualidad" />
            <Button asChild variant="quiet" size="lg">
              <Link to="/noticias">
                Ver todas <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {noticias.map((n, i) => (
              <Reveal key={n.slug} delay={i * 100}>
                <NewsCard noticia={n} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionTitle
              etiqueta="Preguntas frecuentes"
              titulo="Resolvemos tus dudas"
              descripcion="Si no encuentras lo que buscas, escríbenos y te responderemos a la brevedad."
            />
            <Button asChild variant="gold" size="xl" className="mt-8">
              <Link to="/contacto">Contactarnos</Link>
            </Button>
          </div>
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
