import express from 'express'
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors());
app.use(express());

app.get('/', (req, res) =>{
    res.send('<h1>Hello Backend</h1>');
})

app.listen(port, () => {
    console.log("Listening on port 3000")
})