"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
};

const inputClass =
  "px-4 py-3 rounded-sm border border-(--color-border) bg-(--color-bg) text-(--color-text) text-sm placeholder:text-(--color-muted) focus:outline-none focus:border-(--color-primary) transition-colors duration-200 w-full";

const labelClass = "text-sm font-medium text-(--color-text)";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <span
          className="text-5xl font-normal text-(--color-primary)"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          ✓
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-normal">Mensaje enviado</h3>
          <p className="text-(--color-muted) leading-relaxed max-w-sm">
            Gracias por escribirnos. Te responderemos a la brevedad al correo que indicaste.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-(--color-primary) text-sm underline underline-offset-4 hover:text-(--color-primary-dark) transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      {/* Nombre */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClass}>
          Nombre <span className="text-(--color-primary)">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={set("name")}
          className={inputClass}
          placeholder="Tu nombre completo"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClass}>
          Correo electrónico <span className="text-(--color-primary)">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={set("email")}
          className={inputClass}
          placeholder="tucorreo@ejemplo.com"
        />
      </div>

      {/* Teléfono */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className={labelClass}>
          Teléfono{" "}
          <span className="text-(--color-muted) font-normal">(opcional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={set("phone")}
          className={inputClass}
          placeholder="+56 9 xxxx xxxx"
        />
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Mensaje <span className="text-(--color-primary)">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-none`}
          placeholder="Cuéntanos cómo podemos ayudarte..."
        />
      </div>

      {/* Consentimiento */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
          className="mt-1 h-4 w-4 shrink-0 accent-[#C8A020]"
        />
        <label htmlFor="consent" className="text-xs text-(--color-muted) leading-relaxed cursor-pointer">
          Autorizo al Centro Terapéutico Luminiscencia a contactarme mediante los datos
          proporcionados. Mis datos serán tratados de forma confidencial y no serán
          compartidos con terceros.
        </label>
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-sm text-red-500">
          Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-(--color-primary) text-(--color-dark) font-medium tracking-wide hover:bg-(--color-primary-dark) hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
