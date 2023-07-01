import Logo from '../../Assets/Images/logo.png'
import styled, { css } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import HamburgerButton from './HamburgerButton'
import { useState } from 'react'

const HeaderContainer = styled.header`
    background-color:#182d23;
    color:#FFF;
    /* display:grid; */
    font-family: "NTR", Arial, Verdana;
    font-size:1.2rem;
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    position:fixed;
    width:100vw;
    height: var(--menuHeight);   
    z-index:900;

    @media only screen and (max-width:500px){ --menuHeight:50px; };
    @media only screen and (min-width:501px) and (max-width:1600px){ --menuHeight:55px; };
    @media only screen and (min-width:1601px){ --menuHeight:5vw; };
`
type Props={
    $menuBarHeight:string;
    $mobileMenuState:number;
    $position:string;    
}

const ImageLogo = styled.img<Props>`
    ${props => {
        if(props.$mobileMenuState !== 1){
            return css`
                --size: var(--baseSize);
                left:calc(50vw - (var(--size)/2));
                top:0px;
                transform: rotateZ(0deg);
                transition:500ms ease-out;
            ` 
        }else{
            return css`
                    --size: calc(var(--baseSize)/2);
                    ${props.$position==='left'
                                            ?css`left:10px;`
                                            :css`left:calc(100vw - (var(--size)) - 20px);`
                    };
                    transform: rotateZ(360deg);
                    transition:500ms ease-out;
                    transition-delay:300ms;

                    @media only screen and (max-width:1600px){ top:75px; }
                    @media only screen and (min-width:1601px){ top:6vw; }
            `}
        }
    };
    cursor:pointer;
    background-color:#FFF;
    border-radius:50%; 
    box-shadow: 3px 3px 10px #000;
    position:fixed;
    width: var(--size);
    height: var(--size);
    z-index:1000;

    @media only screen and (max-width:500px){ --baseSize: 85px; };
    @media only screen and (min-width:501px) and (max-width:1600px){ --baseSize: 100px; };
    @media only screen and (min-width:1601px){ --baseSize: 10vw; };
`

const MenuList = styled.ul`
    list-style:none;

    & li{
        cursor:pointer;
        margin:0 30px;
    }
`


export default function Header(){
    const navigate = useNavigate()
    const [hamburgerBtn, setHamburgerBtn] = useState(-1)
    const [menuBarHeight, setMenuBarHeight] = useState('')
    const position = 'right'

    let el = document.querySelector('.menu-bar')
    el!==null && 
        menuBarHeight==='' && 
            setMenuBarHeight(window.getComputedStyle(el).height)

    window.onresize=(()=>{
        el!==null && 
            setMenuBarHeight(window.getComputedStyle(el).height)            
    }) 


    return(
        <HeaderContainer
            className="menu-bar"
        >
            <HamburgerButton 
                hamburgerBtn={hamburgerBtn}
                menuBarHeight={menuBarHeight}
                position={position}
                setHamburgerBtn={setHamburgerBtn}
            />
            <ImageLogo 
                $menuBarHeight={menuBarHeight}
                $mobileMenuState={hamburgerBtn}
                $position={position}
                alt="Logo" 
                aria-label="image logo home"
                role="button"
                src={Logo} 
                title="Logo"
                onClick={()=>{
                                navigate('/')
                                hamburgerBtn===1 && setHamburgerBtn(0)
                            }
                }
            />
            <MenuList />
        </HeaderContainer>
    )
}