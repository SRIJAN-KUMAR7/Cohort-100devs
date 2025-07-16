import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2>Hui hui hui hui</h2>
    </div>
  )
}

export default App
