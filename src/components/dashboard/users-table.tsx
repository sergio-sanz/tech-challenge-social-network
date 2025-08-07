import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table'
import { useUsers } from '@/hooks/use-users'

export type UsersTableProps = React.HTMLAttributes<HTMLDivElement> & {}

export function UsersTable({ ...props }: UsersTableProps) {
  const { data, isLoading } = useUsers({ page: 1 })

  if (isLoading) {
    return <div {...props}>Loading...</div>
  }

  return (
    <div {...props}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Avatar</Table.Head>
            <Table.Head>Nombre completo</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head></Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>
                <img
                  className="size-16"
                  src={user.image}
                  alt={user.firstName}
                />
              </Table.Cell>
              <Table.Cell>
                {user.firstName} {user.lastName}
              </Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <Button>Añadir amigo</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
