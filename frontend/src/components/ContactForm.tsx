import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form as ShadcnForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

export function ContactForm() {
  const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    message: z
      .string()
      .min(10, {
        message: 'Message must be at least 10 characters.',
      })
      .max(160, {
        message: 'Message must not be longer than 30 characters.',
      }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function showToast(isValidate: string) {
    const validated = isValidate === 'ok'

    const message = {
      validate: {
        title: 'Message send',
        description:
          "Your message have been successfully send, I'll come back to you as soon as possible.",
      },
      error: {
        title: 'Error',
        description: 'An error happened, please try again later.',
      },
    }

    const title = validated ? message.validate.title : message.error.title
    const description = validated
      ? message.validate.description
      : message.error.description

    return toast({
      title: title,
      description: description,
    })
  }

  const onSubmit = async (
    data: z.infer<typeof formSchema>,
    event: React.BaseSyntheticEvent | undefined,
  ) => {
    event?.preventDefault()
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
      {
        console.log(r)
        showToast('ok')
      }
    } catch (error) {
      console.log(error)
      showToast('error')
    }
  }

  return (
    <ShadcnForm {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 sm:w-2/3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="transition-none" type="submit">
          Submit
        </Button>
      </form>
    </ShadcnForm>
  )
}
