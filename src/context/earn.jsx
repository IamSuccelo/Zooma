import { createContext,useContext, useState } from "react";

export let earnContext = createContext({
    earn:0,
    setEarn:()=>{

    }
})


export let EarnProvider = ({children}) =>{
    let [earn, setEarn]=useState(0);
    let value = {earn, setEarn};

    return <earnContext.Provider value={value}>{children}</earnContext.Provider>
}