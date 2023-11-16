import express from 'express';
import usersRouter from './users/users.routes';
import journalsRouter from './journals/journals.routes';
import logger from '../middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from "dotenv";

import bodyParser from "body-parser";




const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




//Parse JSON bodies
app.use(express.json());
//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//enable all CORS request
//needs to be installed:
//npm install cors
app.use(cors());

//adding set of security middleware
//needs to be installed:
//npm install helmet
app.use(helmet());


dotenv.config({ path: "C:/Users/andre/OneDrive/Documents/23 24 school senior year/CST-391/Milestones/Milestone-03/.env" });

app.use('/', [usersRouter, journalsRouter]);

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});




if (process.env.NODE_ENV == 'development') {
    //add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}