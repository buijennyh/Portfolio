import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#F0F2DC] text-[#260906]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <form method='POST' action="https://getform.io/f/warkwppb" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-[#8C8274]'> Contact </p>
              </div>
              <input className='bg-[#f8f3ea] p-2' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#f8f3ea]' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#f8f3ea] p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-[#260906] hover:bg-[#8C8274] hover:border-[#8C8274] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
        </div>
    </div>
  )
}

export default Contact


