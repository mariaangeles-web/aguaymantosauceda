import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { productos } from "@/data/productos";
import { cn } from "@/lib/utils";

type Campos = {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  ciudad: string;
  tipoCliente: string;
  producto: string;
  cantidad: string;
  asunto: string;
  mensaje: string;
};

const inicial: Campos = {
  nombre: "",
  empresa: "",
  correo: "",
  telefono: "",
  ciudad: "",
  tipoCliente: "",
  producto: "",
  cantidad: "",
  asunto: "",
  mensaje: "",
};

const tiposCliente = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda",
  "Distribuidor",
  "Empresa",
  "Otro",
];

function validar(v: Campos) {
  const e: Partial<Record<keyof Campos, string>> = {};
  if (v.nombre.trim().length < 3) e.nombre = "Ingresa tu nombre completo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.correo.trim()))
    e.correo = "Ingresa un correo electrónico válido.";
  if (v.telefono.replace(/\D/g, "").length < 6) e.telefono = "Ingresa un teléfono válido.";
  if (!v.tipoCliente) e.tipoCliente = "Selecciona el tipo de cliente.";
  if (v.mensaje.trim().length < 10) e.mensaje = "Cuéntanos brevemente tu consulta.";
  return e;
}

const campoBase =
  "mt-2 w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";

export function ContactForm({
  productoInicial = "",
  asuntoInicial = "",
}: {
  productoInicial?: string;
  asuntoInicial?: string;
}) {
  const [valores, setValores] = useState<Campos>({
    ...inicial,
    producto: productoInicial,
    asunto: asuntoInicial,
  });
  const [errores, setErrores] = useState<Partial<Record<keyof Campos, string>>>({});
  const [enviado, setEnviado] = useState(false);

  const set = (campo: keyof Campos) => (valor: string) =>
    setValores((v) => ({ ...v, [campo]: valor }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validar(valores);
    setErrores(errs);
    if (Object.keys(errs).length > 0) return;
    // Punto de integración: aquí puede conectarse un servicio de correo, CRM o backend.
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-xl border border-leaf/30 bg-secondary p-12 text-center"
      >
        <span className="grid size-14 place-items-center rounded-full bg-leaf text-leaf-foreground">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl text-primary">Consulta enviada</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Button
          variant="quiet"
          size="lg"
          className="mt-7"
          onClick={() => {
            setValores(inicial);
            setEnviado(false);
          }}
        >
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border border-border bg-card p-7 shadow-soft sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="nombre"
          label="Nombre completo"
          required
          value={valores.nombre}
          onChange={set("nombre")}
          error={errores.nombre}
        />
        <Field
          id="empresa"
          label="Empresa"
          value={valores.empresa}
          onChange={set("empresa")}
          placeholder="Opcional"
        />
        <Field
          id="correo"
          label="Correo electrónico"
          type="email"
          required
          value={valores.correo}
          onChange={set("correo")}
          error={errores.correo}
        />
        <Field
          id="telefono"
          label="Teléfono"
          type="tel"
          required
          value={valores.telefono}
          onChange={set("telefono")}
          error={errores.telefono}
        />
        <Field id="ciudad" label="Ciudad" value={valores.ciudad} onChange={set("ciudad")} />

        <div>
          <Label htmlFor="tipoCliente" className="text-sm font-medium text-primary">
            Tipo de cliente <span className="text-gold">*</span>
          </Label>
          <select
            id="tipoCliente"
            value={valores.tipoCliente}
            onChange={(e) => set("tipoCliente")(e.target.value)}
            aria-invalid={Boolean(errores.tipoCliente)}
            className={cn(campoBase, errores.tipoCliente && "border-destructive")}
          >
            <option value="">Selecciona una opción</option>
            {tiposCliente.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errores.tipoCliente ? (
            <p className="mt-1.5 text-xs text-destructive">{errores.tipoCliente}</p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="producto" className="text-sm font-medium text-primary">
            Producto de interés
          </Label>
          <select
            id="producto"
            value={valores.producto}
            onChange={(e) => set("producto")(e.target.value)}
            className={campoBase}
          >
            <option value="">Selecciona una opción</option>
            {productos.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.nombre}
              </option>
            ))}
          </select>
        </div>

        <Field
          id="cantidad"
          label="Cantidad aproximada"
          value={valores.cantidad}
          onChange={set("cantidad")}
          placeholder="Ej. 50 kg por semana"
        />
        <div className="sm:col-span-2">
          <Field id="asunto" label="Asunto" value={valores.asunto} onChange={set("asunto")} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="mensaje" className="text-sm font-medium text-primary">
            Mensaje <span className="text-gold">*</span>
          </Label>
          <Textarea
            id="mensaje"
            rows={5}
            value={valores.mensaje}
            onChange={(e) => set("mensaje")(e.target.value)}
            aria-invalid={Boolean(errores.mensaje)}
            className={cn("mt-2 bg-card", errores.mensaje && "border-destructive")}
          />
          {errores.mensaje ? (
            <p className="mt-1.5 text-xs text-destructive">{errores.mensaje}</p>
          ) : null}
        </div>
      </div>

      <Button type="submit" variant="gold" size="xl" className="mt-8 w-full sm:w-auto">
        Enviar consulta
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        Los campos marcados con <span className="text-gold">*</span> son obligatorios.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  error,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-primary">
        {label} {required ? <span className="text-gold">*</span> : null}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        className={cn("mt-2 bg-card", error && "border-destructive")}
      />
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
