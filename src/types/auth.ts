export type LoginCredentials = {
  username: string
  password: string
}

export type LoginResponse = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  accessToken: string
  refreshToken: string
}

export type AuthUser = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
}
