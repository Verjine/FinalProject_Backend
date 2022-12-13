import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import config from './config.js';
config()


dotenv.config()


const app = express();
app.use(jsonparser)
const PORT  = p
const jsonparser = bodyParser.json()
app.get('/', (req,res) => {
    res.send('Hello')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
