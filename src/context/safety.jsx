import { createContext,useState } from "react";


export let safeContext = createContext({
    safe:0,
    setSafe:()=>{

    }
})

export let SafeProvider = ({children}) =>{
    let [safe, setSafe]=useState(0);
    let value = {safe, setSafe};

    return <safeContext.Provider value={value}>{children}</safeContext.Provider>
}