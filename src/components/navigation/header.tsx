import { cn } from '@/lib/utils'

export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header className={cn('bg-gray-800 text-white p-4', className)} {...props}>
      <div className="max-w-4xl flex mx-auto px-4 items-center">
        <h1 className="text-lg font-bold flex-grow">Social Network</h1>
        <nav>
          <ul className="flex gap-4 items-center">
            <li>
              <a href="/" className="text-white hover:underline">
                Users
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:underline">
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
