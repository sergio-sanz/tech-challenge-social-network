import { type DefaultOptions, QueryClient } from '@tanstack/react-query'

const queryConfig = {
  queries: {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  },
} satisfies DefaultOptions

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
})
