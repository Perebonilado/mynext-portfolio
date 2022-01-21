import SideMenuStyle from './styles/SideMenu.module.css'
import { useState } from 'react'
import { useAppContext } from '../../context/state'

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
        <ul>
            <li className={
                `${isMenuClosed && SideMenuStyle['close-all']}
                ${isMenuOpen && SideMenuStyle['first-open']}`
                }><a href="">About <i className="fal fa-user"></i></a>
            </li>

            <li className={
                `${isMenuClosed && SideMenuStyle['close-all']}
                ${isMenuOpen && SideMenuStyle['second-open']}`
                }><a href="">Experience <i className="fal fa-briefcase"></i></a>
            </li>

            <li className={
                `${isMenuClosed && SideMenuStyle['close-all']}
                ${isMenuOpen && SideMenuStyle['third-open']}`
                }><a href="">Projects <i className="fal fa-construction"></i></a>
            </li>
        </ul>
    </div>
    
     );
}
 
export default SideMenu;