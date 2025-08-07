import { useNavigate } from 'react-router'

import { LoginForm } from '@/components/auth/login-form'
import { useAuth } from '@/hooks/use-auth'

export function LoginPage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    navigate('/', { replace: true })
    return null
  }

  const handleLoginSuccess = () => {
    navigate('/', { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
            Social Network
          </h2>
          <p className="mt-1 text-center text-xs text-gray-500">
            Try with:
            <code className="bg-gray-100 px-1 rounded">emilys</code> /
            <code className="bg-gray-100 px-1 rounded">emilyspass</code>
          </p>
        </div>
        <LoginForm onSuccess={handleLoginSuccess} className="mt-8 space-y-6" />
      </div>
    </div>
  )
}
