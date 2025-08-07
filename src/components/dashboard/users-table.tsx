import 'react-responsive-pagination/themes/classic-light-dark.css'

import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination'

import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table'
import { useUsers } from '@/hooks/use-users'
import { cn } from '@/lib/utils'

const DEFAULT_PAGE_SIZE = 5

export type UsersTableProps = React.HTMLAttributes<HTMLDivElement> & {}

export function UsersTable({ className, ...props }: UsersTableProps) {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching } = useUsers({ page })
  const totalPages = Math.ceil(
    (data?.total ?? 0) / (data?.limit ?? DEFAULT_PAGE_SIZE)
  )

  if (isLoading) {
    return <div {...props}>Loading...</div>
  }

  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      <Table className={cn(isFetching && 'opacity-50', 'transition-opacity')}>
        <Table.Header>
          <Table.Row>
            <Table.Head>Avatar</Table.Head>
            <Table.Head>Nombre completo</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head></Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.users.map((user) => (
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
      <ResponsivePagination
        current={page}
        total={totalPages}
        onPageChange={setPage}
      />
    </div>
  )
}
