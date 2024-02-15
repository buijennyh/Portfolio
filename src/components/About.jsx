import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#F0F2DC] text-[#260906'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-purple-300'>About
            </p>
          </div>
        <div></div>
      </div>
      <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-right text-4xl font-bold'>
          <p>Welcome!</p>
          <p>Take a look around. </p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sint at unde blanditiis praesentium repudiandae delectus ducimus.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About