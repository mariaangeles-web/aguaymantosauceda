import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { NewsCard } from "@/components/cards/NewsCard";
import { Button } from "@/components/ui/button";
import { getNoticia, noticias } from "@/data/noticias";
import { site } from "@/config/site";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const noticia = getNoticia(params.slug);
    if (!noticia) throw notFound();
    return { slug: noticia.slug };
  },
  head: ({ loaderData }) => {
    const n = loaderData ? getNoticia(loaderData.slug) : undefined;
    if (!n) return { meta: [{ title: "Noticia no encontrada" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${n.titulo} | Aguaymanto Perú` },
        { name: "description", content: n.resumen },
        { property: "og:title", content: n.titulo },
        { property: "og:description", content: n.resumen },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `${site.url}/noticias/${n.slug}` }],
    };
  },
  notFoundComponent: NoticiaNoEncontrada,
  component: NoticiaDetalle,
});

function NoticiaNoEncontrada() {
  return (
    <section className="container-page py-44 text-center">
      <h1 className="text-4xl text-primary">Noticia no encontrada</h1>
      <Button asChild variant="gold" size="lg" className="mt-8">
        <Link to="/noticias">Volver a noticias</Link>
      </Button>
    </section>
  );
}

function NoticiaDetalle() {
  const { slug } = Route.useLoaderData();
  const n = getNoticia(slug)!;
  const relacionadas = noticias.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <article>
      <header className="bg-secondary pt-36 pb-12 lg:pt-44">
        <div className="container-page max-w-4xl">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-sm font-medium text-leaf hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Volver a noticias
          </Link>
          <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-leaf uppercase">{n.categoria}</p>
          <h1 className="mt-3 text-4xl leading-tight text-balance text-primary sm:text-5xl">{n.titulo}</h1>
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CalendarDays className="size-4" aria-hidden="true" />
              <time dateTime={n.fecha}>{n.fechaTexto}</time>
            </span>
            <span className="flex items-center gap-2">
              <User className="size-4" aria-hidden="true" /> {n.autor}
            </span>
          </div>
        </div>
      </header>
      <div className="container-page max-w-4xl py-12">
        <img
          src={n.imagen}
          alt={n.alt}
          width={1408}
          height={1008}
          className="aspect-[16/9] w-full rounded-xl object-cover shadow-lift"
        />
        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-foreground/85">
          {n.contenido.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {n.galeria ? (
          <div className="mt-14 grid grid-cols-3 gap-3">
            {n.galeria.map((g) => (
              <img
                key={g.alt}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-square w-full rounded-lg object-cover"
              />
            ))}
          </div>
        ) : null}
      </div>
      <section className="bg-secondary py-20">
        <div className="container-page">
          <h2 className="text-3xl text-primary">Noticias relacionadas</h2>
          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {relacionadas.map((r) => (
              <NewsCard key={r.slug} noticia={r} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
