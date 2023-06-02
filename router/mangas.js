import { Router } from "express";
import read from '../controllers/mangas/read.js';
import create from '../controllers/mangas/create.js';

const mangasRouter = Router();

mangasRouter.get('/', read);
mangasRouter.post('/', create);


export default mangasRouter;
