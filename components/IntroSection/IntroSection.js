import IntroStyles from "./styles/IntroSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <p className={`${IntroStyles["hello-text"]}`}>Hello, my name is </p>

        <h3 className={`${IntroStyles["first-head"]}`}>Eradiri Richard</h3>

        <h4>React Js/Next Js Developer</h4>

        <p>
          I am a frontend developer focused on building excellent
          <span className={`${IntroStyles["yellow"]}`}>
            {" "}
            user interfaces
          </span>{" "}
          and delivering worldclass{" "}
          <span className={`${IntroStyles["yellow"]}`}>
            user experiences
          </span>{" "}
          using the latest technologies. I love working in environments that
          allow me to grow and contribute positively.
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
