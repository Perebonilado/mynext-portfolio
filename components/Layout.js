import Navbar from "./Navbar/Navbar";
import LayoutStyles from './LayoutStyles.module.css'

const Layout = ({children}) => {
    return ( 
    <>
    <Navbar />
    <main className={`${LayoutStyles['layout']}`}>  
    {children}
    </main>
    </> 
    );
}
 
export default Layout;