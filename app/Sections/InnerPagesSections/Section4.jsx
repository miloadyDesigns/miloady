import PinInnerProcess from '@/app/_components/CommonSection/PinInnerProcess/PinInnerProcess'
import React from 'react'

const Section4 = ({items}) => {
    return (
        <div className="relative mt-16">
            <div className="xs:w-[95%] lg:w-[85%] m-auto p-4 ">
                <PinInnerProcess items={items} />
            </div>
        </div>
    )
}

export default Section4