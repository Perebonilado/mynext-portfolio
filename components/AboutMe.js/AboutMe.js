import AboutMeStyles from "./styles/AboutMeStyles.module.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className={`${AboutMeStyles["about-me-container"]}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 style={{ marginBottom: "1rem" }} id="about">
          About Me
        </h2>
        <p className={`${AboutMeStyles["about-me-text"]}`}>
          My name is Eradiri Richard, and I am absolutely in love with{" "}
          <span className={`${AboutMeStyles["sec-clr"]}`}>
            building software
          </span>
          . I started coding in high school when I first had exposure to{" "}
          <span className={`${AboutMeStyles["sec-clr"]}`}>HTML</span> and{" "}
          <span className={`${AboutMeStyles["sec-clr"]}`}>CSS</span>. I built a
          website for my school as a project, and it was from then I knew I had
          a soft spot for coding and building web applications. So, I dedicated
          my time to learning the latest technologies such as{" "}
          <span className={`${AboutMeStyles["sec-clr"]}`}>JavaScript</span>,{" "}
          <span className={`${AboutMeStyles["sec-clr"]}`}>React</span> and{" "}
          <span className={`${AboutMeStyles["sec-clr"]}`}>Next js</span>. I spend
          every single day building and learning and I hope to keep contributing
          to the tech industry by engineering revolutionary technologies that
          change lives!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Skills</h2>
        <div className={`${AboutMeStyles["skills-box"]}`}>
          <ul>
            <li>
              <i className="fas fa-wrench"></i>HTML
            </li>
            <li>
              <i className="fas fa-wrench"></i>CSS
            </li>
            <li>
              <i className="fas fa-wrench"></i>JavaScript
            </li>
          </ul>

          <ul>
            <li>
              <i className="fas fa-wrench"></i>Git
            </li>
            <li>
              <i className="fas fa-wrench"></i>React js
            </li>
            <li>
              <i className="fas fa-wrench"></i>Next js
            </li>
          </ul>

          <ul>
            <li>
              <i className="fas fa-wrench"></i>Node js
            </li>
            <li>
              <i className="fas fa-wrench"></i>Express
            </li>
            <li>
              <i className="fas fa-wrench"></i>NoSQL(Mongo db)
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default AboutMe;
