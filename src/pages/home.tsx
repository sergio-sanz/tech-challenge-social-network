export type HomePageProps = React.HTMLAttributes<HTMLDivElement> & {}

export function HomePage({ ...props }: HomePageProps) {
  return (
    <div {...props}>
      <p>Home</p>
    </div>
  )
}
