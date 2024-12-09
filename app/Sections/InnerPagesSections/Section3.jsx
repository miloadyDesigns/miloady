import InnerCards from '@/app/_components/InnerCards/InnerCards'
import React from 'react'

const Section3 = ({title,description}) => {
    return (
        <div className="mt-16 relative">
            <div className="xs:w-[100%] lg:w-[85%] m-auto p-2 ">
                <h3 className="text-white xs:text-[30px] lg:text-[42px] font-semibold font-poppins">{title}</h3>
                <p className="text-white mt-4 text-xl xs:w-[100%] lg:w-[90%] xs:text-[22px] lg:text-lg">{description}</p>
            </div>
            <div className="xs:mt-4 lg:mt-16">
                <InnerCards />
            </div>
        </div>
    )
}

export default Section3