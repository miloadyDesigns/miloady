import React from 'react'

const Section1 = ({ title, description, img }) => {
    return (
        <div className="relative z-[10]">
            <div className="w-[85%] m-auto  xs:mt-[30%] lg:mt-[8%] ">
                <h1 className="xs:text-[42px] lg:text-[62px] text-white font-bold xs:w-[100%] lg:w-[50%] leading-none">{title}</h1>
                <p className="xs:w-[100%] lg:w-[45%] text-white mt-8 xs:text-[18px] lg:text-[24px]">
                    {description}
                </p>
            </div>
            <div className="relative z-[1]">
                <img src={img} alt={title} className="w-full h-full mt-8 " />
            </div>
        </div>
    )
}

export default Section1