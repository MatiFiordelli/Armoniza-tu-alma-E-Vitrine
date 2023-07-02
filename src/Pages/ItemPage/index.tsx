import { useContext } from 'react';
import styled, { css } from 'styled-components'
import { useParams } from 'react-router-dom';
import { InfoMainProductsContext } from '../../Context'
import * as TS_SC from '../../Types/TypesStyledComponents'
import { PropsForItemPageComponentOnPages } from 'src/Types';
import { arrayImages } from 'src/Components/Layout/ImagesHome'

const MobileImageSize = 290
const BiggestScreensTopValue = '150px, 20vh, 20vh';

const PageItemContainer = styled.main<TS_SC.PropsTransitionStart>`
    display: ${props => props.$transitionStart
        ? 'none'
        : 'grid'};

    overflow: auto;
    position:absolute;
    top:0;
    width:100vw;
    height:-webkit-fill-available;
    z-index:10;

    @media only screen and (max-width:499px){
        grid-template-rows: ${`${MobileImageSize}px`} auto;
    }
    @media only screen and (min-width:500px) and (max-width:768px){
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (min-width:769px){
        grid-template-columns: 1fr 1fr;
    }
    
`

const ItemImage = styled.div<TS_SC.PropsForItemImageComponent>`
    @media only screen and (max-width:499px){
        --width-value: ${`${MobileImageSize}px`};
        --height-value: ${`${MobileImageSize}px`};
    }
    @media only screen and (min-width:500px) and (max-width:1024px){
        --width-value: 240px;
        --height-value: 240px;
    }
    @media only screen and (max-width:1024px){
        --top-value: 150px;
    }
    @media only screen and (min-width:1025px){
        --top-value: clamp(${BiggestScreensTopValue});
        --width-value: 30vw;
        --height-value: 30vw;
    }

    background-image: url(${props => `${props.$arrayImages[props.$itemIndex]}`});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size:160% auto;
    display:grid;
    position:relative;
    top: var(--top-value);
	transition: 500ms;
	${props => props.$transitionStart === undefined &&
		css`transform:translateX(-50%);
			left: 50%;`
	}
    width: var(--width-value); 
    height: var(--height-value); 
    z-index:90;
    ${props => props.$transitionStart !== undefined &&
        css`animation: animateImgOnLoad 500ms linear forwards;`}

    @keyframes animateImgOnLoad{
        from{
            background-size:180% auto;
            top: ${props => props.$y};
            left: ${props => props.$x};
            width: ${props => props.$w};
            height: ${props => props.$h};
        }
        to{
			background-size:160% auto;
            top: var(--top-value);
            width:var(--width-value); 
            height:var(--height-value);
			left:50%;
			transform:translateX(-50%);
        }
    };
`

const ItemTextDescription = styled.section<TS_SC.PropsForItemTextDescriptionComponent>`
    color:#FFF;
    font-family: 'Nunito', Arial, Verdana, sans-serif;
    font-weight:300;
	height: fit-content;
    margin: 0 20px 0 10px;
    opacity: ${props => props.$opacity};
    overflow:hidden;
    padding-bottom:10px;
    position:relative;
    text-shadow: 3px 3px 10px #000;
    left:0;
    will-change: content;
    animation: ${props => props.$animateActivation && 
                            css`animateItemTextDescription 500ms ease-in forwards`};

    @keyframes animateItemTextDescription{
        0%{
            left:100%;
            opacity:0;
        }
        50%{
            opacity:0;
        }
        100%{
            left:0;
            opacity:1;
        }
    }

    & .item-title{
        font-weight:500;
        margin:0 auto 10px;
    }

    @media only screen and (max-width:499px){ 
        padding: 40px 10px 10px; 
        
        & .item-title{
            margin: 0 auto 5px;
        }
    }
    @media only screen and (max-width:1024px){
        font-size:1rem;
        top:150px;

        & .item-title{
            font-size:1.5rem;
        }
    }
    @media only screen and (min-width:1025px){
        font-size:1.7vw;
        top: clamp(${BiggestScreensTopValue});

        & .item-title{
            font-size:2.2vw;
        }
    }
`

export default function ItemPage({
                                    xInitial,
                                    yInitial,
                                    wInitial,
                                    hInitial,
                                    transitionStart,
                                    itemIndex,
                                     }:any | PropsForItemPageComponentOnPages) {
    const Params = useParams()
    const detectParams = Object.entries(Params).length
    const mainProductsArray = useContext(InfoMainProductsContext)
    const itemIdx = itemIndex !== undefined
                                    ? itemIndex
                                    : (Params.itemIndexParam as unknown as number)

    return (
        <PageItemContainer
            $transitionStart={transitionStart}
        >
        {mainProductsArray!==null &&
        <>
            <ItemImage
                $x={xInitial===undefined?"110vw":xInitial}
                $y={yInitial===undefined?"110vh":yInitial}
                $w={wInitial}
                $h={hInitial}
                $transitionStart={transitionStart}
                $itemIndex={itemIdx}
                $arrayImages={arrayImages}

                role="presentation"
                title={mainProductsArray[itemIdx].title}
            />
            <ItemTextDescription
                aria-label="Descripcion del Producto"

                $opacity={detectParams===0?'0':'1'}
                $animateActivation={detectParams===0?true:false}
            >
                <>
                    <p className="item-title">
                        {mainProductsArray[itemIdx].title}
                    </p>
                    {mainProductsArray[itemIdx].description}
                </>
            </ItemTextDescription>
        </>
        }
        </PageItemContainer>
     )
}