import Navbar from "./Navbar/Navbar";
import MailMe from "./MailMe/MailMe";
import LayoutStyles from './LayoutStyles.module.css'

const Layout = ({children}) => {
    return ( 
    <>
    <Navbar />
    <MailMe />
    <main className={`${LayoutStyles['layout']}`}>  
    {children}
    </main>
    </> 
    );
}
 
export default Layout;