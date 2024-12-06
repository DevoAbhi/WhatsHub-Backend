import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());

// Parse incoming request data
app.use(bodyParser.json());

export default app;
