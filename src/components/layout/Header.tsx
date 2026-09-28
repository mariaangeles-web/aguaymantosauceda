import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { contacto, navegacion } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/92 py-2 backdrop-blur-lg shadow-soft"
          : "border-b border-transparent bg-background/80 py-4 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <Link to="/" aria-label="Ir al inicio" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navegacion.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="relative rounded-md px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&.active]:text-primary [&.active]:after:absolute [&.active]:after:inset-x-3.5 [&.active]:after:-bottom-0.5 [&.active]:after:h-0.5 [&.active]:after:rounded-full [&.active]:after:bg-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${contacto.telefono.numero}`}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            {contacto.telefono.mostrar}
          </a>
          <Button asChild variant="gold">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="grid size-11 place-items-center rounded-md border border-border text-primary transition-colors hover:bg-secondary lg:hidden"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-primary transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <Logo tone="dark" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="grid size-11 place-items-center rounded-md border border-cream/30 text-cream"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Navegación móvil" className="container-page mt-6">
          <ul className="flex flex-col gap-1">
            {navegacion.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-cream/12 py-4 font-display text-2xl text-cream/90 transition-colors hover:text-gold-soft [&.active]:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/contacto" onClick={() => setOpen(false)}>
                Solicitar cotización
              </Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href={`tel:${contacto.telefono.numero}`}>Llamar {contacto.telefono.mostrar}</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
