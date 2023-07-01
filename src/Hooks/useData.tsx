import { useEffect, useState } from "react"

export default function useData(url:any) {
    const [dataFetched, setDataFetched] = useState(null)
    const worker1 = new Worker(new URL("../WebWorkers/workerFetch", import.meta.url))
    
    const dataFetch = async () => {
        try{
            //fetching in a separated thread
            if (typeof Worker !== undefined){
                worker1.postMessage(url)
                worker1.onmessage = (fetching)=>{
                    setDataFetched(fetching.data)
                    worker1.terminate()
                }
            }else{
                const fetching = await (await fetch(url)).json()
                setDataFetched(fetching.data)
            }            
        }
        catch(error){
            return error
        }
    }

    useEffect(()=>{
        dataFetch()
    },[url])
        
    return(
            {dataFetched}
    )
}