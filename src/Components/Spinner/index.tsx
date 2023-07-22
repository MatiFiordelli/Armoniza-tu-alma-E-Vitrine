/* import React, { useContext } from 'react' */
//import { SpinnerContext } from '../Context'
import { styled } from 'styled-components'

const SpinnerStyledComponent = styled.div`
    align-items: center;
    background-color: transparent;
    display: grid;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 99;

    .spinner-circle{
        animation: rotating-circle 1200ms linear infinite;
        background-color: transparent;
        border:0.6vw solid;
        border-color: transparent #F0EDED transparent #F0EDED;
        border-radius: 50%;
        width: 6vw;
        height: 6vw;
        z-index: 100;
    }

    @keyframes rotating-circle {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`

export default function Spinner(){
    //const spinner = useContext(SpinnerContext)

    return(
        <SpinnerStyledComponent>
            <div className='spinner-circle'/>
        </SpinnerStyledComponent>
    )
}