import { createContext,useState } from "react";


export let compContext = createContext({
    comp:0,
    setComp:()=>{

    }
})

export let CompProvider = ({children})=>{
    let [comp, setComp]=useState(0);
    let value = {comp, setComp};

    return <compContext.Provider value={value}>{children}</compContext.Provider>
}