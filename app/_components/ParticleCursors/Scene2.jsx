'use client';
import React from 'react'
import Cursor from "./Cursor";
import { useState } from 'react';

export default function Scene2({ children }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='flex items-center justify-center z-[2]'>
            <div className='z-[2]' onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }} >{children}</div>
            <Cursor isActive={isActive} />
        </div>
    )
}