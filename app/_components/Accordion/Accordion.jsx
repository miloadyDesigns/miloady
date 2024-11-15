import React from 'react';
import { For, Stack, Text } from '@chakra-ui/react';
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from '@/components/ui/accordion';

const items = [
    { value: 'a', title: 'First Item', text: 'Some value 1...' },
    { value: 'b', title: 'Second Item', text: 'Some value 2...' },
    { value: 'c', title: 'Third Item', text: 'Some value 3...' },
];

const Accordion = () => {
    return (
        <Stack gap="8" w="full" maxW="md" mx="auto" py="4">
            <For each={['subtle']}>
                {(variant) => (
                    <Stack gap="4" w="full">
                        {/* Title for Accordion */}

                        {/* Accordion Container */}
                        <AccordionRoot
                            variant={variant}
                            key={variant}
                            collapsible
                            defaultValue={['b']}
                            allowMultiple
                            p="4"
                            borderRadius="lg"
                            boxShadow="lg"
                            bg="white"
                            borderColor="gray.200"
                            borderWidth="1px"
                            _hover={{ boxShadow: 'xl' }}
                        >
                            {/* Mapping through items to render each Accordion Item */}
                            {items.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={item.value}
                                    borderRadius="md"
                                    _notLast={{ mb: 2 }}
                                >
                                    {/* Trigger/Title of Accordion Item */}
                                    <AccordionItemTrigger
                                        py="4"
                                        px="6"
                                        fontSize="lg"
                                        fontWeight="semibold"
                                        textAlign="left"
                                        _expanded={{
                                            bg: 'teal.500',
                                            color: 'black',
                                            borderRadius: 'md',
                                        }}
                                        _hover={{
                                            bg: 'teal.100',
                                            cursor: 'pointer',
                                        }}
                                        transition="all 0.2s ease"
                                    >
                                        {item.title}
                                    </AccordionItemTrigger>

                                    {/* Content of Accordion Item */}
                                    <AccordionItemContent
                                        py="2"
                                        px="6"
                                        fontSize="md"
                                        color="gray.600"
                                        borderTop="1px"
                                        borderColor="gray.200"
                                        bg="gray.50"
                                    >
                                        {item.text}
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
