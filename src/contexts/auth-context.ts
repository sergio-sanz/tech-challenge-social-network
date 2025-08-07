import { createContext } from 'react'

import type { AuthUser, LoginCredentials } from '@/types/auth'

export type AuthContextType = {
  user: AuthUser | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)
