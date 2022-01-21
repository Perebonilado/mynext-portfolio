import Navbar from "./Navbar/Navbar";
import LayoutStyles from './LayoutStyles.module.css'
import Footer from "./Footer/Footer";

const Layout = ({children}) => {
    return ( 
    <>
    <Navbar />
    <main className={`${LayoutStyles['layout']}`}>  
    {children}
    </main>
    <Footer />
    </> 
    );
}
 
export default Layout;