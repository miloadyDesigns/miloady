import React from 'react'
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"
import { LoremIpsum } from "react-lorem-ipsum"
const items = [
    { value: "a", title: "Design Expertise", text: "Our team blends creativity with technical proficiency to craft visually stunning and functional designs. We dive deep into understanding your brand identity, ensuring every design resonates with your target audience. From sleek user interfaces to captivating graphics, we prioritize creating designs that not only look great but also achieve your business objectives. With a collaborative approach, we ensure the final product reflects your vision and drives engagement." },
    { value: "b", title: "Development Excellence", text: "We specialize in building innovative, scalable, and robust software solutions that fuel business growth. Our developers employ the latest technologies and best practices to deliver customized systems tailored to your needs. Whether it's a dynamic website or a mobile app, we focus on performance, security, and scalability. By turning complex challenges into streamlined solutions, we help your business thrive in a competitive landscape." },
    { value: "c", title: "Strategic Marketing", text: "Our marketing strategies combine creative ingenuity with data-driven insights to deliver measurable results. We focus on understanding your audience and crafting campaigns that resonate deeply and authentically. From targeted social media strategies to search engine optimization, we aim to boost your brand visibility and engagement. With regular performance tracking, we refine approaches to ensure maximum return on investment." },
    { value: "d", title: "End-to-End Support", text: "At Milaody Design, we are with you every step of the way, from ideation to execution. Our team works closely with you to understand your unique needs and goals, ensuring seamless project management throughout. Whether it's brainstorming a new idea or scaling an existing solution, we provide consistent support and communication. With a client-focused approach, we prioritize building lasting partnerships based on trust and results." },
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
                                        src="/designPage/1.png"
                                        alt="Why Choose Us"
                                        className="rounded-lg bg-no-repeat m-auto w-full h-full"

                                    />
                                </div>
                                <div className='xs:w-[100%] lg:w-[45%] xs:mt-12 lg:mt-0 p-4'>
                                    <div className='ml-3'>
                                        <h2 className='font-pp text-[#109eeb] mb-4 xs:text-sm lg:text-sm xl:text-xl'>G R A P H I C &nbsp; D E S I G N</h2>
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
                                                    <AccordionItemContent className="text-gray-400  text-[16px] pt-2 leading-relaxed">
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