import ProcessSection from '@/app/_components/Process'
import React from 'react'

const Section7 = ({ title, faqsData }) => {
    return (
        <div className="m-auto xs:w-[100%] lg:w-[80%] mb-[5%] relative">
            <div className="">
                <h1 className="xs:text-[32px] lg:text-[52px] text-white text-center">Frequently asked questions.</h1>
                <div className="xs:mt-6 lg:mt-16">
                    <ProcessSection faqsData={faqsData} />
                </div>
            </div>
        </div>
    )
}

export default Section7