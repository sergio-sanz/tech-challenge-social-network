import { useAuth } from '@/hooks/use-auth'
import { cn } from '@/lib/utils'

export type ProfileProps = React.HTMLAttributes<HTMLDivElement> & {}

export function Profile({ ...props }: ProfileProps) {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className={cn('max-w-4xl mx-auto p-4')} {...props}>
        <p>No user found</p>
      </div>
    )
  }

  return (
    <div className={cn('max-w-4xl mx-auto p-4 flex flex-col gap-4')} {...props}>
      <img
        className="size-24"
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <h1 className="text-3xl font-bold">
        {user.firstName} {user.lastName}
      </h1>

      <span className="text-gray-900">Email: {user.email}</span>
    </div>
  )
}
