import { Link } from 'react-router'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/use-auth'
import { cn } from '@/lib/utils'

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {}

export function Header({ className, ...props }: HeaderProps) {
  const { user, logout, isAuthenticated } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className={cn('bg-gray-800 text-white p-4', className)} {...props}>
      <div className="max-w-4xl flex mx-auto px-4 items-center">
        <h1 className="text-lg font-bold flex-grow">Social Network</h1>
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <Link to="/" className="text-white hover:underline">
                Users
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-white hover:underline">
                Profile
              </Link>
            </li>
            {isAuthenticated && user && (
              <>
                <li className="text-sm text-gray-300">
                  Welcome, {user.firstName}!
                </li>
                <li>
                  <Button onClick={handleLogout}>Logout</Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
