import { Dispatch, SetStateAction } from "react"

export type PropsChildren = {
    children: JSX.Element
}

export type PropsForItemPageComponentOnPages = {
    xInitial: string;
    yInitial: string;
    wInitial: string;
    hInitial: string;
    transitionStart: boolean;
    itemIndex: number;
}

export type KeyInfoMainProduct = {
    title:string
    description:string
    _id:string
}

export type StateSpinner = {
    spinnerState: Boolean
}

export type StateMainProducts = {
    stateMainProducts: KeyInfoMainProduct[]
}

export type PropsArrayStringState = StateMainProducts & StateSpinner

export type PropsContextProvider  = PropsChildren

export type PropsFetchMainProducts = {
    setInfoMainProducts: Dispatch<SetStateAction<KeyInfoMainProduct>>
}
