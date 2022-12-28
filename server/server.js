import express from 'express'
import mongoose from 'mongoose'
import authRouter from "./app/routes/authRouter.js";
import cookieParser from 'cookie-parser';
import cors from "cors"

import * as http from "http";
const hostname = '127.0.0.1';
const port = 8000;

const db = "mongodb+srv://admin:admin@cluster0.8hltnfo.mongodb.net/?retryWrites=true&w=majority"
const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:8081"
}));
app.use('/auth', authRouter)

async function startApp() {
    try {
        await mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    } catch (e) {
        console.log(e)
    }
}

startApp()
