import ProjectCardStyle from './styles/ProjectCardStyle.module.css'
import Link from 'next/link';

const ProjectCard = ({ imageSrc, imageAlt, imageTitle, technologies, id}) => {
    return ( 
        <Link href="/project/[id]" as={`project/${id}`}>
        <div className={`${ProjectCardStyle['card-container']}`}>
            
            <div className={`${ProjectCardStyle['card-image-container']}`}>
                <img src={imageSrc} alt={imageAlt} />
            </div>

            <h4>{imageTitle}</h4>

            <p>Built with: {technologies}</p>

        </div>
        </Link>
     );
}
 
export default ProjectCard;
