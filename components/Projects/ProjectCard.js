import ProjectCardStyle from './styles/ProjectCardStyle.module.css'
import Link from 'next/link';
import { motion, Variants } from 'framer-motion'
import { useRouter } from 'next/router'



const ProjectCard = ({ imageSrc, imageAlt, imageTitle, technologies, id}) => {
    
    return ( 
        <Link href={{pathname: '/project/[id]', query:{id: id}}} passHref>
        <motion.div
        initial={{ translateY: 55}}
        whileInView={{translateY:0, transition: {duration: .3}}}
        viewport={{ once: true }}

     
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
