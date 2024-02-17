import type { APIRoute } from 'node_modules/astro/dist/@types/astro'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()
  const { to, from, html, subject, text } = body

  if (!from || !to || !subject || !html || !text) {
    return new Response(null, {
      status: 400,
      statusText: 'Missing required fields',
    })
  }

  const send = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
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
