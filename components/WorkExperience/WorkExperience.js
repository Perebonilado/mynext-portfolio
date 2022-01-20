import { WorkExperinceData } from "../../data/WorkExperience/WorkExperience";
import WorkExperienceStyles from './styles/WorkExperienceStyles.module.css'

const WorkExperience = (props) => {
    return ( 
    <ul className={`${WorkExperienceStyles['main-container']}`}>
        {WorkExperinceData.map((data)=>{
            const { companyName, role, description, date, id } = data
            return (
                <li key={id} className={`${WorkExperienceStyles['list-container']}`}>
                    <div className={`${WorkExperienceStyles['triangle']}`}></div>
                    <h3>{companyName}</h3>
                    <p className={`${WorkExperienceStyles['title']}`}> <span className={`${WorkExperienceStyles['pri-clr']}`}>{role}</span> {date}</p>
    
                        {description.map((info)=>{
                            return (
                                <p key={info}>{info}</p>
                            )
                        })}
                    
                </li>
            )
        })}
    </ul>
     );
}
 
export default WorkExperience;