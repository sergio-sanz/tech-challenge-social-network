import { createBrowserRouter, RouterProvider } from 'react-router'

import { ProtectedRoute } from '@/components/auth/protected-route'
import { Layout } from '@/layout'
import { lazyImport } from '@/utils/lazy-import'

// Pages lazy loading
const { HomePage } = lazyImport(() => import('@/pages/home'), 'HomePage')
const { Profile } = lazyImport(() => import('@/pages/profile'), 'Profile')
const { LoginPage } = lazyImport(() => import('@/pages/login'), 'LoginPage')

export function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
