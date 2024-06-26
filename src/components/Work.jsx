import React from 'react'
import WorkImg from '../assets/workImg.jpeg'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-[#260906] bg-[#F0F2DC]'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#8C8274]'> 
                Work 
            </p>
              <p className='py-6'>// Check out some of my recent work</p>
            </div>

    {/* container for projects */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md 
                  flex justify-center text-center items-center mx-auto content-div'>
        {/* Hover effect for images */}
                    <div>
                        <span>
                        </span>
                        <div>
                            <a href={"/"}>
                                <button></button>
                            </a>

                            <a href={"/"}>
                                <button></button>
                                </a>
                        </div>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Work;