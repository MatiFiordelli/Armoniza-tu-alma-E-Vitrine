import styled from 'styled-components'
import Header from '../Header'
import { PropsChildren } from '../../Types'

const Main = styled.main`
    overflow-x: hidden;
    overflow-y: auto;
    height:100vh;
`

export default function Layout({children}:PropsChildren){
    return(
        <>
            <Header />
            <Main>
                {children}
            </Main>
        </>
    )
}