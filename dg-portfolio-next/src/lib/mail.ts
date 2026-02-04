import emailjs from "@emailjs/browser";

export async function sendMail(data: Record<string, string>) {
  const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!service || !template || !key) throw new Error("Missing EmailJS env vars");
  return emailjs.send(service, template, data, { publicKey: key });
}
