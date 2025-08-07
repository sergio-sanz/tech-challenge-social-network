import { type ReactNode, useEffect, useState } from 'react'

import { AuthContext, type AuthContextType } from '@/contexts/auth-context'
import {
  getAccessToken,
  getCurrentUser,
  login as loginService,
  removeTokens,
  setTokens,
} from '@/services/auth'
import type { AuthUser, LoginCredentials } from '@/types/auth'

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = !!user

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = getAccessToken()
        if (token) {
          const currentUser = await getCurrentUser()
          setUser(currentUser)
        }
      } catch {
        removeTokens()
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true)
    try {
      const response = await loginService(credentials)

      setTokens(response.accessToken, response.refreshToken)

      setUser({
        id: response.id,
        username: response.username,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        gender: response.gender,
        image: response.image,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    removeTokens()
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
