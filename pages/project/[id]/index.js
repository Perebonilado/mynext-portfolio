import Link from "next/link";
import { server } from '../../../config'
import { motion } from 'framer-motion'

const Project = ({project}) => {

    const { name, tech, description } = project

    return ( 
    <motion.div
    
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
        <h1>{name}</h1>
        <p>{tech}</p>
        <p>{description}</p>
        <Link href='/'>Back</Link>
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
