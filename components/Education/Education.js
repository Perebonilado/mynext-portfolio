import { EducationData } from "../../data/WorkExperience/EducationData/EducationData";
import EducationStyles from './styles/EducationStyles.module.css'
import { motion } from "framer-motion";

const Education = (props) => {
    return ( 
    <ul className={`${EducationStyles['main-container']}`}>

        {EducationData.map((data)=>{
            
            const {schoolName, degree, date } = data

            return (
                <motion.li
                
                initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}

                 key={date} className={`${EducationStyles['list-container']}`}>
                <div className={`${EducationStyles['triangle']}`}></div>
                    <h3>{schoolName}</h3>
                    <p>{degree}</p>
                    <p>{date}</p>
                </motion.li>
                )
        })}    

    </ul> );
}
 
export default Education;