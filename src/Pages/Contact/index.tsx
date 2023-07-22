import styled, { css } from 'styled-components'
import SvgInstagram from '../../Components/SVGs/svg-instagram'
import SvgFacebook from '../../Components/SVGs/svg-facebook'
import SvgWhatsapp from '../../Components/SVGs/svg-whatsapp'
import SvgEmail from '../../Components/SVGs/svg-email'
import SvgTelephone from '../../Components/SVGs/svg-telephone'
import SvgDelivery from '../../Components/SVGs/svg-delivery'
import SvgWireTransfer from '../../Components/SVGs/svg-wire-transfer'
import React, { FormEvent, useState } from 'react'
import Spinner from 'src/Components/Spinner'
import { PropsModalStatus } from '../../Types/TypesStyledComponents' 

const Modal = styled.section<PropsModalStatus>`
    background-color: #000;    
    display: grid;
    position:fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    ${props => props.$modalStatus 
                            ?css`animation: animateLayoutOn 300ms linear forwards;`
                            :css`animation: animateLayoutOff 300ms linear forwards;`}

    @keyframes animateLayoutOn {
        from { opacity: 0; z-index: 1; }
        to { opacity: 0.5; }
    }

    @keyframes animateLayoutOff {
        from { opacity: 0.5; }
        to { opacity: 0; z-index: -1; }
    }
`

const Section = styled.section`
    @media only screen and (max-width:599px){
        grid-template-rows: 1fr 1fr;
        top:150px;
    }
    @media only screen and (min-width:600px){ grid-template-columns: 1fr 1fr; }
    @media only screen and (max-width:1600px){ top:150px; }
    @media only screen and (min-width:1601px){ top:20vw; }

    align-items:start;
    color:#FFF;
    display:grid;
    row-gap:30px;
    justify-content: center;
    margin:10px 10px 50vh;
    position:relative;
    text-align:center;
    height:fit-content;
    text-shadow: 3px 3px 10px #000;

    & p {
        @media only screen and (max-width:1600px){ font-size:1.5rem; }
        @media only screen and (min-width:1601px){ font-size:3vw; }

        font-weight:500;
        margin:30px 0 0 0;
        text-align:center;
        animation: animateAboutUsDescription 1000ms linear forwards;
    }

    & p:first-child {
        margin:0;
    }    

    & svg{
        @media only screen and (max-width:1600px){ width:40px; }
        @media only screen and (min-width:1601px){ width:4vw; }

        fill: #EEE;
        margin: 0 auto;
        transition:500ms;
    }

    & svg:hover{
        fill:#FFF;
        transform:scale(125%) translateY(-3px);
    }

    & pre{
        margin:1px;
    }

    & .info-delivery-off, & .info-payments-off{
        
        opacity:0;
        transition:opacity 200ms linear;
    }

    & .info-delivery-on, & .info-payments-on{
        
        opacity:1;
        transition:opacity 200ms linear;
    }

`
const RightSide = styled.form`
    display:flex;
    flex-direction:column;
    font-family: 'Nunito', Arial, Verdana, sans-serif;
    gap:5px;
    order:1;

    @media only screen and (max-width:599px){
        order:-1;
        width:95vw;
    }
    @media only screen and (min-width:1601px){ gap:1.5vw; }

    & > .name-container {
        display:flex;
        flex-direction:row;
    }

    & .input-elements {
        border:2px solid #DDD;
        border-radius:5px;
        box-shadow: 3px 3px 15px 0px #222;
        font-variant:small-caps;
        font-size:1rem;
        margin:5px;
        padding-left:5px;
        text-transform: capitalize;
        width: -webkit-fill-available;
        

        @media only screen and (max-width:1600px){ height:40px; }
        @media only screen and (min-width:1601px){
            font-size:1.4vw;
            height:4vw;
        }
    }

    & div{
        @media only screen and (min-width:1601px){
            gap:1.5vw;
        }
    }

    & div .input-elements{
        width:50%;
    }

    & .textarea-element {
        border-radius:5px;
        box-shadow: 3px 3px 15px 0px #222;
        font-family: 'Nunito', Arial, Verdana, sans-serif;
        font-variant: small-caps;
        height:100px;
        width:auto;
        margin:5px;
        resize:none;
        text-transform: capitalize;

        @media only screen and (min-width:1601px){
            font-size:1.4vw;
            height:20vh;
        }
    }

    & .input-elements::placeholder, & .textarea-element::placeholder{
        font-style: italic;
    }

    & > .button-element {
        background-color:#EEE;
        border:2px solid #DDD;
        border-radius:4px;
        box-shadow: 3px 3px 15px 0px #222;
        cursor: pointer;
        font-family: 'Nunito', Arial, Verdana, sans-serif;
        font-weight:600;
        margin: 0 auto;
        margin-right:5px;
        width:30%;
        height:35px;

        @media only screen and (min-width:1601px){
            font-size:1.4vw;
            height:6vh;
        }

        &:active {
            background-color:#DDD;
        }
        &:hover {
            border:0.5px solid #FFF;
        }
    }
`

