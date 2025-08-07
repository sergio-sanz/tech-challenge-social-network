import { Toaster } from '@/components/ui/sonner'
import { AuthProvider } from '@/providers/auth'
import { TanstackQueryProvider } from '@/providers/tanstack-query'
import { AppRoutes } from '@/routes'

function App() {
  return (
    <AuthProvider>
      <TanstackQueryProvider>
        <AppRoutes />
        <Toaster />
      </TanstackQueryProvider>
    </AuthProvider>
  )
}

export default App
