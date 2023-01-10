import IntroStyles from "./styles/IntroSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "react-animated-text-content";

const IntroSection = () => {
  return (
    <motion.div
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
      className={`${IntroStyles["intro-section"]}`}
    >
      <section className={`${IntroStyles["intro-container"]}`}>
      <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="p"
          className="animated-paragraph hello-text"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          Hello, my name is
        </AnimatedText>
        {/* <p className={`${IntroStyles["hello-text"]}`}> </p> */}

        {/* <h3 className={`${IntroStyles["first-head"]}`}>Eradiri Richard</h3> */}
        <AnimatedText
          type="chars" // animate words or chars
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="diagonal"
          interval={0.06}
          duration={0.8}
          tag="h3"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          Eradiri Richard
        </AnimatedText>

        <h4>Software Developer | MERN Stack | Golang</h4>

        <p>
          I am a Software Developer focused on building excellent
          <span className={`${IntroStyles["yellow"]}`}>
            {" "}
            and performant web applications
          </span>{" "}
          while delivering worldclass{" "}
          <span className={`${IntroStyles["yellow"]}`}>
            user experiences
          </span>{" "}
          using the latest technologies. I love working in environments that
          allow me grow and contribute positively.
        </p>
      </section>

      <div>
        <img
          src="https://res.cloudinary.com/dtlhut3ew/image/upload/v1671181327/aafngfeanhksd4ah3pnb.jpg"
          alt="photo of me"
        />
      </div>
    </motion.div>
  );
};

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/dt0wfaxft/image/upload/v1642515708/IMG-3077_m7ynpe.jpg?w=${100}&q=${
    quality || 75
  }`;
};

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src={`https://res.cloudinary.com/dt0wfaxft/image/upload/v1642515708/IMG-3077_m7ynpe.jpg`}
      alt="Picture of Richard"
      width={600}
      height={600}
    />
  );
};

export default IntroSection;
