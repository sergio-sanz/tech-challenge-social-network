import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { getUsers } from '@/services/users'
import type { UserResponse } from '@/types/api'

export type UseUsersParams = {
  page?: number
}

export function useUsers({ page }: UseUsersParams) {
  const query = useQuery<UserResponse>({
    queryKey: ['users', page],
    queryFn: () => getUsers({ page }),
    placeholderData: keepPreviousData,
  })

  return query
}
