import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, service, preferredDate, message } = body;

  await resend.emails.send({
    from: 'Contact Form <onboarding@resend.dev>', // use this until you add a domain
    to: 'finefitbh@gmail.com',
    subject: `New Inquiry from ${name}`,
    html: `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Preferred Date:</strong> ${preferredDate}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  return Response.json({ success: true });
}
