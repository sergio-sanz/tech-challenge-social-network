export type GetUsersParams = {
  page?: number
}

export async function getUsers({ page }: GetUsersParams) {
  const params = new URLSearchParams({
    limit: '5',
    skip: String((page || 1) - 1),
  })

  const response = await fetch(`https://dummyjson.com/users?${params}`)

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  const data = await response.json()

  return data.users
}
