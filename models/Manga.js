import { Schema, model, Types } from 'mongoose';

let collection = 'mangas';

let schema = new Schema({
    author_id: { type: Types.ObjectId, ref: 'authors', required: true },
    company_id: { type: Types.ObjectId, ref: 'companies' },
    title: { type: String, require: true },
    cover_photo: { type: String, require: true },
    description: { type: String, require: true },
    category_id: { type: Types.ObjectId, ref: 'categories', required: true }
}, {
    timestamps: true
})

let Manga = model(collection, schema);

export default Manga;