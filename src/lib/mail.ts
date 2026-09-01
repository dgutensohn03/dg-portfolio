import emailjs from "@emailjs/browser";

export async function sendMail(data: Record<string, string>) {
  const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  return emailjs.send(service, template, data, publicKey);
}