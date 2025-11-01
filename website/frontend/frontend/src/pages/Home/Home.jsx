
import React from 'react'
const Home = () => {
  return (
    <div className=''>
      <nav className='flex place-content-between text-[25px]'>
        <div className='flex m-5 h-[100[px] items-center justify-center gap-3'>
            <div className='bg-green-600 border border-green-800 rounded-lg font-extrabold text-white w-[50px] h-[50px] flex items-center justify-center'>              <p className=''>FV</p>
            </div>
            <div className=' font-extrabold text-green-600 '>FarmVision AI</div>
        </div>
        <div><button className='text-green-600 m-5 border-2 rounded-2xl p-2 '>Hindi</button></div>
      </nav>
      <hr />
    </div>
  )
}

export default Home
