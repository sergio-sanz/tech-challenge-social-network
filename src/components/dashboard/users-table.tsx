import { useUsers } from '@/hooks/use-users'

export type UsersTableProps = React.HTMLAttributes<HTMLDivElement> & {}

export function UsersTable({ ...props }: UsersTableProps) {
  const { data, isLoading } = useUsers()

  if (isLoading) {
    return <div {...props}>Loading...</div>
  }

  return (
    <div {...props}>
      {data?.map((user) => (
        <div key={user.id}>{user.firstName}</div>
      ))}
    </div>
  )
}
