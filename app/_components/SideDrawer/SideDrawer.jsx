'use client'
import React, { useState } from 'react';
import { For, HStack, useDisclosure } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerRoot,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import Points from '../Points';
import Stars from '../Stars';
import Accordion from '../Accordion/Accordion';
import DropDown from '../header/DropDown';
import Link from 'next/link';
import LightStars from '../LightStars/Stars';


const SideDrawer = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();


    ;

    return (
        <HStack wrap="wrap">
            <For each={["start"]}>
                {(placement) => (
                    <DrawerRoot isOpen={isOpen} onClose={onClose} placement={placement} size={'full'}>
                        <DrawerBackdrop />
                        <DrawerTrigger asChild>
                            <div>
                                <GiHamburgerMenu size={props.size} color="white" />
                            </div>
                        </DrawerTrigger>
                        <DrawerContent
                            bg="transparent" // No solid background, so the backdrop filter is visible
                            boxShadow="none" // Remove the default box shadow, so it feels "floating"
                            backdropFilter="blur(10px)" // Stronger blur for a more pronounced glass effect
                            roundedTop={placement === "bottom" ? "l3" : undefined}
                            roundedBottom={placement === "top" ? "l3" : undefined}
                        >
                            <DrawerHeader>
                                <Image
                                    className=''
                                    src="https://res.cloudinary.com/dz8sirg5s/image/upload/v1730978818/images/xcer12xbqw9slqnp7v7r.png"
                                    width={100}
                                    height={100}
                                    alt="Logo"
                                />
                            </DrawerHeader>
                            <DrawerBody>
                                <div className='mt-12 z-[10]'>
                                    <ul className='flex flex-col pt-2 text-md text-white'>
                                        <DrawerCloseTrigger>
                                            <li >
                                                <Link href="/about" className='font-myfont uppercase [word-spacing:2px] text-lg' >A b o u t</Link>
                                            </li>
                                        </DrawerCloseTrigger>
                                        <li className='mt-4'>
                                            <Link href="/design" className='font-myfont uppercase [word-spacing:2px] text-lg' onClick={() => onClose()}>D e s i g n</Link>
                                        </li>
                                        <li className='mt-4'>
                                            <Link href="/development" className='font-myfont uppercase [word-spacing:2px] text-lg' onClick={() => onClose()}>D e v e l o p m e n t</Link>
                                        </li>
                                        <li className='mt-4'>
                                            <Link href="/marketing" className='font-myfont uppercase [word-spacing:2px] text-lg' onClick={() => onClose()}>M a r k e t i n g</Link>
                                        </li>
                                        <li className='mt-4'>
                                            <Link href="/animation" className='font-myfont uppercase [word-spacing:2px] text-lg' onClick={() => onClose()}>A n i m a t i o n</Link>
                                        </li>
                                        <li className='mt-4'>
                                            <Link href="/blog" className='font-myfont uppercase [word-spacing:2px] text-lg' onClick={() => onClose()}>B l o g</Link>
                                        </li>
                                        <li className='mt-4'>
                                            <Link href="/contact" className='font-myfont uppercase [word-spacing:2px] text-lg' onClick={() => onClose()}>C o n t a c t</Link>
                                        </li>
                                    </ul>
                                    <div className='border mt-5 border-gray-500 w-[90%] m-auto'></div>
                                </div>
                            </DrawerBody>
                            <DrawerFooter />
                            <DrawerCloseTrigger color='white' size={60} />
                        </DrawerContent>
                    </DrawerRoot>
                )}
            </For>
        </HStack>
    );
};

export default SideDrawer;
