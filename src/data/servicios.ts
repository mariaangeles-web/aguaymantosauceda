export type Servicio = {
  icono: string;
  titulo: string;
  descripcion: string;
  ancla: string;
};

export const servicios: Servicio[] = [
  {
    icono: "ShoppingBasket",
    titulo: "Venta de aguaymanto",
    descripcion: "Venta de producto para clientes particulares y comerciales.",
    ancla: "venta",
  },
  {
    icono: "Boxes",
    titulo: "Venta al por mayor",
    descripcion: "Atención de pedidos de mayor volumen.",
    ancla: "venta-mayorista",
  },
  {
    icono: "ChefHat",
    titulo: "Atención a restaurantes",
    descripcion:
      "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
    ancla: "restaurantes",
  },
  {
    icono: "Store",
    titulo: "Atención a tiendas y distribuidores",
    descripcion:
      "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
    ancla: "tiendas-distribuidores",
  },
  {
    icono: "ClipboardList",
    titulo: "Pedidos personalizados",
    descripcion:
      "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
    ancla: "pedidos-personalizados",
  },
  {
    icono: "Headset",
    titulo: "Asesoría comercial",
    descripcion:
      "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
    ancla: "atencion-comercial",
  },
];
