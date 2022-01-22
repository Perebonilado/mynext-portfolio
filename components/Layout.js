import Navbar from "./Navbar/Navbar";
import LayoutStyles from './LayoutStyles.module.css'
import Footer from "./Footer/Footer";
import MailMe from './MailMe/MailMe'

const Layout = ({children}) => {
    return ( 
    <>
    <Navbar />
    <MailMe />
    <main className={`${LayoutStyles['layout']}`}>  
    {children}
    </main>
    <Footer />
    </> 
    );
}
 
export default Layout;