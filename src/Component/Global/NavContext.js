import React, { createContext, useContext } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const navLinks = [
        { 
            linkName: "Home", 
            href: '/', 
            className: "navbar-link" 
        },
        { 
            linkName: "Search RVs", 
            href: '/search', 
            className: "navbar-link" 
        },
        { 
            linkName: "Trade & Sell", 
            href: '/trade-and-sell', 
            className: "navbar-link" 
        },
        { 
            linkName: "About", 
            href: '/about', 
            className: "navbar-link" 
        },
        { 
            linkName: "Contact Us", 
            href: '/contact-us', 
            className: "navbar-link" }
    ];

    return (
        <NavContext.Provider value={{ navLinks }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNavLinks = () => useContext(NavContext);
