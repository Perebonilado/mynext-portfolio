import SideMenuStyle from './styles/SideMenu.module.css'
import { useState } from 'react'
import { useAppContext } from '../../context/state'
import Link from 'next/link'

const SideMenu = () => {

    const {
        setIsMenuClosed, 
        setIsMenuOpen, 
        isMenuOpen, 
        isMenuClosed} = useAppContext()

    return ( 
        
    <div className={`
    ${SideMenuStyle['sideMenuContainer']} 
    ${isMenuClosed && SideMenuStyle['closed']} 
    ${isMenuOpen && SideMenuStyle['open']}`}>
        <ul onClick={()=>{
                setIsMenuOpen((prevState)=>prevState = false)
                setIsMenuClosed((prevState)=>prevState = true)
        }}>
            <li className={
                `${isMenuClosed && SideMenuStyle['close-all']}
                ${isMenuOpen && SideMenuStyle['first-open']}`
                }><Link href="/#about">About </Link><i className="fal fa-user"></i>
            </li>

            <li className={
                `${isMenuClosed && SideMenuStyle['close-all']}
                ${isMenuOpen && SideMenuStyle['second-open']}`
                }><Link href="/#experience">Experience</Link><i className="fal fa-briefcase"></i>
            </li>

            <li className={
                `${isMenuClosed && SideMenuStyle['close-all']}
                ${isMenuOpen && SideMenuStyle['third-open']}`
                }><Link href="/#projects">Projects</Link><i className="fal fa-construction"></i>
            </li>
        </ul>
    </div>
    
     );
}
 
export default SideMenu;