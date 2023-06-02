import { Router } from "express";
import create from '../controllers/authors/create.js';
import read from '../controllers/authors/read.js';


let authorsRouter = Router();

// Aca se configuran las rutas para CRUD de authors
//peticion de tipo get, post, delet,put


authorsRouter.get('/', read);
authorsRouter.post('/', create);


export default authorsRouter;
