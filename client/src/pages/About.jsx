import React from 'react'

function About() {
  return (
    <main className='mt-[300px] animate-spinslow sm:w-3/4 m-3 '>
      <div className=" flex items-center justify-center text-white font-bold text-3xl  bg-slate-500  h-60   m-10 rounded-md hover:cursor-pointer hover:shadow-[2px_3px_10px_black] ">
       <h1 className='hover:animate-bounce bg-stone-800 p-4 rounded-lg '>SESHA</h1> 
       <span className='bg-slate-700 p-4 m-0.5 rounded-3xl animate-pulse '>sai</span> 
       <span className=' w-5 bg-orange-300 p-9 m-4 rounded-2xl hover:animate-spin  '></span>
      </div>
    </main>
  );
}

export default About