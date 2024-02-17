import { type FormEvent } from 'react'

export default function Form() {
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const { name, email, message } = Object.fromEntries(formData)
    await fetch('/api/sendEmail.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'remi.meullemeestre@gmail.com',
        subject: `Contact de ${name}, ${email}`,
        html: message,
        text: message,
      }),
    })
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" autoComplete="name" required />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
        />
      </label>
      <label htmlFor="message">
        Message
        <textarea id="message" name="message" autoComplete="off" required />
      </label>
      <button>Send</button>
    </form>
  )
}
