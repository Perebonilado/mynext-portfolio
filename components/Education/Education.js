import { EducationData } from "../../data/WorkExperience/EducationData/EducationData";
import EducationStyles from './styles/EducationStyles.module.css'

const Education = (props) => {
    return ( 
    <ul className={`${EducationStyles['main-container']}`}>

        {EducationData.map((data)=>{
            
            const {schoolName, degree, date } = data

            return (
                <li key={props.index} className={`${EducationStyles['list-container']}`}>
                <div className={`${EducationStyles['triangle']}`}></div>
                    <h3>{schoolName}</h3>
                    <p>{degree}</p>
                    <p>{date}</p>
                </li>
                )
        })}    

    </ul> );
}
 
export default Education;