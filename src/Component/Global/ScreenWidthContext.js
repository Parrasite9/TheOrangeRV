import React, { createContext, useContext, useState, useEffect } from 'react';

// Initialize the context correctly
const ScreenWidthContext = createContext();

export const ScreenWidthProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ScreenWidthContext.Provider value={isMobile}>
            {children}
        </ScreenWidthContext.Provider>
    );
};

export const useScreenWidth = () => useContext(ScreenWidthContext);
