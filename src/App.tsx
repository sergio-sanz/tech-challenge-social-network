import { LoginForm } from '@/components/auth/login-form'

function App() {
  return (
    <div className="flex flex-col gap-4 max-w-xl text-center mx-auto">
      <h1 className="text-3xl font-bold underline">Social Network</h1>
      <LoginForm />
    </div>
  )
}

export default App
