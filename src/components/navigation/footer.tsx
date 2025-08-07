export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {}

export function Footer({ ...props }: FooterProps) {
  return (
    <footer {...props}>
      <div className="max-w-4xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Social Network. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
