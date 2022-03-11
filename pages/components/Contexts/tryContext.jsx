import { createContext, useContext } from "react";

const TryContext = createContext()

export const TryContexWrapper = ({children}) => {
    let tryValue = 42

    return (
        <TryContext.Provider value={tryValue}>
            {children}
        </TryContext.Provider>
    )
}

export const UseTryContext = () => {
    return useContext(TryContext)
}

