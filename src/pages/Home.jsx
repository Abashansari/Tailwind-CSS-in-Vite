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

        {/* card */}
        <div className="border-2 bg-white rounded-2xl shadow h-[38vh] sm:bg-red-500 md:bg-green-600">
          <figure className='border-2 rounded-2xl m-6 h-[40%]'>
            <img className='flex justify-center items-bottom' src='...' alt='image' />
          </figure>
          <div className='text-2xl p-2'>card title</div>
          <div className="text-lg muted p-2">card desc</div>
          <button className=' bg-blue-500 text-white p-3 mx-[40%] y-2 rounded-2xl hover:bg-blue-600'>View more</button>
        </div>
      </div>
    </div>
  )
}
