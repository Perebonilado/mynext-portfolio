import MailMeStyle from './styles/MailMeStyle.module.css'

const MailMe = () => {
    return (
        <div className={`${MailMeStyle['mail-me-container']}`}>
            <a href='mailto:perebonilado@gmail.com' className={`${MailMeStyle['mail-me-triangleBx']}`}>
            <i className="fas fa-envelope"></i>
            </a>
        </div>
    )
}

export default MailMe
