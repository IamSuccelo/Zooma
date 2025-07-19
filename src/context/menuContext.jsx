import { createContext, useState } from "react";

export let dropContext = createContext({

    drop:0,
    setDrop:()=>{

    }
    
})

export let DropmenuProvider = ({children})=>{
    
    let [drop, setDrop] = useState(0);
    let value = {drop, setDrop};

    return <dropContext.Provider value={value}>{children}</dropContext.Provider>
}