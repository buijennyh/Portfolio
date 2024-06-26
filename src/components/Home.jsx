import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#F0F2DC] text-slate-900'>

      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#8C8274]'>You found me!</p>
        <br/>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#260906]'> Jenny B. </h1>
        <h2 className='text-4xl sm-text-7xl font-bold text-[#8C8274]'>Full-Stack Developer</h2> 
        <p className='text-[#260906] py-4 mac-w-[700px'>A creative and a programmer to help humans drive results and deliver real soltutions.  Proven success in healthcare, hospitality, and technology.</p>
     
        <div>
          <button className='text-[#260906] border-4 border-[#26252863] px-6 py-3 my-2 flex items-center hover:bg-[#8C8274] hover:border-[#8C8274]'>View Work <HiArrowNarrowRight className='ml-3'/>
          </button>  
        </div>
      </div> 

    </div>
  )
}

/*STOPPED HERE 1:08:00 URL: https://www.youtube.com/watch?v=2kg0z1qNrkw*/ 
/* https://app.getform.io/forms */ 

export default Home