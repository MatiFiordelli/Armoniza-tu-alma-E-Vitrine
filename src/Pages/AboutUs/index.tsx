import styled from 'styled-components'

const Section = styled.section`
    display:block;
    margin:0 auto;
    padding:40px;
    position:relative;    
    width:70vw;
    height:auto;
    text-shadow: 3px 3px 10px #000;

    @keyframes animateAboutUsDescription{
        0%{
            opacity:0;
            top:7px;
        }
        50%{
            opacity:0.3;
        }
        100%{
            opacity:1;
            top:0px;
        }
    }

    & p{
        color: #FFF;
        backdrop-filter: blur(1px);
        position:relative;
        top:0;
        font-family: 'Nunito', Arial, Verdana, sans-serif;
        font-weight:300;
        margin:10px;
        opacity:0;
        padding-bottom:10px;
    }
    & p:first-child{
        font-weight:500;
        font-size:1.5rem;
        padding-bottom:7px;
        text-align:center;
        animation: animateAboutUsDescription 1000ms linear forwards;
    }
    & p:nth-child(2){
        animation: animateAboutUsDescription 1000ms linear 150ms forwards;
    }
    & p:last-child{
        animation: animateAboutUsDescription 1000ms linear 300ms forwards;
    }

    @media only screen and (max-width:800px){
        text-align:center;
        top:100px;
    }
    @media only screen and (min-width:801px) and (max-width:1024px){
        text-align:justify;
        top:150px;
    }
    @media only screen and (min-width:1025px){
        font-size:1.7vw;
        text-align:justify;
        top:20vh;

        & p:first-child{
            font-size:2.7vw;
        }
    }
`
const aboutUsDescription1 = `
Tenemos la convicción de que sentirse bien tiene un aroma especial y que esto determina la calidad de vida
de las personas. Por ese motivo creamos Armoniza tu Alma, Aromas con espíritu y nuestra misión es crear 
bienestar.`

const aboutUsDescription2 = `
Somos una empresa familiar que brinda soluciones aromáticas en diferentes formatos y presentaciones. 
Traemos nuestras fragancias de calidad premium brindando un aroma puro libre de olor a humo, amigables con el 
medio ambiente y biodegradables, elaborados con un packaging que combina la modernidad con la tradición de los 
mandalas, nuestros sahumerios se destacan no solo por su contenido si no también x su presentación.
`

export default function AboutUs() {
    return(
        <Section>
            <p>CONOCENOS</p>
            <p>{aboutUsDescription1}</p>
            <p>{aboutUsDescription2}</p>
        </Section>
    )
}