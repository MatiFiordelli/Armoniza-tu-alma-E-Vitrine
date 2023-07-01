import styled, { keyframes } from 'styled-components'
import Img0 from '../../Assets/Images/SliderImages/velas-aromaticas1.webp'
import Img1 from '../../Assets/Images/SliderImages/aceites-esenciales1.webp'
import Img2 from '../../Assets/Images/SliderImages/atrapasuenos1.webp'
import Img3 from '../../Assets/Images/SliderImages/atrapasuenos2.webp'
import Img4 from '../../Assets/Images/SliderImages/bombitas1.webp'
import Img5 from '../../Assets/Images/SliderImages/conitos1.webp'
import Img6 from '../../Assets/Images/SliderImages/palo-santo1.webp'
import Img7 from '../../Assets/Images/SliderImages/palo-santo2.webp'
import Img8 from '../../Assets/Images/SliderImages/sahumerios2.webp'
import Img9 from '../../Assets/Images/SliderImages/saphirus1.webp'
import { useState } from 'react'

let arrayImages:string[] = 
[
    Img0, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9
]

const animateSlideshowSubtitleTop = keyframes`
    0%{
        opacity:0;
        transform:translateY(120%);
    }
    100%{
        opacity:1;
        transform:translateY(0%);
    }
`
const animateSlideshowTitle = keyframes`
    0%{
        opacity:0;
        transform:translateY(200%);
    }
    25%{
        opacity:0;
    }
    100%{
        opacity:1;
        transform:translateY(0%);
    }
`
const animateSlideshowSubtitleBottom = keyframes`
    0%{
        opacity:0;
        transform:translateY(-100%);
    }
    100%{
        opacity:1;
        transform:translateY(0%);
    }
`

interface ArrayImages{
    $Images: string;
}

const SlideshowContainer = styled.div<ArrayImages>`
    width:100%;
    height:0;
    background-color:#000;
    overflow:hidden;
    display:grid;
    //grid-template-rows:49% 2% 49%;
    justify-content:center;
    align-items:center;
    position:relative;

    @media only screen and (max-width:750px){
        padding-top:50vw;
    }
    @media only screen and (min-width:751px) and (max-width:1499px){
        padding-top:40vw;
    }
    @media only screen and (min-width:1500px){
        padding-top:50vw;
    }

    img {
        content: ${props=>`url(${props.$Images})`};
        top:0;
        position:absolute;
        width:100%;
        height:auto;
        animation: animateSlideShow 6000ms linear infinite;

        @keyframes animateSlideShow{
            0%{
                transform:scale(100%);
                opacity:0;
            }
            10%{
                opacity:1;
            }
            100%{
                transform:scale(120%);
                opacity:1;
            }
        }
    }

    & div {
        position:absolute;
        width:100%;
        height:100%;
        display:grid;
        grid-template-rows: 47% 6% 49%;
        justify-content:center;
        align-items:center;
        

        & p{
            color:#FFF;
            font-family: 'Poppins', Helvetica, sans-serif;
            font-size:6vw;
            text-shadow: 2px 2px 5px rgba(0,0,0,0.7);
            font-weight:600;
            letter-spacing:7px;
            word-spacing:3px;
            margin:0;
            z-index:110;
            text-align:center;
            width:100%;
            position:relative;
            animation: ${animateSlideshowTitle} 2000ms ease forwards;

            @media only screen and (max-width:800px){
                font-weight:800 !important;
            };
        }
        & :nth-child(1){
            font-family: 'Mulish', Helvetica, sans-serif;
            font-size:4vw;
            font-weight:400;
            letter-spacing:6px;
            word-spacing:1px;
            animation: ${animateSlideshowSubtitleTop} 2500ms ease forwards;
        }
        & :last-child{
            font-size:2vw;
            font-weight:300;
            letter-spacing:4px;
            line-height:2.5vw;
            word-spacing:0px;
            opacity:0;
            animation: ${animateSlideshowSubtitleBottom} 2200ms ease forwards;
            animation-delay:900ms;
        }
    }
`

export default function Slideshow(){
    const [imageIndex, setImageIndex] = useState(0)
   
    const changeImageSlideshow = () => {
        if(imageIndex === arrayImages.length-1){
            setImageIndex(0)
        }else{
            setImageIndex(()=>imageIndex+1)
        }
    }

    return(
        <SlideshowContainer 
            $Images={arrayImages[imageIndex]}
            aria-hidden={true}
        >
            <img 
                onAnimationIteration={()=>changeImageSlideshow()}
                alt=""
            />
            <div>
                <p>Fragancias y Decoración</p>
                <p>Armoniza tu alma</p>
                <p>Aromatizamos tu hogar a través de fragancias y defumados que capturan tus sentidos</p>
            </div>
        </SlideshowContainer>
    )
}