import { createContext } from "react";
import { useState } from "react";

export let ContextConsumer = createContext();



export let ContextProvider = ({ children})=>{

     const [data, setData] = useState("kjcnkwjn createContext()");
     const [num, setNum] = useState(0);

     return(
        <ContextConsumer.Provider value={{data, setData, num, setNum}}>
            {children}
        </ContextConsumer.Provider>
     )
}