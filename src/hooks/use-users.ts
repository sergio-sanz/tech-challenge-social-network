import { useQuery } from '@tanstack/react-query'

import { getUsers } from '@/services/users'
import type { User } from '@/types/user'

export function useUsers() {
  const query = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  return query
}
