import mercadoImg from "@/assets/producto-empaque.jpg";
import cultivoImg from "@/assets/plantacion.jpg";
import calidadImg from "@/assets/seleccion.jpg";
import cosechaImg from "@/assets/hero-cosecha.jpg";

export type Noticia = {
  slug: string;
  titulo: string;
  resumen: string;
  categoria: string;
  fecha: string;
  fechaTexto: string;
  autor: string;
  imagen: string;
  alt: string;
  contenido: string[];
  galeria?: { src: string; alt: string }[];
};

/** Noticias de ejemplo. Editar o eliminar libremente. */
export const noticias: Noticia[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    titulo: "El aguaymanto peruano y su presencia en nuevos mercados",
    resumen:
      "El interés por frutas andinas continúa creciendo y el aguaymanto ocupa un lugar cada vez más visible en la oferta agroalimentaria peruana.",
    categoria: "Mercado",
    fecha: "2026-08-12",
    fechaTexto: "12 de agosto de 2026",
    autor: "[AUTOR]",
    imagen: mercadoImg,
    alt: "Aguaymanto empacado listo para su comercialización",
    contenido: [
      "El aguaymanto es una de las frutas andinas con mayor proyección comercial. Su sabor característico y su versatilidad en la cocina lo han convertido en un producto atractivo tanto para consumidores finales como para negocios gastronómicos.",
      "En los últimos años, la demanda ha crecido en canales muy distintos: tiendas especializadas, restaurantes, cafeterías y distribuidores que buscan ampliar su oferta con productos naturales de origen peruano.",
      "Para acompañar ese crecimiento, trabajamos en mantener una presentación consistente del fruto y una comunicación clara con cada cliente sobre disponibilidad, volumen y condiciones de entrega.",
      "Este texto es contenido de ejemplo y puede editarse o reemplazarse por una nota real de la empresa.",
    ],
  },
  {
    slug: "conoce-el-cultivo-del-aguaymanto",
    titulo: "Conoce más sobre el cultivo del aguaymanto",
    resumen:
      "Desde la siembra hasta la cosecha, el cultivo del aguaymanto requiere atención constante y condiciones adecuadas de clima y suelo.",
    categoria: "Agricultura",
    fecha: "2026-07-03",
    fechaTexto: "3 de julio de 2026",
    autor: "[AUTOR]",
    imagen: cultivoImg,
    alt: "Plantación de aguaymanto en terrazas andinas",
    contenido: [
      "El aguaymanto crece en zonas con clima templado y buena exposición solar. El cuidado del cultivo influye directamente en el tamaño, el color y la firmeza del fruto.",
      "La cosecha se realiza cuando el cáliz que envuelve al fruto adquiere un tono dorado, señal de que el aguaymanto alcanzó su punto óptimo.",
      "El manejo posterior a la cosecha es igual de importante: una manipulación cuidadosa evita golpes y ayuda a conservar la presentación del producto.",
      "Este texto es contenido de ejemplo y puede editarse o reemplazarse por una nota real de la empresa.",
    ],
  },
  {
    slug: "apuesta-por-la-calidad-y-produccion-responsable",
    titulo: "Nuestra apuesta por la calidad y la producción responsable",
    resumen:
      "La calidad no es un paso final: se construye en cada etapa, desde el campo hasta el empaque del producto.",
    categoria: "Noticias de la empresa",
    fecha: "2026-05-20",
    fechaTexto: "20 de mayo de 2026",
    autor: "[AUTOR]",
    imagen: calidadImg,
    alt: "Personal realizando control de calidad y selección de aguaymanto",
    contenido: [
      "Entendemos la calidad como el resultado de decisiones pequeñas y constantes: cómo se cosecha, cómo se selecciona y cómo se empaca el producto.",
      "Por eso trabajamos en procesos ordenados de acopio y selección, y en una comunicación transparente con nuestros clientes respecto a lo que pueden esperar de cada pedido.",
      "La producción responsable también implica cuidar el entorno agrícola y las relaciones con quienes trabajan con nosotros.",
      "Este texto es contenido de ejemplo y puede editarse o reemplazarse por una nota real de la empresa.",
    ],
    galeria: [
      { src: cosechaImg, alt: "Cosecha de aguaymanto en el campo" },
      { src: calidadImg, alt: "Mesa de selección de aguaymanto" },
      { src: mercadoImg, alt: "Aguaymanto empacado" },
    ],
  },
];

export function getNoticia(slug: string) {
  return noticias.find((n) => n.slug === slug);
}
