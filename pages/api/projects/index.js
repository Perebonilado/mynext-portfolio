import data  from '../../../ProjectsData/data'

export default function handler (req, res){
    res.status(200)
    res.send(data)
}