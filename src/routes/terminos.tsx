import { createFileRoute } from "@tanstack/react-router";

const titulo = "Términos y condiciones | Aguaymanto Perú";
const descripcion = "Términos y condiciones de uso del sitio web y de nuestros servicios comerciales.";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <section className="container-page max-w-3xl pt-40 pb-24">
      <h1 className="text-4xl text-primary">Términos y condiciones</h1>
      <p className="mt-8 leading-relaxed text-muted-foreground">
        [TEXTO LEGAL PENDIENTE — reemplazar por los términos y condiciones oficiales de la empresa.]
      </p>
    </section>
  ),
});
