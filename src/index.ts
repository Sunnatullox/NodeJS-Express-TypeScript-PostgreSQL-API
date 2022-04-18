import express from 'express';
const app = express();

import indexRouter from './routes/index';


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use(indexRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`Server on Port ${PORT}`)
})