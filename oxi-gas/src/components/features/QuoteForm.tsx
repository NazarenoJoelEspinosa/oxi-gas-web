'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { whatsappUrl, ADDRESS } from '@/config/constants';

/* =========================
   TYPES
========================= */

type FormFields = {
  nombre: string;
  empresa: string;
  telefono: string;
  direccion: string;
  mensaje: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

/* =========================
   VALIDATION
========================= */

function validateForm(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  const nombre = fields.nombre.trim();
  if (!nombre) {
    errors.nombre = 'El nombre es obligatorio.';
  } else if (nombre.length < 3) {
    errors.nombre = 'Mínimo 3 caracteres.';
  } else if (!/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/.test(nombre)) {
    errors.nombre = 'Solo letras y espacios.';
  }

  const telefono = fields.telefono.replace(/\D/g, '');
  if (!telefono) {
    errors.telefono = 'El teléfono es obligatorio.';
  } else if (!/^9?\d{10,11}$/.test(telefono)) {
    errors.telefono = 'Número inválido (ej: 1123456789).';
  }

  const mensaje = fields.mensaje.trim();
  if (!mensaje) {
    errors.mensaje = 'Contanos tu consulta.';
  } else if (mensaje.length < 10) {
    errors.mensaje = 'Mínimo 10 caracteres.';
  }

  return errors;
}

/* =========================
   HOOK
========================= */

function useQuoteForm() {
  const [fields, setFields] = useState<FormFields>({
    nombre: '',
    empresa: '',
    telefono: '',
    direccion: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (key: keyof FormFields, value: string) => {
    const clean = key === 'telefono' ? value.replace(/\D/g, '') : value;
    const updated = { ...fields, [key]: clean };
    setFields(updated);

    if (touched[key] || submitted) {
      setErrors(validateForm(updated));
    }
  };

  const markTouched = (key: keyof FormFields) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validateForm(fields));
  };

  const submit = () => {
    setSubmitted(true);

    const validationErrors = validateForm(fields);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const firstError = Object.keys(validationErrors)[0] as keyof FormFields;
      document.getElementById(firstError)?.focus();
      return null;
    }

    setLoading(true);

    // Guardar lead local
    localStorage.setItem('oxi_lead', JSON.stringify(fields));

    const message = [
      'Hola OXI-GAS 👋',
      'Vengo desde la web:',
      '',
      `👤 Nombre: ${fields.nombre}`,
      fields.empresa && `🏢 Empresa: ${fields.empresa}`,
      `📞 Teléfono: ${fields.telefono}`,
      fields.direccion && `📍 Dirección: ${fields.direccion}`,
      '',
      '📝 Consulta:',
      fields.mensaje,
    ]
      .filter(Boolean)
      .join('\n');

    return {
      message,
      done: () => setLoading(false),
    };
  };

  return {
    fields,
    errors,
    touched,
    loading,
    updateField,
    markTouched,
    submit,
    shouldShowError: (key: keyof FormFields) =>
      (touched[key] || submitted) && errors[key],
  };
}

/* =========================
   UI COMPONENTS
========================= */

const inputBase =
  'w-full bg-[hsl(var(--surface-0))] border rounded-xl px-4 py-3 text-[hsl(var(--text-main))] focus:outline-none focus:ring-2 focus:ring-primary transition';

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-[hsl(var(--text-soft))]">
        {label} {required && <span className="text-primary">*</span>}
      </label>

      {children}

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */

export function QuoteForm() {
  const {
    fields,
    errors,
    loading,
    updateField,
    markTouched,
    submit,
    shouldShowError,
  } = useQuoteForm();

  const quickOptions = [
    'Quiero un presupuesto',
    'Consulta por productos',
    'Necesito asesoramiento',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = submit();
    if (!result) return;

    const url = whatsappUrl(result.message);
    window.open(url, '_blank', 'noopener,noreferrer');

    setTimeout(result.done, 800);
  };

  const fieldClass = (key: keyof FormFields) =>
    `${inputBase} ${
      shouldShowError(key)
        ? 'border-red-500/70'
        : 'border-[hsl(var(--surface-3))]'
    }`;

  return (
    <section id="contacto" className="py-24 bg-[hsl(var(--surface-2))]">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
            Contacto
          </p>
          <h2 className="text-4xl font-extrabold mb-3">
            ¿En qué te podemos ayudar?
          </h2>
          <p className="text-lg text-[hsl(var(--text-soft))]">
            Respondemos en menos de 1 hora ⚡
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          
          {/* FORM */}
          <div className="bg-[hsl(var(--surface-1))] p-8 rounded-3xl shadow-xl">

            <form onSubmit={handleSubmit} className="space-y-6">

              <Field id="nombre" label="Nombre completo" required error={shouldShowError('nombre') ? errors.nombre : undefined}>
                <input
                  id="nombre"
                  value={fields.nombre}
                  onChange={(e) => updateField('nombre', e.target.value)}
                  onBlur={() => markTouched('nombre')}
                  className={fieldClass('nombre')}
                  placeholder="Juan Pérez"
                />
              </Field>

              <Field id="telefono" label="Teléfono" required error={shouldShowError('telefono') ? errors.telefono : undefined}>
                <input
                  id="telefono"
                  value={fields.telefono}
                  onChange={(e) => updateField('telefono', e.target.value)}
                  onBlur={() => markTouched('telefono')}
                  className={fieldClass('telefono')}
                  placeholder="1123456789"
                />
              </Field>

              <Field id="empresa" label="Empresa">
                <input
                  id="empresa"
                  value={fields.empresa}
                  onChange={(e) => updateField('empresa', e.target.value)}
                  className={fieldClass('empresa')}
                />
              </Field>

              <Field id="direccion" label="Dirección">
                <input
                  id="direccion"
                  value={fields.direccion}
                  onChange={(e) => updateField('direccion', e.target.value)}
                  className={fieldClass('direccion')}
                />
              </Field>

              {/* QUICK OPTIONS */}
              <div className="flex flex-wrap gap-2">
                {quickOptions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => updateField('mensaje', q)}
                    className="text-sm px-3 py-1 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>

              <Field id="mensaje" label="Consulta" required error={shouldShowError('mensaje') ? errors.mensaje : undefined}>
                <textarea
                  id="mensaje"
                  value={fields.mensaje}
                  onChange={(e) => updateField('mensaje', e.target.value)}
                  onBlur={() => markTouched('mensaje')}
                  className={`${fieldClass('mensaje')} resize-none`}
                  rows={4}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold"
              >
                {loading ? 'Enviando...' : 'Enviar por WhatsApp'}
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="bg-[hsl(var(--surface-1))] p-8 rounded-3xl shadow-xl">
            <MapPin className="mb-4 text-primary" />

            <h3 className="text-xl font-bold mb-2">Dirección</h3>

            <p className="text-[hsl(var(--text-soft))] mb-4">
              {ADDRESS.street} <br />
              {ADDRESS.city}, {ADDRESS.province}
            </p>

            <iframe
              src={ADDRESS.mapsEmbed}
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
