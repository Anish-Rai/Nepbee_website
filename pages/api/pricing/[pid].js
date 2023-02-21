import path from 'path';
import { promises as fs } from 'fs';
export default async function handler(req,res){
    const jsonDirectory = path.join(process.cwd(), 'data');

    const fileContents = await fs.readFile(jsonDirectory + '/jsondata.json', 'utf8');
    const response = JSON.parse(fileContents)
    const slug = req.query.pid
    const data = response.pricingList.find(element => element.slug==slug)
    // const findPrice = response.find(element => element.slug===slug)
    res.status(200).json({ data: data})
    
}