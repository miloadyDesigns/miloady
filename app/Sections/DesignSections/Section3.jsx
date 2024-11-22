import React from 'react'
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"
import { LoremIpsum } from "react-lorem-ipsum"
const items = [
    { value: "a", title: "First Item", text: <LoremIpsum p={1} /> },
    { value: "b", title: "Second Item", text: <LoremIpsum p={1} /> },
    { value: "c", title: "Third Item", text: <LoremIpsum p={1} /> },
    { value: "d", title: "Fourth Item", text: <LoremIpsum p={1} /> },
    // { value: "e", title: "fifth Item", text: <LoremIpsum p={1} /> },
]
const Section3 = () => {
    return (
        <div className='relative z-10 w-screen mt-[10%] pb-12'>
            <div className='z-10 '>
                <div className="xs:w-[90%] lg:w-[80%] m-auto  overflow-hidden z-10 ">
                    <div className=''>
                        <div class="">
                            <div className='flex xs:flex-col lg:flex-row lg:justify-around'>
                                <div className='xs:w-[100%] lg:w-[45%] h-full  rounded-xl'>
                                    <img
                                        src="/designPage/why-choose-us.png"
                                        alt="Why Choose Us"
                                        className="rounded-lg bg-no-repeat m-auto w-full h-full"

                                    />
                                </div>
                                <div className='xs:w-[100%] lg:w-[45%] xs:mt-12 lg:mt-0 p-4'>
                                    <div className='ml-3'>
                                        <h2 className='font-pp text-[#FBC38E] mb-4 xs:text-sm lg:text-sm xl:text-xl'>G R A P H I C &nbsp; D E S I G N</h2>
                                        <h1 className='text-white xs:text-[32px] lg:text-[42px] xl:text-[52px] leading-none font-roboto'>
                                            Why Choose Us
                                        </h1>
                                    </div>
                                    <div className=''>
                                        <AccordionRoot className="p-4 rounded-lg space-y-2" collapsible defaultValue={["a"]}>
                                            {items.map((item, index) => (
                                                <AccordionItem key={index} className="border-b border-white/20" value={item.value}>
                                                    <AccordionItemTrigger className="flex justify-between items-center py-4 cursor-pointer">
                                                        <div className="flex flex-col gap-1">
                                                            <h3 className="text-2xl  text-white">{item.title}</h3>
                                                        </div>
                                                    </AccordionItemTrigger>
                                                    <AccordionItemContent className="text-gray-400  text-[13px] pt-2 leading-relaxed">
                                                        {item.text}
                                                    </AccordionItemContent>
                                                </AccordionItem>
                                            ))}
                                        </AccordionRoot>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section3