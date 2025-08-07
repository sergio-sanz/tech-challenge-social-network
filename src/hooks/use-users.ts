import { useQuery } from '@tanstack/react-query'

import { getUsers } from '@/services/users'
import type { User } from '@/types/user'

export type UseUsersParams = {
  page?: number
}

export function useUsers({ page }: UseUsersParams) {
  const query = useQuery<User[]>({
    queryKey: ['users', page],
    queryFn: () => getUsers({ page }),
  })

  return query
}
