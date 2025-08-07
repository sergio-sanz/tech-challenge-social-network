import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/hooks/use-auth'

const formSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
})

export type LoginFormProps = React.HTMLAttributes<HTMLDivElement> & {
  onSuccess?: () => void
}

export function LoginForm({ onSuccess, ...props }: LoginFormProps) {
  const { login, isLoading } = useAuth()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await login(data)
      onSuccess?.()
    } catch (error) {
      console.error('Login failed:', error)
      toast.error('Login failed. Please try again.')
    }
  }

  return (
    <div {...props}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <Form.Field
            control={form.control}
            name="username"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Username</Form.Label>
                <Form.Control>
                  <Input type="text" placeholder="emilys" {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            control={form.control}
            name="password"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Password</Form.Label>
                <Form.Control>
                  <Input type="password" placeholder="••••••••" {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log in'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
