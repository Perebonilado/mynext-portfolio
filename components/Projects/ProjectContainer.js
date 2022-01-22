import ProjectContainerStyle from './styles/ProjectContainerStyle.module.css'
import ProjectCard from './ProjectCard';

const ProjectContainer = ({projects}) => {
    return ( 
        <>
        <h2 className={`${ProjectContainerStyle['project-container-heading']}`} id='projects'>Projects</h2>
        <section className={`${ProjectContainerStyle['project-container']}`}>
        {projects.map((project)=>{          
          return (<ProjectCard key={project.id} id={project.id} imageTitle={project.name} imageSrc={project.url} imageAlt={project.name} technologies={project.tech} />)
        })}
        </section>
        </>
     );
}
 
export default ProjectContainer;