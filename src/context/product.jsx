import { Children, createContext,useState } from "react";


export let productContext = createContext({
    prods: 0,
    setProd:()=>{

    }
})

export let ProdsProvider=({children})=>{
    let [prods, setProd]=useState(0);
    let value = {prods, setProd};


    return <productContext.Provider value={value}>{children}</productContext.Provider>
}