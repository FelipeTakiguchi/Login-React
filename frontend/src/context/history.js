import React, { useState } from "react";

export const HistoryContext = React.createContext();
HistoryContext.displayName = 'History';

export const HistoryProvider = ({ children }) => {
    const [history, setHistory] = useState([]);

    function addAtHistory(h){
        setHistory([...history, h]);
    }
    
    return(
        <HistoryContext.Provider
            value={{
                history,
                addAtHistory
            }}
        >
            {children}
        </HistoryContext.Provider>
    )
}