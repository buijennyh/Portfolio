import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#F0F2DC] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-[#260906]'>Contact</p>
                <p className='text-[#260906] py-4'>// Submit the form below or shoot me an email - J.Bui.SW@gmail.com</p>
            </div>
            <input className='bg-[#f8f3ea] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#f8f3ea]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f8f3ea] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#260906] hover:bg-[#8C8274] hover:border-[#8C8274] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact