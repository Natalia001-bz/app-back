import { Router } from "express";
import read from "../controllers/users/read.js";
import create from '../controllers/users/create.js';

const usersRouter = Router();

usersRouter.get('/', read);
usersRouter.post('/', create);

export default usersRouter;