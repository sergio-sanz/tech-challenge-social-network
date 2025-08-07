import { TanstackQueryProvider } from '@/providers/tanstack-query'
import { AppRoutes } from '@/routes'

function App() {
  return (
    <TanstackQueryProvider>
      <AppRoutes />
    </TanstackQueryProvider>
  )
}

export default App
