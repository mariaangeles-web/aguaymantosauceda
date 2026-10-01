import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

const titulo = "Política de privacidad | Aguaymanto Perú";
const descripcion = "Cómo tratamos los datos personales que nos compartes a través del sitio web.";

export const Route = createFileRoute("/privacidad")({
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
      <h1 className="text-4xl text-primary">Política de privacidad</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
        <p>
          {site.nombreLegal} utiliza los datos enviados mediante el formulario de contacto únicamente
          para responder consultas y cotizaciones.
        </p>
        <p>[TEXTO LEGAL PENDIENTE — reemplazar por la política de privacidad oficial de la empresa.]</p>
      </div>
    </section>
  ),
});
