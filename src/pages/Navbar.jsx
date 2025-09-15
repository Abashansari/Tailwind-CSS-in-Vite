import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className='container border-2 border-t-4 border-black my-4 flex justify-between items-center text-purple-500 mx-auto px-6'>
      <div className=" text-3xl">Portfolio</div>
      <ul className='flex space-x-3 my-4 '>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    </div>
  )
}
