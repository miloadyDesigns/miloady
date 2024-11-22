import Cards from '@/app/_components/DesignCards/Cards'
import React from 'react'

const Section2 = () => {
    return (
        <div className='relative z-10 w-screen mb-12'>
            <div className='z-10 '>
                <div className="xs:w-[90%] lg:w-[80%] m-auto  overflow-hidden z-10 ">
                    <div id='section2' className='p-2'>
                        <h2 className='font-pp text-[#252c6e] mb-4 xs:text-sm lg:text-sm xl:text-xl'>M A R K E T I N G</h2>
                        <h1 className='text-white xs:text-[32px] lg:text-[42px] xl:text-[52px] leading-none font-roboto'>
                            Our Marketing Services
                        </h1>
                    </div>
                    <div className='p-2 flex gap-y-12 flex-wrap  justify-around mt-12'>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Section2