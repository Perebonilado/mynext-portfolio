import ProjectCardStyle from './styles/ProjectCardStyle.module.css'
import Link from 'next/link';
import { motion, Variants } from 'framer-motion'



const ProjectCard = ({ imageSrc, imageAlt, imageTitle, technologies, id}) => {
    return ( 
        <Link href="/project/[id]" as={`project/${id}`} passHref>
        <motion.div
        initial={{ opacity: 0, scale: .7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}

     
        whileTap={{ scale: 0.8 }}
         className={`${ProjectCardStyle['card-container']}`}>
            
            <div className={`${ProjectCardStyle['card-image-container']}`}>
                <img src={imageSrc} alt={imageAlt} />
            </div>

            <h4>{imageTitle}</h4>

            <p>Built with: {technologies}</p>

        </motion.div>
        </Link>
     );
}
 
export default ProjectCard;
