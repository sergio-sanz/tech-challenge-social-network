import type { User } from '@/types/user'

export type UserResponse = {
  users: User[]
  total: number
  skip: number
  limit: number
}
