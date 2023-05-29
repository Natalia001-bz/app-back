import { Schema, model, Types } from "mongoose";

const collection = 'authors'
const schema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: false},
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date, required: false},
    photo: { type: String, required: true },
    user_id: { type:Types.ObjectId, //objectId es tipo de dato  especial de nogo que ese un string con propiedades extensivas- encriptadas de objeto(tiene la informacion codificada de ese objeto) permite relacionar entre datos de colecciones diferentes
        ref:'users',   //nombre de la coleccion con la que se tiene que ref o relacionar 
        required: true },
        active: { type: Boolean, required: true}        
}, {
    timestamps: true
});
const Author = model(collection, schema);
export default Author