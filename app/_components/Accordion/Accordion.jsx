import { For, Stack, Text } from "@chakra-ui/react";
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion";
import { useState } from "react";

const items = [
    {
        value: "a",
        title: "F i r s t  I t e m",
        subOptions: [
            { title: "D E V E L O P M E N T", description: "Description for Sub Option 1" },
            { title: "D E V E L O P M E N T", description: "Description for Sub Option 2" },
            { title: "D E V E L O P M E N T", description: "Description for Sub Option 3" },
        ],
    },
    {
        value: "b",
        title: "S e c o n d  I t e m",
        subOptions: [
            { title: "D E V E L O P M E N T", description: "Description for Sub Option 1" },
            { title: "D E V E L O P M E N T", description: "Description for Sub Option 2" },
        ],
    },
    {
        value: "c",
        title: "T h i r d  I t e m",
        subOptions: [
            { title: "D E V E L O P M E N T", description: "Description for Sub Option 1" },
            { title: "D E V E L O P M E N T", description: "Description for Sub Option 2" },
            { title: "D E V E L O P M E N T", description: "Description for Sub Option 3" },
        ],
    },
];


const Accordion = () => {
    const [activeItem, setActiveItem] = useState("b");

    const handleItemClick = (value) => {
        setActiveItem(value);
    };

    return (
        <Stack gap="4">
            <For each={["lg"]}>
                {(size) => (
                    <Stack gap="4">
                        <AccordionRoot
                            size={size}
                            key={size}
                            collapsible
                        >
                            {items.map((item, index) => (
                                <AccordionItem key={index} value={item.value}>
                                    <AccordionItemTrigger
                                        onClick={() => handleItemClick(item.value)}
                                        color={activeItem === item.value ? "white" : "#D3D3D3"}
                                        _hover={{
                                            bg: activeItem === item.value ? "teal.400" : "gray.300",
                                        }}
                                        marginTop="17px"
                                        borderRadius="md"
                                        fontWeight="semibold"

                                    >
                                        <h1 className=" text-xl font-roxbury uppercase">

                                            {item.title}
                                        </h1>
                                    </AccordionItemTrigger>
{/* operatus mick volkin */}
                                    <AccordionItemContent paddingX="2" paddingY="2">
                                        <Stack spacing="2" pl="2">
                                            {item.subOptions.map((subOption, idx) => (
                                                <Stack key={idx}>
                                                    <Text
                                                        onClick={() => handleItemClick(item.value)}

                                                        borderRadius="md"
                                                        color={"#FFFFFF33"}
                                                        _hover={{
                                                            bg:
                                                                activeItem === item.value
                                                                    ? "teal.200"
                                                                    : "gray.100",
                                                        }}
                                                    >
                                                        {subOption.title}
                                                    </Text>
                                                    <Text


                                                    >
                                                        {subOption.description}
                                                    </Text>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </AccordionItemContent>
                                </AccordionItem>
                            ))}
                        </AccordionRoot>
                    </Stack>
                )}
            </For>
        </Stack>
    );
};

export default Accordion;
