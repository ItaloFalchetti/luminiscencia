import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  // TODO: Instalar Resend y enviar email
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "noreply@centroluminiscencia.cl",
  //   to: process.env.CONTACT_EMAIL!,
  //   subject: `Nuevo mensaje de ${name}`,
  //   html: `<p><b>Nombre:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Teléfono:</b> ${phone || "—"}</p><p><b>Mensaje:</b> ${message}</p>`,
  // });

  console.log("[contacto]", { name, email, phone, message });

  return NextResponse.json({ success: true });
}
