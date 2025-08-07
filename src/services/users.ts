const API_BASE_URL = 'https://dummyjson.com'

export type GetUsersParams = {
  page?: number
}

export async function getUsers({ page }: GetUsersParams) {
  const params = new URLSearchParams({
    limit: '5',
    skip: String((page || 1) - 1),
  })

  const response = await fetch(`${API_BASE_URL}/users?${params}`)

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  const data = await response.json()

  return data
}
