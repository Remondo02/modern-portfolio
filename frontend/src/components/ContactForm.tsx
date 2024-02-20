import { type FormEvent } from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/sendEmail.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'remi.meullemeestre@gmail.com',
          subject: `Contact de ${data.name}, ${data.email}`,
          html: data.message,
          text: data.message,
        }),
      })
      const r = await res.json()
      console.log(r)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        Name
        <input placeholder="Name" {...register('name')} />
      </label>
      <label htmlFor="email">
        Email
        <input placeholder="Bill" {...register('email')} />
      </label>
      <label htmlFor="message">
        Message
        <textarea {...register('message')} />
      </label>
      <button>Send</button>
    </form>
  )
}
