import { createBrowserRouter, RouterProvider } from 'react-router'

import { Layout } from '@/layout'
import { lazyImport } from '@/utils/lazy-import'

// Pages lazy loading
const { HomePage } = lazyImport(() => import('@/pages/home'), 'HomePage')
const { Profile } = lazyImport(() => import('@/pages/profile'), 'Profile')

export function AppRoutes() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
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
