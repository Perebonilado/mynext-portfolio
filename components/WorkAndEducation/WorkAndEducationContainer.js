import WorkExperience from "../WorkExperience/WorkExperience";
import Education from '../Education/Education'
import WorkAndEduStyles from './styles/WorkAndEduStyles.module.css'

const WorkAndEducationContainer = () => {
    return ( 
    <section className={`${WorkAndEduStyles['container']}`}>

        <div>
        <h2 className={`${WorkAndEduStyles['heading']}`}>WorkExperience</h2>
            <WorkExperience />
        </div>

        <div>
        <h2 className={`${WorkAndEduStyles['heading']}`}>Education</h2>
            <Education />
        </div>

    </section>
     );
}
 
export default WorkAndEducationContainer;