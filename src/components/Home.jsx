import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1f102f] text-slate-900'>

      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#9C76D6]'>Welcome, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-purple-800'> Jenny B </h1>
        <h2 className='text-4xl sm-text-7xl font-bold text-[#f3eb64]'>Full-Stack Developer</h2> 
        <p className='text-[#8892B0] py-4 mac-w-[700px'>Discription: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum dolore optio praesentium vitae porro facere doloremque, quo repellendus maxime voluptas eos ratione enim assumenda, autem consequatur debitis expedita quos quas?</p>
     
        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-800 hover:border-purple-800'>View Work <HiArrowNarrowRight className='ml-3'/>
          </button>  
        </div>
      </div>

    </div>
  )
}

{/*STOPPED HERE 60:00 URL: https://www.youtube.com/watch?v=2kg0z1qNrkw*/}

export default Home