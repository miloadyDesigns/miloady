"use client"


import { useEffect, useState, createContext, useContext } from "react"

import Lenis from "lenis"

const SmoothScrollerContext = createContext()

export const useSmoothScroller = () => useContext()

export default function ScrollContext({ children }) {
    const [lenisRef, setLenis] = useState(null);
    const [rafState, setRaf] = useState(null)

    useEffect(() => {
        const scroller = new Lenis()
        let rf;

        function raf(time) {
            scroller.raf(time);
            requestAnimationFrame(raf)
        }
        rf = requestAnimationFrame(raf)
        setRaf(rf)
        setLenis(rf)

        return () => {
            if (lenisRef) {
                cancelAnimationFrame(rafState)
                lenisRef.destory()
            }
        }

    }, [])

    return <SmoothScrollerContext.Provider value={lenisRef}>
        {children}
    </SmoothScrollerContext.Provider>
}