const LeftSide = styled.div`
    display: grid;
    grid-auto-flow:row;
    justify-content:center;
    align-items:center;
    
    @media only screen and (max-width:1600px){
        gap:10px 20px;
    }
    @media only screen and (min-width:1601px){
        gap:20px 50px;
    }
`

const Icons = styled(LeftSide)`
    grid-auto-flow:column;
    
`

export default function Contact() {
    const infoObject = {
        infoPayments: false,
        infoDelivery: false
    }
    const dataFormObject = {
        firstName: "",
        lastName: "",
        telephone: "",
        email: "",
        message: ""
    }
    const [showInfoState, setShowInfoState] = useState(infoObject)
    const [dataForm, setDataForm] = useState(dataFormObject)
    const [modalStatus, setModalStatus] = useState(false)

    const sendForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const options = {
            method: 'POST',
            body: JSON.stringify({
                firstName: dataForm.firstName,
                lastName: dataForm.lastName,
                telephone: dataForm.telephone,
                email: dataForm.email,
                message: dataForm.message
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }

        if(e.currentTarget.checkValidity()){
            setModalStatus(true)
            fetch('https://armoniza-tu-alma-backend-email-sender.vercel.app/', options)
            .then((res)=>res.json())
            .then((data)=>{
                if(data.response){
                    setModalStatus(false)
                    alert('Email Enviado!')
                    setDataForm(dataFormObject)           
                } else{
                    alert('Hubo un problema al intentar enviar el Email, intentalo de nuevo mas tarde.')
                }
            })
            .catch((e)=>{
                console.log('Error: ' + e)
                alert('Hubo un problema al intentar enviar el Email, intentalo de nuevo mas tarde.')
            })
        }        
    }

    return ( 
        <Section>
            <Modal $modalStatus={modalStatus}/> 

            {modalStatus && <Spinner /> }

            <RightSide 
                autoComplete="off"
                onSubmit={(e:FormEvent<HTMLFormElement>)=>sendForm(e)}
            >
                <p>¿En que podemos ayudarte?</p>
                <div className="name-container">
                    <input 
                        autoFocus
                        aria-label="Nombre"
                        className="input-elements"
                        id="firstname"
                        minLength={3}
                        maxLength={15}
                        name="firstname"
                        pattern="[A-Za-z]+"
                        placeholder="Nombre"
                        required
                        title="Nombre"
                        type="text"
                        value = {dataForm.firstName}
                        onChange={(e)=>setDataForm({...dataForm, firstName: e.target.value})}
                    />

                    <input 
                        aria-label="Apellido"
                        className="input-elements"
                        id="lastname"
                        minLength={2}
                        maxLength={20}
                        name="lastname"
                        pattern="[A-Za-z]+"
                        placeholder="Apellido"
                        required
                        title="Apellido"
                        type="text"
                        value={dataForm.lastName}
                        onChange={(e)=>setDataForm({...dataForm, lastName: e.target.value})}
                    />
                </div>

                <input 
                    aria-label="telefono"
                    className="input-elements"
                    id="telephone"
                    minLength={6}
                    maxLength={30}
                    name="telephone"
                    pattern="[0-9]+"
                    placeholder="Telefono"
                    required
                    title="Teléfono"
                    type="tel"
                    value={dataForm.telephone}
                    onChange={(e)=>setDataForm({...dataForm, telephone: e.target.value})}
                />

                <input 
                    aria-label="email"
                    className="input-elements"
                    id="email"
                    maxLength={30}
                    name="email"
                    pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                    placeholder="Email"
                    title="Email"
                    type="email"
                    required
                    value={dataForm.email}
                    onChange={(e)=>setDataForm({...dataForm, email: e.target.value})}
                />

                <textarea 
                    aria-label="mensaje"
                    className="textarea-element"
                    id="message"
                    maxLength={100}
                    name="message"
                    placeholder="Mensaje"
                    required
                    title="Mensaje"
                    value={dataForm.message}
                    onChange={(e)=>setDataForm({...dataForm, message: e.target.value})}
                />

                <button 
                    className="button-element"
                    type="submit" 
                >
                    ENVIAR
                </button>
            </RightSide>

            <LeftSide>
                <p>Redes Sociales</p>
                <Icons>
                    <a 
                        aria-label="instagram"
                        href="https://www.instagram.com/armoniza.tu.alma/?igshid=MzRIODBiNWFIZA" 
                        rel="noreferrer"
                        role="button"
                        target="_blank" 
                        title="Instagram"
                    >
                        <SvgInstagram />
                    </a>
                    <a 
                        aria-label="facebook"
                        href="https://www.facebook.com/profile.php?id=100086479892452" 
                        rel="noreferrer"
                        role="button"
                        target="_blank" 
                        title="Facebook"
                    >
                        <SvgFacebook />
                    </a>
                    <a 
                        aria-label="whatsapp"
                        href="http://wa.me/543492331704" 
                        rel="noreferrer"
                        role="button"
                        target="_blank" 
                        title="Whatsapp"
                    >
                        <SvgWhatsapp />
                    </a>
                </Icons>

                <p>Contactanos</p>
                <Icons>
                    <a 
                        aria-label="numero de telefono"
                        href="tel:543492331704"
                        role="button"
                        target="_self"
                        title="Número de Telefono"
                    >
                        <SvgTelephone />
                    </a>
                    <a 
                        aria-label="email"
                        href="mailto:contacto.armonizatualma@gmail.com" 
                        rel="noreferrer"
                        role="button"
                        target="_blank" 
                        title="Email"
                    >
                        <SvgEmail />
                    </a>
                </Icons>

                <p>Otras Informaciones</p>
                <Icons>
                    <a 
                        aria-label="CVU para Transferencias"
                        href="#"
                        rel="noreferrer"
                        role="button"
                        title="CVU para Transferencias"
                        onClick={()=>setShowInfoState({...showInfoState, infoPayments:!showInfoState.infoPayments})}
                    >
                        <SvgWireTransfer />
                    </a>
                    <a 
                        aria-label="delivery"
                        href="#"
                        rel="noreferrer"
                        role="button"
                        title="Delivery"
                        onClick={()=>setShowInfoState({...showInfoState, infoDelivery:!showInfoState.infoDelivery})}
                    >
                        <SvgDelivery />
                    </a>
                </Icons>
                <div className={showInfoState.infoPayments ? "info-payments-on" : "info-payments-off"}>
                    <pre>CVU: 0000003100012619434280</pre>
                    <pre>Alias: antoofioordelli</pre>
                </div>
                <div className={showInfoState.infoDelivery ? "info-delivery-on" : "info-delivery-off"}>
                    <pre>Delivery: Lunes a Viernes, </pre>
                    <pre>de 8:30 a 11:30 y de 18:00 a 20:00</pre>
                </div>

            </LeftSide>
        </Section>
    )
}