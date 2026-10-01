import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { z } from "zod";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionTitle } from "@/components/SectionTitle";
import { contacto, site, whatsappHref } from "@/config/site";
import { servicios } from "@/data/servicios";
import cosecha from "@/assets/hero-cosecha.jpg";

const titulo = "Contacto | Solicita tu cotización de aguaymanto";
const descripcion =
  "Contáctanos por WhatsApp, teléfono o formulario para solicitar una cotización de aguaymanto o conversar sobre una oportunidad comercial.";

export const Route = createFileRoute("/contacto")({
  validateSearch: z.object({
    producto: z.string().optional(),
    servicio: z.string().optional(),
  }),
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/contacto` }],
  }),
  component: Contacto,
});

function Contacto() {
  const { producto, servicio } = Route.useSearch();
  const asunto = servicios.find((s) => s.ancla === servicio)?.titulo ?? "";

  const datos = [
    { icon: MessageCircle, label: "WhatsApp", valor: contacto.whatsapp.mostrar, href: whatsappHref() },
    { icon: Phone, label: "Teléfono", valor: contacto.telefono.mostrar, href: `tel:${contacto.telefono.numero}` },
    { icon: Mail, label: "Correo electrónico", valor: contacto.correo },
    { icon: MapPin, label: "Dirección", valor: `${contacto.direccion}, ${contacto.ciudad}` },
    { icon: Clock, label: "Horario de atención", valor: contacto.horario },
  ];

  return (
    <>
      <PageHero
        etiqueta="Contacto"
        titulo="Estamos aquí para atenderte"
        descripcion="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
        imagen={cosecha}
        alt="Cosecha de aguaymanto"
      />
      <section className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.7fr]">
          <aside>
            <h2 className="text-2xl text-primary">Datos de contacto</h2>
            <ul className="mt-8 space-y-5">
              {datos.map((d) => {
                const contenido = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-leaf">
                      <d.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.12em] text-leaf uppercase">
                        {d.label}
                      </span>
                      <span className="mt-1 block text-foreground">{d.valor}</span>
                    </span>
                  </>
                );
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex gap-4 transition-colors hover:text-primary"
                      >
                        {contenido}
                      </a>
                    ) : (
                      <div className="flex gap-4">{contenido}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </aside>
          <ContactForm productoInicial={producto ?? ""} asuntoInicial={asunto} />
        </div>
      </section>
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionTitle etiqueta="Preguntas frecuentes" titulo="Antes de escribirnos" />
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
