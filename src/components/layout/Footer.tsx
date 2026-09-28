import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { contacto, navegacion, redes, site, whatsappHref } from "@/config/site";

export function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-primary text-cream/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Logo tone="dark" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
          <p className="mt-4 text-sm text-cream/60">{site.nombreLegal}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Enlaces
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navegacion.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-gold-soft">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Información
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-colors hover:text-gold-soft"
              >
                <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                WhatsApp {contacto.whatsapp.mostrar}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contacto.telefono.numero}`}
                className="flex items-start gap-2.5 transition-colors hover:text-gold-soft"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {contacto.telefono.mostrar}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {contacto.correo}
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {contacto.direccion}, {contacto.ciudad}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {contacto.horario}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-gold-soft uppercase">
            Redes sociales
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {redes.map((red) => (
              <li key={red.nombre}>
                <a
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-soft"
                >
                  {red.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/12">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream/60 sm:flex-row">
          <p>
            © {anio} {site.nombreLegal}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="transition-colors hover:text-gold-soft">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="transition-colors hover:text-gold-soft">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
