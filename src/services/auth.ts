import type { AuthUser, LoginCredentials, LoginResponse } from '@/types/auth'

const API_BASE_URL = 'https://dummyjson.com'

export async function login(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password,
    }),
  })

  if (!response.ok) {
    throw new Error('Invalid credentials')
  }

  return response.json()
}

export async function getCurrentUser(): Promise<AuthUser> {
  const token = localStorage.getItem('accessToken')

  if (!token) {
    throw new Error('No access token found')
  }

  const response = await fetch(`${API_BASE_URL}/user/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }

  return response.json()
}

export async function refreshToken(): Promise<LoginResponse> {
  const refreshToken = localStorage.getItem('refreshToken')

  if (!refreshToken) {
    throw new Error('No refresh token found')
  }

  const response = await fetch(`${API_BASE_URL}/user/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refreshToken,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to refresh token')
  }

  return response.json()
}

export function setTokens(accessToken: string, refreshToken: string) {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
}

export function removeTokens() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export function getAccessToken(): string | null {
  return localStorage.getItem('accessToken')
}
