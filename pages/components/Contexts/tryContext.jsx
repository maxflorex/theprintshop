import { createContext, useContext } from "react";

const tryContext = createContext()

export const tryContexWrapper = ({children}) => {
    let tryValue = {
        value: 42
    }

    return (
        <tryContext.Provider value={tryValue}>
            {children}
        </tryContext.Provider>
    )
}

export const useTryContext = () => {
    return useContext(tryContext)
}

