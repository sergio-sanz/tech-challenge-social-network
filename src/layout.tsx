import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router'

import { Footer } from '@/components/navigation/footer'
import { Header } from '@/components/navigation/header'

export function Layout() {
  return (
    <div className="flex flex-col min-h-full">
      <ScrollRestoration />
      <Header />
      <div className="flex-grow">
        <React.Suspense
          fallback={
            <div className="flex items-center justify-center h-full">
              <p>Loading...</p>
            </div>
          }
        >
          <Outlet />
        </React.Suspense>
      </div>
      <Footer />
    </div>
  )
}
