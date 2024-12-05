import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'
import Dialog from '../Dialog/Dialog'

const SideButton = ({ title, margin }) => {
    return (
        <div className={`flex head_btn ${margin ? 'ml-2' : 'ml-0'}  space-x-4 items-center cursor-pointer`}>
            <h1
                className='font-sans text-white  cursor-pointer hover:text-red-500 transition-all xs:text-[14px] md:text-[18px] lg:text-[21px]'
                dangerouslySetInnerHTML={{ __html: title }} // Use this to render HTML
            />
            <div className='shadow__btn xs:p-4 md:p-4 lg:p-4 bg-black cursor-pointer'>
                <Dialog color='white' size={20}/>
            </div>
        </div>
    )
}

export default SideButton
