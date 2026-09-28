import frescoImg from "@/assets/hero-fruto.jpg";
import distribucionImg from "@/assets/producto-empaque.jpg";
import especialesImg from "@/assets/seleccion.jpg";

export type Producto = {
  slug: string;
  nombre: string;
  descripcion: string;
  cta: string;
  imagen: string;
  alt: string;
  presentacion: string;
  peso: string;
  disponibilidad: string;
  precio: string;
  caracteristicas: string[];
  fichaTecnica: string;
};

/** Catálogo editable. Agregar nuevos productos siguiendo la misma estructura. */
export const productos: Producto[] = [
  {
    slug: "aguaymanto-fresco",
    nombre: "Aguaymanto fresco",
    descripcion:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    cta: "Solicitar información",
    imagen: frescoImg,
    alt: "Aguaymanto fresco con cáliz en una caja de madera",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: ["Selección manual", "Fruto con o sin cáliz", "Manejo cuidadoso"],
    fichaTecnica: "[FICHA TÉCNICA]",
  },
  {
    slug: "aguaymanto-distribucion",
    nombre: "Aguaymanto para distribución",
    descripcion: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    cta: "Consultar",
    imagen: distribucionImg,
    alt: "Aguaymanto empacado en envases y cajas listas para distribución",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: ["Volúmenes comerciales", "Empaque para transporte", "Coordinación de entregas"],
    fichaTecnica: "[FICHA TÉCNICA]",
  },
  {
    slug: "presentaciones-especiales",
    nombre: "Presentaciones especiales",
    descripcion: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    cta: "Consultar presentación",
    imagen: especialesImg,
    alt: "Personal seleccionando aguaymanto en una mesa de trabajo",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: ["Requerimientos a medida", "Evaluación por volumen", "Asesoría previa"],
    fichaTecnica: "[FICHA TÉCNICA]",
  },
];
