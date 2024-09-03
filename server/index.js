import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import usersRouter from './src/routes/usersRouter.js';
import { logger } from './src/utils/logger.js';
import categoryRouter from './src/routes/categoryRouter.js';
import questionRouter from './src/routes/questionsRouter.js';
import quizRouter from './src/routes/quizRouter.js';

dotenv.config();

const app = express();

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

const PORT = process.env.API_PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})
);

app.use(cors(corsOptions));

app.use('/api', usersRouter);
app.use('/api', categoryRouter);
app.use('/api', questionRouter);
app.use('/api', quizRouter);

app.listen(PORT, () => {
    logger.info(`The server is running on port ${PORT}`);
});