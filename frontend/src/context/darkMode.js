import React, { useState } from "react";

export const DarkModeContext = React.createContext();
DarkModeContext.displayName = "Dark Mode";

export const DarkModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    function handleDarkMode(){
        setIsDark(!isDark);
    };

    return (
        <DarkModeContext.Provider
            value={{
                isDark,
                handleDarkMode
            }}
        >
            {children}
        </DarkModeContext.Provider>
    )
}