import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes,css } from 'styled-components'

interface ToggleButton{
    $toggleButton:number;
}
interface Position{
    $position:string;
}
interface MenuBarHeight{
    $menuBarHeight:string;
}
type Props0 = ToggleButton & Position;
type Props1 = Props0 & MenuBarHeight;
//type Props2 = Props0 & MenuBarHeight;

const HamburgerButtonSC = styled.div<Props0>`
    cursor:pointer;
    display:grid;
    place-items: center;
    position:absolute;
    margin:5px;
    transition: 500ms;
    width:30px;
    height:30px;
    ${props => props.$position === 'right'
                                        ?css`right:10px;`
                                        :css`left:10px;`
    }

    @media only screen and (min-width:1601px) and (max-width:2600px){
        margin:20px;
        transform:scale(1.5);
    } 
    @media only screen and (min-width:2601px) and (max-width:3600px){
        margin:40px;
        transform:scale(3);
    } 
    @media only screen and (min-width:3601px){
        margin:50px;
        transform:scale(4);
    } 

    &:hover&>div{
        background-color:#DDD;
    }

    & div{
        width: ${props => {
            if(props.$toggleButton!==1){
                return '25px'
            }else{
                return '20px'
            }
        }};

        height:3px;
        position:absolute;
        transition: 500ms;
        z-index:1000;
    }
    & div:nth-child(1){
        background-color: #FFF;
        top:18%;
        transform: ${props => {
                        if(props.$toggleButton!==1){
                            return 'none'
                        }else{
                            return 'translate(-2px, 8px) rotate(-45deg)'
                        }
                    }};
    }
    & div:nth-child(2){
        background-color: #FFF;
        top:46%;
        opacity: ${props => {
                        if(props.$toggleButton!==1){
                            return '1'
                        }else{
                            return '0'
                        }
                    }};
    }
    & div:nth-child(3){
        background-color: #FFF;
        top:75%;
        transform: ${props => {
                        if(props.$toggleButton!==1){
                            return 'none'
                        }else{
                            return 'translate(-2px, -9px) rotate(45deg)'
                        }
                    }};
    }
`

const animateMobileMenuShow = keyframes`
    0% {
        transform:translateY(-150vh);
    }
    70%{
        transform:translateY(0px);
    }
    80%{
        transform:translateY(-20px);
    }
    90%{
        transform:translateY(-2px);
    }
    95%{
        transform:translateY(-5px);
    }
    100% {
        transform:translateY(0px);
    }
`
const animateMobileMenuExit = ($position:string) => keyframes`
    0%{
        transform: translateY(0px);
    }
    100%{
        ${$position==='right'
            ?css`transform: translate(100vw, 0px) rotateY(210deg);`
            :css`transform: translate(-100vw, 0px) rotateY(-210deg);`
        }  
    }
`

const MobileMenu = styled.nav<Props1>`
    height:calc(100vh - 50px);
    background-image: linear-gradient(to right, #0d1e15, #1a3c2b);
    position:fixed;
    ${props => props.$position === 'right'
                                        ?'right:0' 
                                        :'left:0'
    };
    top: ${props => props.$menuBarHeight};
    /* //top:50px; */
    z-index:300;
    transition:2500ms transform;
    ${props => {
            if(props.$toggleButton===0){
                return css`animation:${animateMobileMenuExit(props.$position)} 1600ms linear forwards;`
            }else if(props.$toggleButton===1){
                return css`animation:${animateMobileMenuShow} 800ms linear forwards;`
            }else{
                return css`visibility:hidden;`
            }
    }};

    & div{
        margin-top:14vh;
        
        & p{
            /* font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */
            font-size: calc(12px + (32) * ((100vw - 300px) / (2000 - 300)));
            margin:20px;
            border-bottom: 1px solid #FFF;
            position:relative;
            user-select:none;
        }
        & p:hover::before{
            overflow:hidden;
            content:attr(data-text);
            position:absolute;
            border-bottom: 1px solid #FB0;
            color:#FB0;
            height:100%;
            animation: animateItemMobileMenu 300ms ease-in forwards;

            @keyframes animateItemMobileMenu{
                from{
                    width:0;
                    opacity:0;
                }
                to{
                    width:100%;
                    opacity:1;
                }
            }
        }
        & p:active::before{
            color:#FA0;
        }
    }

    @media only screen and (max-width:500px){
        width:65vw;
    }
    @media only screen and (min-width:501px) and (max-width:700px){
        width:50vw;
    }
    @media only screen and (min-width:701px){
        width:35vw;
    }
`
const overlayFadeIn = keyframes`
    0%{
        background-color: rgba(0, 0, 0, 0);
    }
    100%{
        background-color: rgba(0, 0, 0, 0.7);
    }
`

