export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {}

export function Footer({ ...props }: FooterProps) {
  return (
    <div {...props}>
      <p>Footer</p>
    </div>
  )
}
