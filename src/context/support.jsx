import { createContext,useState } from "react";


export let supportContext = createContext({
    supp:0,
    setSupp:()=>{

    }
})

export let SupportProvider = ({children}) =>{
    let [supp, setSupp]=useState(0);
    let value = {supp, setSupp};

    return <supportContext.Provider value={value}>{children}</supportContext.Provider>
}