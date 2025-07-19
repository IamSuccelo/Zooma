import { createContext, useState } from "react";



export let RideBizContext = createContext({
    rider:0,
    setRide:()=>{

    }
})

export let RideBizProvider = ({children})=>{
    let [rider, setRide]= useState(0);
    let value = {rider, setRide};

   return <RideBizContext.Provider value={value}>{children}</RideBizContext.Provider>
}