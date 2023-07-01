import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home'
import Contact from  '../../Pages/Contact'
import AboutUs from  '../../Pages/AboutUs'
import ItemPage from '../../Pages/ItemPage'

export default function Router(){

    return(
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/contacto" element = {<Contact />} />
            <Route path = "/quienes-somos" element = {<AboutUs />} />
            <Route path = "/item/:itemIndexParam" element = {<ItemPage />} />
            <Route path = "*" element = {<Home />} />
        </Routes>
    )
}