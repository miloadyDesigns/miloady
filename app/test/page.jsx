import React from 'react'

const page = () => {
    return (
        <div className='border'>
            <h1 className="fixed w-full h-full flex justify-end items-end text-white">0</h1>
            <div className="w-screen h-screen absolute z-10 flex bg-black">
                {/* Loader, ensure it's centered */}
                {/* <RingLoader color="white" size={200} /> */}
                <div className="w-[10vh] bg-black h-[105vh]"></div>
                <div className="w-[10vh] bg-black h-[105vh]"></div>
                <div className="w-[10vh] bg-black h-[105vh]"></div>
                <div className="w-[10vh] bg-black h-[105vh]"></div>
                <div className="w-[10vh] bg-black h-[105vh]"></div>
                <div className="w-[10vh] bg-black h-[105vh]"></div>
                <div className="w-[10vh] bg-black h-[105vh]"></div>
                <div className="w-[10vh] bg-black h-[105vh]"></div>
                <div className="w-[10vh] bg-black h-[105vh]"></div>
                <div className="w-[10vh] bg-black h-[105vh]"></div>
            </div>
        </div>
    )
}

export default page
