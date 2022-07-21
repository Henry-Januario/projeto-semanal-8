import express from "express";
import controller from "./src/controllers/controller.js";
import bancoDados from "./src/database/database.js";

const app = express()
const port = 3001

app.use(express.json())
controller(app, bancoDados)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})  

