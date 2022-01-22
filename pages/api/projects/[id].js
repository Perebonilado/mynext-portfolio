import data  from "../../../ProjectsData/data";

export default function handler (req,res){
    const { id } = req.query

    const filtered = data.filter((project)=>project.id == id)

    if(filtered.length > 0) {
        res.status(200)
        res.json(filtered[0])
    }
    else {
        res.status(404).json({message: `Project with id of ${id} not found`})
    }
}