
import { Schema, model, Types } from 'mongoose';

let collection = 'categories';

let schema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    hover: { type: String, required: true },
    description: { type: String, required: true },
    cover_photo: { type: String, required: true },
    character_photo: { type: String, required: true },
    admin_id: { type: Types.ObjectId, ref: 'users', required: true } //objectId es tipo de dato  especial de nogo que ese un string con propiedades extensivas- encriptadas de objeto(tiene la informacion codificada de ese objeto) permite relacionar entre datos de colecciones diferentes
}, {
    timestamps: true
});

let Category = model(collection, schema);

export default Category;