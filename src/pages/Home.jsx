import React from 'react'

export default function Home() {
  return (
<div className='container'>
    <div className="grid grid-cols-2 gap-5 h-180 justify-between mx-30 ">
    <div className='container flex justify-center border-2 bg-blue-500 '>
    <h1 className='text-2xl p-[30%]'>Left Side</h1>
    </div>
    <div className="container flex justify-center border-2 bg-blue-500">
      <h1 className='text-2xl p-[30%]'>Right side</h1>
    </div>
    </div>

</div>
  )
}
