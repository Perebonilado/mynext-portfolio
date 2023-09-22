import { WorkExperinceData } from "../../data/WorkExperience/WorkExperience";
import WorkExperienceStyles from "./styles/WorkExperienceStyles.module.css";
import { motion } from "framer-motion";

const WorkExperience = (props) => {
  return (
    <ul className={`${WorkExperienceStyles["main-container"]}`} id="experience">
      {WorkExperinceData.map((data) => {
        const { companyName, role, description, date, id } = data;
        return (
          <motion.li
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            key={id}
            className={`${WorkExperienceStyles["list-container"]}`}
          >
            <div className={`${WorkExperienceStyles["triangle"]}`}></div>
            <h3>{companyName}</h3>
            <p className={`${WorkExperienceStyles["title"]}`}>
              {" "}
              <span className={`${WorkExperienceStyles["pri-clr"]}`}>
                {role}
              </span>{" "}
              {date}
            </p>

            {description.map((info, idx) => {
              return (
                <p key={info}>
                  {idx + 1}. 
                  {" "+info}
                </p>
              );
            })}
          </motion.li>
        );
      })}
    </ul>
  );
};

export default WorkExperience;
