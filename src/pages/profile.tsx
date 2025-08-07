export type ProfileProps = React.HTMLAttributes<HTMLDivElement> & {}

export function Profile({ ...props }: ProfileProps) {
  return (
    <div {...props}>
      <p>Profile</p>
    </div>
  )
}
