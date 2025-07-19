import { createContext,useState } from "react";


export let otherContext = createContext({
    others:0,
    setOther:()=>{

    }
})

export let OtherProvider = ({children}) =>{
    let [others, setOther]=useState(0);
    let value = {others, setOther};

    return <otherContext.Provider value={value}>{children}</otherContext.Provider>
}