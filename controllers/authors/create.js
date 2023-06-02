
import Author from "../../models/Author.js";   
export default async (req, res) => {
    try {
        let data = req.body; // cliente envia un objeto en la propiedad body del objeto req(requerimiento)
        let all = await  Author.create(data) //objeto data debe contener todos los datos necesarios para crear algo
        if (all) {
            return res.status(201).json({ response: one, message: 'Created' });
        } else {
            return res.status(400).json({ response: null, message: 'Not created' });
        }
    } catch (error) {
        return res.status(500).json({ response: null, message: 'Not created' });
    }
}