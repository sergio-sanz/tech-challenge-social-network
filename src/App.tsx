import { useState } from 'react'

import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col gap-4 max-w-xl text-center mx-auto">
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <Button
        variant="default"
        size="lg"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Count: {count}
      </Button>
    </div>
  )
}

export default App