const overlayFadeOut = keyframes`
    0%{
        background-color: rgba(0, 0, 0, 0.7);
    }
    100%{
        background-color: rgba(0, 0, 0, 0);
    }
`

const Overlay = styled.div<Props1>`
    ${props => {
            if(props.$toggleButton===1){
                return css`
                display:flex;
                        animation: ${overlayFadeIn} 500ms ease forwards; 
                        transform: ${props.$position === 'right'
                                                                ?css`translate(0vw)`
                                                                :css`translate(0vw)`
                                    };
                        `
                
            }else{
                return css`
                        animation: ${overlayFadeOut} 500ms ease forwards; 
                        transform: ${props.$position === 'right'
                                                                ?css`translate(100vw)`
                                                                :css`translate(-100vw)`
                                    };
                        `
            }
        }};
    
    width: 100vw;
    position:fixed;
    height:100vh;
    top:${props => props.$menuBarHeight};
    left:0;
    transition: 500ms transform;
    z-index:290;
`

type HamburgerButtonProps = {
    position:string;
    hamburgerBtn:number;
    setHamburgerBtn:React.Dispatch<React.SetStateAction<number>>;
    menuBarHeight:string;
}

export default function HamburgerButton({
                                            position, 
                                            hamburgerBtn, 
                                            setHamburgerBtn, 
                                            menuBarHeight
                                        }:HamburgerButtonProps){
    const navigate = useNavigate()
    const setHamburgerFC = (option:string) => {
        hamburgerBtn !== 1
            ?setHamburgerBtn(1)
            :setHamburgerBtn(0)

        option === 'home' && navigate('/')
        option === 'aboutus' && navigate('quienes-somos')
        option === 'contact' && navigate('/contacto')
    }
    const hamburgerBtnRef = useRef<HTMLHeadingElement>(null)

    //closes the menu on page change
    window.onpopstate=(()=>{
        hamburgerBtn === 1 && setHamburgerBtn(0)
    })

    useEffect(()=>{
        hamburgerBtnRef.current!==null && hamburgerBtnRef.current.focus()
    },[])

    return(
        <>
            <HamburgerButtonSC 
                $position={position}
                $toggleButton={hamburgerBtn}
                
                aria-label="Hamburger Button"
                onClick={()=>setHamburgerFC('')}
                onKeyDown={(e:React.KeyboardEvent<HTMLDivElement>)=>e.key==='Enter' && setHamburgerFC('')}
                
                ref={hamburgerBtnRef}
                role="button"
                tabIndex={0}
                title="Menú"
            >
                <div />
                <div />
                <div />
            </HamburgerButtonSC>
            <MobileMenu
                $toggleButton={hamburgerBtn}
                $position={position}
                $menuBarHeight={menuBarHeight}
            >
                <div role="menu">
                    <p 
                        data-text="Home" 
                        onClick={()=>setHamburgerFC('home')}
                        role="menuitem"
                    >
                        Home
                    </p>
                    <p 
                        data-text="¿Quienes somos?" 
                        onClick={()=>setHamburgerFC('aboutus')}
                        role="menuitem"
                    >
                        ¿Quienes somos?
                    </p>
                    <p 
                        data-text="Contacto" 
                        onClick={()=>setHamburgerFC('contact')}
                        role="menuitem"
                    >
                        Contacto
                    </p>
                </div>
            </MobileMenu>
            <Overlay 
                $toggleButton={hamburgerBtn}
                $position={position}
                $menuBarHeight={menuBarHeight}
                onClick={()=>setHamburgerFC('')}
            />
        </>
    )
}