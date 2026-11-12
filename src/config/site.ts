/**
 * Configuración central del sitio.
 * Edita aquí los datos reales de la empresa: nombre, contacto, WhatsApp y redes.
 * Los valores entre corchetes son marcadores de posición pendientes de reemplazo.
 */

export const site = {
  nombre: "Aguaymanto Perú",
  nombreLegal: "[NOMBRE DE LA EMPRESA]",
  tagline: "Calidad y compromiso desde el campo peruano.",
  descripcion:
    "Producción y comercialización de aguaymanto peruano seleccionado para clientes particulares, restaurantes, tiendas, distribuidores y compradores mayoristas.",
  url: "https://aguaymantoperu.lovable.app",
} as const;

export const contacto = {
  whatsapp: {
    // Formato internacional sin signos: 51 + número
    numero: "51999999999",
    mostrar: "[WHATSAPP]",
    mensaje:
      "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
  },
  telefono: {
    numero: "+51999999999",
    mostrar: "[TELÉFONO]",
  },
  correo: "[CORREO]",
  direccion: "[DIRECCIÓN]",
  ciudad: "[CIUDAD]",
  horario: "[HORARIO DE ATENCIÓN]",
} as const;

export const redes = [
  { nombre: "Facebook", url: "#" },
  { nombre: "Instagram", url: "#" },
  { nombre: "TikTok", url: "#" },
  { nombre: "LinkedIn", url: "#" },
] as const;

export const navegacion = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;

export function whatsappHref(mensaje: string = contacto.whatsapp.mensaje) {
  return `https://wa.me/${contacto.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;
}

/** Video de ejemplo (YouTube). Reemplazar por el ID del video institucional. */
export const video = {
  youtubeId: "Q9hFoMARo3A",
  titulo: "Producción de aguaymanto en el Perú",
} as const;
