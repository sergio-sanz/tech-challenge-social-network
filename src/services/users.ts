export async function getUsers() {
  const response = await fetch('https://dummyjson.com/users')

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  const data = await response.json()

  return data.users
}
