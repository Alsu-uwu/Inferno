import "./Header.css"
import heartsvg from "/header/heart.svg"
import cartsvg from "/header/cart.svg"
import searchsvg from "/header/search.svg"
import {NavLink } from "react-router-dom"
import Logo from "../Logo/Logo"
import { useState } from "react"


import ReactModal from "react-modal"


export default function Header(){
    
    const [ismodal, setModal] = useState(false)

    const openModal = () =>{
        setModal(true)
        document.boby.style.overflow = 'hidden'
    }

    const closeModal = () =>{
        setModal(false)
        document.body.style.overflow = 'auto'
    }
    return(
        <>
        <header>
            <div className="header-items container">
            <Logo />
            <nav>
                <NavLink className="link" to="/">ГЛАВНАЯ</NavLink>
                <NavLink className="link" to="/catalog">КАТАЛОГ</NavLink>
                <NavLink className="link" to="/">АКЦИИ</NavLink>
                <NavLink className="link" to="/">КОНТАКТЫ</NavLink>
            </nav>

            <div className="nav-icons">
              <button><img src={searchsvg} alt="" /></button>
                <button><img src={heartsvg} alt="" /></button>
                <button onClick={openModal}><img src={cartsvg} alt="" /></button>
                
            </div>
            </div>
            
        </header>
        </>
    )
}