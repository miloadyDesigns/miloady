import React from 'react'

const Section2 = ({ title, subTitle, cartData }) => {
    return (
        <div className="xs:[95%] lg:w-[85%] m-auto  mt-16 relative ">
            <h2 className="xs:text-[32px] lg:text-[56px] xl:text-[56px] text-white xs:w-[100%] lg:w-[90%] xl:w-[80%]  font-poppins xs:leading-tight lg:leading-none xs:p-2 lg:p-0">{title}</h2>
            <div className="xs:mt-4 lg:mt-12 flex xs:gap-12 xs:p-2 lg:gap-12 lg:p-4 flex-wrap ">
                <div className="">
                    <h2 className="xs:text-[50px] md:text-[46px] lg:text-[62px] xl:text-[72px] text-white font-bold p-0 m-0">200+</h2>
                    <p className="text-white xs:text-[30px] md:text-[22px] lg:text-[32px] xl:text-[42px] p-0 -mt-4">Projects Delivered</p>
                </div>
                <div className="">
                    <h3 className="xs:text-[50px] md:text-[46px] lg:text-[62px] xl:text-[72px] text-white font-bold p-0 m-0">110+</h3>
                    <p className="text-white xs:text-[30px] md:text-[22px] lg:text-[32px] xl:text-[42px] p-0 -mt-4">Developers & Designers</p>
                </div>
                <div className="">
                    <h3 className="xs:text-[50px] md:text-[46px]  lg:text-[62px] xl:text-[72px] text-white font-bold p-0 m-0">15+</h3>
                    <p className="text-white xs:text-[30px] md:text-[22px] lg:text-[32px] xl:text-[42px] p-0 -mt-4">Years of Experience</p>
                </div>
            </div>
            <div className="mt-16 z-[10]">
                <h3 className="xs:text-[32px] lg:text-[56px] xl:text-[56px] text-white xs:w-[100%] lg:w-[90%] xl:w-[80%] font-semibold font-poppins xs:leading-tight lg:leading-none xs:p-2 lg:p-0">{subTitle}</h3>
                <div className=" mt-12 flex gap-12 flex-wrap p-4 ">
                    {cartData.map((service, index) => (
                        <div key={index} className="xs:w-[100%] lg:w-[30%] p-4">
                            <h3 className="xs:text-[26px] lg:text-[30px] xl:text-[36px] text-white font-roboto p-0 m-0 leading-tight">{service.title}</h3>
                            <p className="text-gray-300 xs:text-[18px] lg:text-[22px] p-0 mt-4">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section2