import navStyles from './styles/Navbar.module.css'
import SideMenu from '../SideMenu/SideMenu';
import { useAppContext } from '../../context/state';

const Navbar = () => {
    
    const {
        setIsMenuClosed, 
        setIsMenuOpen, 
        isMenuOpen, 
        isMenuClosed
    } = useAppContext()
    
    const handleClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen((prevState)=>{
                return prevState = false
            })
            setIsMenuClosed((prevState)=>{
                return prevState = true
            })
        }
        else{
            setIsMenuOpen((prevState)=>{
                return prevState = true
            })
            setIsMenuClosed((prevState)=>{
                return prevState = false
            })
        }


    }

    return ( 
        <>
    <nav className={navStyles.nav}>
<ul>
    <li><a href="">About <i className="fal fa-user"></i></a></li>
    <li><a href="">Experience <i className="fal fa-briefcase"></i></a></li>
    <li><a href="">Projects <i className="fal fa-construction"></i></a></li>
    <li><a href="">Contact <i className="far fa-address-book"></i></a></li>
</ul>

<div className={navStyles.hamBx} onClick={handleClick}>
    <div className={
        `${!isMenuOpen && navStyles['ham1']}
        ${isMenuOpen && navStyles['ham1open']}
        ${navStyles['hamitem']}`
    }></div>
    <div className={
        `${!isMenuOpen && navStyles['ham2']}
        ${isMenuOpen && navStyles['ham2open']}
        ${navStyles['hamitem']}`
    }></div>
    <div className={
        `${!isMenuOpen && navStyles['ham3']}
        ${isMenuOpen && navStyles['ham3open']}
        ${navStyles['hamitem']}`
    }></div>
</div>
    </nav>
    <SideMenu /> 
    </>
     );
}
 
export default Navbar;