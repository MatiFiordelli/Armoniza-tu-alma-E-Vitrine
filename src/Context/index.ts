import { createContext } from 'react'
import { KeyInfoMainProduct } from 'src/Types'

export const InfoMainProductsContext = 
                            createContext<KeyInfoMainProduct[] | null>(null)
 