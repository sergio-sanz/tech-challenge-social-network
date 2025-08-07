import { UsersTable } from '@/components/dashboard/users-table'

export type HomePageProps = React.HTMLAttributes<HTMLDivElement> & {}

export function HomePage({ ...props }: HomePageProps) {
  return (
    <div {...props}>
      <UsersTable />
    </div>
  )
}
