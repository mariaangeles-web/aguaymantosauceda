import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Telescope } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ValueCard } from "@/components/cards/ValueCard";
import { Gallery } from "@/components/Gallery";
import { Button } from "@/components/ui/button";
import { compromiso, historia, mision, valores, vision } from "@/data/empresa";
import { site } from "@/config/site";
import cosecha from "@/assets/hero-cosecha.jpg";
import campo from "@/assets/hero-campo.jpg";

const titulo = "Quiénes Somos | Aguaymanto Perú";
const descripcion =
  "Conoce nuestra empresa, historia, misión, visión y valores. Producimos y comercializamos aguaymanto peruano con compromiso y calidad.";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/quienes-somos` }],
  }),
  component: QuienesSomos,
});

function QuienesSomos() {
  return (
    <>
      <PageHero
        etiqueta="Quiénes somos"
        titulo="Una empresa con raíces en el campo peruano"
        imagen={campo}
        alt="Campo de aguaymanto en los Andes"
      />

      <section id="nuestra-empresa" className="py-20 lg:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionTitle etiqueta="Nuestra empresa" titulo="Producimos y comercializamos aguaymanto peruano" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {site.nombreLegal} es una empresa peruana dedicada a la producción y
                comercialización de aguaymanto fresco y seleccionado.
              </p>
              <p>
                Atendemos a clientes particulares, restaurantes, hoteles, tiendas, distribuidores y
                compradores mayoristas que buscan un proveedor confiable.
              </p>
              <p>
                Nos diferencia la atención cercana, el cuidado en cada etapa del proceso y nuestro
                compromiso con la calidad del producto que llega a cada cliente.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={cosecha}
              alt="Productores cosechando aguaymanto"
              width={1920}
              height={1088}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <section id="nuestra-historia" className="bg-secondary py-20 lg:py-28">
        <div className="container-page">
          <SectionTitle align="center" etiqueta="Nuestra historia" titulo="Un camino de crecimiento" />
          <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
            <span className="absolute top-7 right-0 left-0 hidden h-px bg-border md:block" aria-hidden="true" />
            {historia.map((h, i) => (
              <Reveal as="li" key={h.numero} delay={i * 110} className="relative">
                <span className="relative grid size-14 place-items-center rounded-full bg-primary font-display text-lg text-gold-soft ring-8 ring-secondary">
                  {h.numero}
                </span>
                <h3 className="mt-6 text-xl text-primary">{h.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="mision" className="py-20 lg:py-28">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="h-full rounded-xl bg-primary p-10 lg:p-12">
              <span className="grid size-14 place-items-center rounded-full bg-gold text-gold-foreground">
                <Target className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-7 text-3xl text-cream">Nuestra Misión</h2>
              <p className="mt-4 leading-relaxed text-cream/80">{mision}</p>
            </article>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <article id="vision" className="h-full rounded-xl border border-border bg-card p-10 shadow-soft lg:p-12">
              <span className="grid size-14 place-items-center rounded-full bg-leaf text-leaf-foreground">
                <Telescope className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-7 text-3xl text-primary">Nuestra Visión</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="valores" className="bg-primary py-20 lg:py-28">
        <div className="container-page">
          <SectionTitle tone="dark" etiqueta="Nuestros valores" titulo="Lo que guía nuestro trabajo" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v, i) => (
              <Reveal key={v.titulo} delay={(i % 3) * 90}>
                <ValueCard tone="dark" icono={v.icono} titulo={v.titulo} texto={v.texto} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="compromiso" className="py-20 lg:py-28">
        <div className="container-page">
          <SectionTitle align="center" etiqueta="Nuestro compromiso" titulo="Tres pilares que nos sostienen" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {compromiso.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 100}>
                <ValueCard icono={c.icono} titulo={c.titulo} texto={c.texto} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-page">
          <SectionTitle etiqueta="Galería" titulo="Nuestro trabajo en imágenes" />
          <div className="mt-12">
            <Gallery />
          </div>
          <div className="mt-14 text-center">
            <Button asChild variant="gold" size="xl">
              <Link to="/productos">Ver productos</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
