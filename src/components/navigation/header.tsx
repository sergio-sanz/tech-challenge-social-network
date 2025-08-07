export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {}

export function Header({ ...props }: HeaderProps) {
  return (
    <div {...props}>
      <p>Header</p>
    </div>
  )
}
