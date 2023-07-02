import styled from 'styled-components'
import React, { useState, useEffect, useContext } from 'react'
import { InfoMainProductsContext } from 'src/Context'
import * as TS from '../../Types/TypesStyledComponents'
import ItemPage from '../ItemPage'
import { useNavigate } from 'react-router-dom'
import Slideshow from '../../Components/Slideshow/Slideshow'
import { arrayImages } from 'src/Components/Layout/ImagesHome'

const HomePage = styled.div<TS.PropsTransitionEnd>`
    margin-top:50px;
    opacity:${props => !props.$transitionEnd
        ? '1'
        : '0'};
    position:static;
    transition: opacity 800ms ease;
    z-index:1;
`

const ItemsContainer = styled.div<TS.PropsTransitionEnd>`
    display:grid;
    align-items:center;
    gap: ${props => !props.$transitionEnd
        ? '40px 10px'
        : '2000px'};
    justify-content:center;
    margin: ${props => !props.$transitionEnd
        ? '10px'
        : '80vw'};
    position:relative;
    transition: 2000ms ease;
    transition-property: gap, margin;
    z-index:5;

    @media only screen and (max-width:600px){
        grid-template-columns:45% 45%;

        & .translateInOut:nth-of-type(odd){
            transform:translateX(-50px);
            opacity:0;
        }
        & .translateInOut:nth-of-type(even){
            transform:translateX(50px);
            opacity:0;
        }
    }
    @media only screen and (min-width:601px) and (max-width:1000px){
        grid-template-columns: 30% 30% 30%;

        & .translateInOut{
            transform:translateX(50px);
            opacity:0;
        }
    }
    @media only screen and (min-width:1001px){
        grid-template-columns: 21% 21% 21% 21%;
        gap:40px 40px;

        & .translateInOut{
            transform:translateX(50px) ;
            opacity:0;
        }
    }
`

const Img = styled.div<TS.PropsUrl>`
    background-image: ${props => `url(${props.$url})`};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size:180% auto;
    border:1px solid rgba(255,255,255,0.5);
    box-shadow: 3px 3px 10px 5px #0005;
    content-visibility:auto;
    cursor:pointer;   
    overflow:hidden;
    padding-top:100%;
    position:relative;
    transition: 300ms;    
    width:100%;
    height:0;

    &:hover{
        border:1px solid #ffb300;
        animation: animateItem 400ms ease alternate infinite;
    }

    @keyframes animateItem{
        0%{
            transform:translateY(0px);
        }
        50%{
            transform:tranlateY(5px);
        }
        100%{
            transform:translateY(-5px);
        }
    }

    container-type: inline-size;
    container-name: cardTitle;
 
    & p{
        bottom:0px;
        color:#FFF;
        font-family: "Alex Brush", Arial, Verdana;
        margin:0;
        position:absolute;
        text-align:center;
        text-shadow: 3px 3px 5px #000;
        width:100%;
        z-index:250;

        @container cardTitle (inline-size >= 1px){
            font-size: 10cqi;
        } 
    }

    &::after{
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23273036' fill-opacity='0.4' d='M0,96L80,101.3C160,107,320,117,380,112C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'%3E%3C/path%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 200%;
        bottom:0px;
        display:flex;
        margin:0;
        padding-top:100%;
        position:absolute;        
        transform:rotateZ(180deg);
        width:100%;
        height:0;
    }
`

export default function Home() {
    const [transitionEnd, setTransitionEnd] = useState(false)
    const [transitionStart, setTransitionStart] = useState(false)
    const [itemIndex, setItemIndex] = useState(-1)
    const [propsForItemPage, setPropsForItemPage] = useState({})
    const Navigate = useNavigate()
    const titlesArray = useContext(InfoMainProductsContext)

    useEffect(() => {
        const items = document.querySelectorAll('.items')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('translateInOut', !entry.isIntersecting)
            })
        }, {
            threshold: 0.3,
        })

        items.forEach((item) => {
            observer.observe(item)
        })
    }, [])


    return (
        <>
            <HomePage
                $transitionEnd={transitionEnd}
                className="home-page"
                onTransitionEnd={(e: React.TransitionEvent<HTMLDivElement>) => {
                    if(
                        e.propertyName === 'opacity' &&
                        window.getComputedStyle(e.currentTarget).opacity === '0' &&
                        e.currentTarget.className.includes('home-page')
                    ){
                        (e.currentTarget.style.display = 'none')
                        Navigate(`/Item/${itemIndex}`)
                    }
                }}
            >
                <Slideshow />

                {arrayImages.length > 0 && titlesArray!==null &&
                    <ItemsContainer
                        $transitionEnd={transitionEnd}
                        onTransitionEnd={(e: React.TransitionEvent<HTMLDivElement>) => e.propertyName === 'row-gap' && setTransitionStart(true)}
                    >
                        {
                            arrayImages.map((el, i) => (
                                <Img
                                    aria-label={titlesArray[i].title}
                                    className="items"    
                                    key={el}
                                    $url={el}
                                    role="button"
                                    title={titlesArray[i].title}
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                        let x = ((e.currentTarget as HTMLDivElement).getBoundingClientRect().x)/* .toString() */;
                                        let y = ((e.currentTarget as HTMLDivElement).getBoundingClientRect().y)/* .toString() */;
                                        let w = ((e.currentTarget as HTMLDivElement).getBoundingClientRect().width).toString();
                                        let h = ((e.currentTarget as HTMLDivElement).getBoundingClientRect().height).toString();

                                        //to avoid undefined in the ItemPage Component, 
                                        //diffing algorithm is not updating the second time that is 
                                        //clicked at the same product, xInitial and yInitial = undefined
                                        x = x + (Math.random() * 0.0050)
                                        y = y + (Math.random() * 0.0050)

                                        setPropsForItemPage({ 
                                            xInitial: x.toString() + 'px',
                                            yInitial: y.toString() + 'px',
                                            wInitial: w + 'px',
                                            hInitial: h + 'px',
                                            transitionStart: transitionStart,
                                            itemIndex: i,
                                        });
                                        
                                        (e.target as any).style.transition = `none`;
                                        (e.target as any).style.display = `none`;

                                        setTransitionEnd(true);
                                        setTransitionStart(true);
                                        setItemIndex(i)
                                    }}

                                >
                                    <p role="presentation">{titlesArray[i].title}</p>
                                </Img>
                            ))
                        }
                    </ItemsContainer>
                }
            </HomePage>

            {transitionStart && Object.entries(propsForItemPage).length > 0 &&
                <ItemPage {...propsForItemPage} />
            }
        </>
    )
}