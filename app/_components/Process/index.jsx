import React from 'react'
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"
import { Badge, HStack } from "@chakra-ui/react"
import { LoremIpsum } from "react-lorem-ipsum"
import { Avatar } from '@/components/ui/avatar'
import { LuTrophy } from 'react-icons/lu'
const items = [
    {
        name: "Does Cubix develop apps for all iPhone models?",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=a",
        topRated: true,
        num: "01",
        description: "Cubix is a leading iOS application development company in the USA that is capable of developing apps for all iPhone models, ensuring that apps will work smoothly on all models, whether it's a newly released iPhone or an older model. With our experienced teams, you don't have to worry; your app will perform optimally."
    },
    {
        name: "What are some advantages to hiring an iPhone app development agency?",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=b",
        topRated: false,
        num: "02",
        description: "Cubix is a leading iOS application development company in the USA that is capable of developing apps for all iPhone models, ensuring that apps will work smoothly on all models, whether it's a newly released iPhone or an older model. With our experienced teams, you don't have to worry; your app will perform optimally."
    },
    {
        name: "How much does iPhone app development cost?",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "03",
        description: "Cubix is a leading iOS application development company in the USA that is capable of developing apps for all iPhone models, ensuring that apps will work smoothly on all models, whether it's a newly released iPhone or an older model. With our experienced teams, you don't have to worry; your app will perform optimally."
    },
    {
        name: "Do you provide maintenance and support services after app deployment?",
        bio: <LoremIpsum />,
        image: "https://i.pravatar.cc/150?u=c",
        topRated: false,
        num: "04",
        description: "Our Maintenance and Support services ensure your systems remain up-to-date, secure, and running smoothly long after the initial project is complete. We provide proactive monitoring, troubleshooting, and timely updates to prevent issues before they arise. Whether it's routine maintenance, performance optimization, or addressing urgent concerns, our dedicated support team is always ready to assist, ensuring your operations stay efficient and uninterrupted."
    },
]
const ProcessSection = ({ faqsData }) => {
    return (
        <AccordionRoot collapsible defaultValue={[faqsData[0].name]} className="w-full">
            {faqsData.map((item, index) => (
                <AccordionItem key={index} value={item.name} className="text-white p-4 ">
                    <AccordionItemTrigger>
                        <div className="lg:text-[32px] xs:text-[18px] md:text-[24px] font-bold ">
                            <span >{item.name}</span>
                        </div>

                    </AccordionItemTrigger>
                    <AccordionItemContent className="font-normal xs:text-[14px] md:text-[18px] lg:text-[24px] font-text">{item.description}</AccordionItemContent>
                </AccordionItem>
            ))}
        </AccordionRoot>
    )
}

export default ProcessSection
