import ProjectCardStyle from './styles/ProjectCardStyle.module.css'
import Link from 'next/link';
import { motion } from 'framer-motion'

const ProjectCard = ({ imageSrc, imageAlt, imageTitle, technologies, id}) => {
    return ( 
        <Link href="/project/[id]" as={`project/${id}`}>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}

        whileHover={{
  position: 'relative',
  zIndex: 1,
  scale: [.8, 1.2, 1],
  rotate: [0, 10, -10, 0],
  transition: {
    duration: .5
  }
}}
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
