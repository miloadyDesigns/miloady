import Link from 'next/link'
import React from 'react'
const Section1 = () => {
    return (
        <div className="relative z-[1]">
            <div className="relative" >
                <div className='xs:w-[320px] xs:h-[320px] xls:w-[380px] xls:h-[380px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] m-auto flex items-center rounded-full shadow-custom-glow-light bg-transparent '>
                    <div className="flex flex-col items-center justify-center z-20 w-full">
                        <h1 className="xs:text-[32px] lg:text-[48px] xl:text-[62px] font-sans font-bold text-white">C O N T A C T &nbsp; U S </h1>
                        <p className='xs:w-[100%]  lg:w-[60%] xl:w-[55%] xs:text-sm lg:text-lg xl:text-xl p-2 mt-2 text-center text-white font-sans font-extralight'>We believe in the power of creativity to inspire.</p>
                        <div className='flex space-x-4 p-4'>
                            <div className='text-gray-500'>
                                <Link href="/" class="navlink">HOME</Link>
                            </div>
                            <div className='text-white'>
                                |
                            </div>
                            <div className='text-white'>
                                CONTACT
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Section1