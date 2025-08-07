import { UsersTable } from '@/components/dashboard/users-table'
import { cn } from '@/lib/utils'

export type HomePageProps = React.HTMLAttributes<HTMLDivElement> & {}

export function HomePage({ className, ...props }: HomePageProps) {
  return (
    <div className={cn('max-w-4xl mx-auto px-4', className)} {...props}>
      <UsersTable />
    </div>
  )
}
