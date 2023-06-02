import express from "express";
import "dotenv/config.js";
import './config/database.js';
import indexRouter from "./router/index.js";
import cors from 'cors';
import morgan from 'morgan';

const server  = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log("ready on: " + PORT);

//Middlewares
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cors());
server.use(morgan('dev'));

//router+server
server.use('/api', indexRouter);
server.listen(PORT, ready);
console.log(process.env.NODE_ENV);
