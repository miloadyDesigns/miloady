"use client"
import React, { createContext, useContext, useState } from 'react';

const HeaderVisibilityContext = createContext();

export const useHeaderVisibility = () => {
    return useContext(HeaderVisibilityContext);
};

export const HeaderVisibilityProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [portfolioSlide, setPortfolioSlide] = useState(0)
    return (
        <HeaderVisibilityContext.Provider value={{ isVisible, setIsVisible, portfolioSlide, setPortfolioSlide }}>
            {children}
        </HeaderVisibilityContext.Provider>
    );
};
