import type { APIRoute } from 'node_modules/astro/dist/@types/astro'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY)

export const GET: APIRoute = async ({ params, request }) => {
  const send = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'remi.meullemeestre@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    text: 'Test',
  })

  if (send.data) {
    return new Response(JSON.stringify({ message: send.data }), {
      status: 200,
      statusText: 'OK',
    })
  } else {
    return new Response(JSON.stringify({ message: send.error }), {
      status: 500,
      statusText: 'Internal Server Error',
    })
  }
}
