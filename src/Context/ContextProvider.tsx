import { useState, useEffect } from 'react'
import { PropsContextProvider } from '../Types'
import { InfoMainProductsContext } from './'
import Spinner from '../Components/Spinner'
import useData from '../Hooks/useData'

export default function ContextProvider({children}:PropsContextProvider){
    const [spinnerState, setSpinnerState] = useState(true)
    const url = 'https://armoniza-tu-alma-backend.vercel.app/main-products'
    const {dataFetched} = useData(url)

    useEffect(()=>{
        dataFetched !== null && setSpinnerState(false)
    },[dataFetched])

    return(
        <>
            {spinnerState
                ?<Spinner />
                :<InfoMainProductsContext.Provider value={dataFetched}>
                        {children}
                </InfoMainProductsContext.Provider>
            }            
        </>
    )
}