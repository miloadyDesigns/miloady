import Image from 'next/image'
import React from 'react'

const Dsiplay = () => {
    return (
        <div className='relative w-[80%]  rounded-2xl m-auto mt-12 mb-[10%] h-[40vh]'>
            {/* <Image src={"/commonSection.jpg"} layout='fill' objectFit='cover' className='absolute' /> */}
            <img src="/commonSection.jpg" alt="" className='w-full h-full object-cover rounded-2xl' />
            <div className='w-full h-full absolute top-0 bg-black bg-opacity-80 rounded-2xl flex justify-center items-center flex-row'>
                <div className='h-full xs:w-full lg:w-[40%]  flex flex-col items-center'>
                    <h2 className='text-white font-roboto font-light xs:text-[24px]  lg:text-[32px] mt-[10%] '>Pull the Trigger!</h2>
                    <h1 className='text-white  xs:text-[32px] lg:text-[52px] xs:w-[80%] lg:w-[70%] text-center font-sans font-bold leading-tight '>Let’s bring your
                        vision to life.
                    </h1>
                    <div className='mt-6'>
                        <button class="button-64" role="button"><span class="text">Get Started</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dsiplay