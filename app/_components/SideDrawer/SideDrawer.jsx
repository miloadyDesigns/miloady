import React from 'react';
import { For, HStack } from "@chakra-ui/react";
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

const SideDrawer = () => {
    return (
        <HStack wrap="wrap">
            <For each={["start"]}>
                {(placement) => (
                    <DrawerRoot key={placement} placement={placement} size={'full'}>
                        <DrawerBackdrop />
                        <DrawerTrigger asChild>
                            <div>
                                <GiHamburgerMenu size={25} color="white" />
                            </div>
                        </DrawerTrigger>
                        <DrawerContent
                            bg="transparent" // No solid background, so the backdrop filter is visible
                            boxShadow="none" // Remove the default box shadow, so it feels "floating"
                            backdropFilter="blur(10px)" // Stronger blur for a more pronounced glass effect
                            roundedTop={placement === "bottom" ? "l3" : undefined}
                            roundedBottom={placement === "top" ? "l3" : undefined}
                        >
                            {/* <Canvas gl={{ alpha: true }} style={{
                                width: "100vw",
                                height: "100vh",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: 0,
                            }}>

                                <Stars />
                            </Canvas> */}
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
                                <div className='mt-12 '>
                                    <Accordion />
                                </div>
                            </DrawerBody>
                            <DrawerFooter>

                            </DrawerFooter>
                            <DrawerCloseTrigger color='white' size={60} />
                        </DrawerContent>
                    </DrawerRoot>
                )}
            </For>
        </HStack>
    );
};

export default SideDrawer;
