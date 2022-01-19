import AboutMeStyles from './styles/AboutMeStyles.module.css'

const AboutMe = () => {
    return ( 
        <main className={`${AboutMeStyles['about-me-container']}`}>
            <div>
            <h3>About Me</h3>
            <p className={`${AboutMeStyles['about-me-text']}`}>
                My name is Eradiri Richard, and I am absolutely in love with <span className={`${AboutMeStyles['sec-clr']}`}>coding</span> and making <span className={`${AboutMeStyles['sec-clr']}`}>music</span>. 
                I started coding in high school when I first had exposure to <span className={`${AboutMeStyles['sec-clr']}`}>HTML</span> and <span className={`${AboutMeStyles['sec-clr']}`}>CSS</span>.
                I built a website for my school as a project, and it was from then I knew I had 
                a soft spot for coding and building web applications. However, I got into Uni and took a break from coding as I 
                found a new love, music! <br />
                I made music for a while and I still do, I recently released a project which peaked at number one on the 
                Itunes Nigeria charts. Although, I rekindled my love for coding in 2021. I dedicated my time to re-learning the latest
                technologies such as <span className={`${AboutMeStyles['sec-clr']}`}>JavaScript</span>, <span className={`${AboutMeStyles['sec-clr']}`}>React</span> and <span className={`${AboutMeStyles['sec-clr']}`}>Next js</span>. I have not stopped coding ever since. I hope
                to contribute to tech by aiding in building revolutionary technology that changes lives!
            </p>
            </div>

            <div>
                <h3>Skills</h3>
                <div className={`${AboutMeStyles['skills-box']}`}>
                <ul>
                    <li><i className='fas fa-wrench'></i>HTML</li>
                    <li><i className='fas fa-wrench'></i>CSS</li>
                    <li><i className='fas fa-wrench'></i>JavaScript</li>
                </ul>

                <ul>
                    <li><i className='fas fa-wrench'></i>Git</li>
                    <li><i className='fas fa-wrench'></i>React js</li>
                    <li><i className='fas fa-wrench'></i>Next js</li>
                </ul>
                </div>
            </div>
        </main>
     );
}
 
export default AboutMe;