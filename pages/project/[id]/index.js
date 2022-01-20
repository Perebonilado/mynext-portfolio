import Link from "next/link";
import { server } from '../../../config'

const Project = ({project}) => {

    const { name, tech, description } = project

    return ( 
    <>
        <h1>{name}</h1>
        <p>{tech}</p>
        <p>{description}</p>
        <Link href='/'>Back</Link>
    </>
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
