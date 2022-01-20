import Link from "next/link";
import { server } from '../../../config'
import { motion } from 'framer-motion'
import ProjectStyles from '../../../styles/ProjectStyles.module.css'

const Project = ({project}) => {

    const { name, tech, description, url } = project

    return ( 
    <motion.div
    
    className={`${ProjectStyles['container']}`}
    
    initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}
    
    > 
        <div>
        <Link href='/'>Retun Home</Link>
        <img src={url} alt={name} />
        <h1>{name}</h1>
        <p className={`${ProjectStyles['tech']}`}>This project was built with: {tech}</p>
        <a href="" className={`${ProjectStyles['project-link']}`}>Github</a>
        <a href="">View Project</a>
        </div>


        <div>
        <h2>Why I Built This</h2>
        <p className={`${ProjectStyles['description']}`}>{description}</p>
        </div>

    </motion.div>
     );
}

export default Project;

export async function getStaticProps (context) {
    const res = await fetch(`${server}/api/projects/${context.params.id}`)
    const project = await res.json()

    console.log(project)

    return {
        props: {project}
    }
}

export async function getStaticPaths () {
    const res = await fetch(`${server}/api/projects`)
    const projects = await res.json()

    const id = projects.map((project)=>{
        return {params: {id: project.id.toString()}}
    })

    return {
        paths: [...id],
        fallback: true
    };

}
