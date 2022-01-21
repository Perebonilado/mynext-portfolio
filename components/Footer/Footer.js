import FooterStyles from './styles/FooterStyles.module.css'

const Footer = () => {
    return ( 
    <footer className={`${FooterStyles['container']}`}>
        <div>
            <a href='https://github.com/Perebonilado'><i className='fab fa-github'></i></a>
            <a href='https://twitter.com/mylohebron'><i className='fab fa-twitter'></i></a>
            <a href='https://www.linkedin.com/in/perebonilado-eradiri-25632314a'><i className='fab fa-linkedin-in'></i></a>
            <a href='https://instagram.com/mylohebron'><i className='fab fa-instagram'></i></a>
        </div>
        <p>Portfolio Built By <span>&copy; Eradiri Richard</span> using <span>Next js</span></p>
    </footer>
     );
}
 
export default Footer;