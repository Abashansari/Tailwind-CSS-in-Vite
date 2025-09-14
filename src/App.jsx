import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='container border-2 border-t-4 border-black my-4 flex justify-between items-center text-purple-500 mx-auto px-6'>
      <div className=" text-3xl">Portfolio</div>
      <ul className='flex space-x-3 my-4 '>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div className='container bg-yellow-500 sm:bg-green-500 md:bg-blue-400 lg:bg-red-600'>
      <p>Hello from abash</p>
    </div>

    </>
  )
}

export default App
