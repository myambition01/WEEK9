const express = require("express");
const userRoutes = require("./routers/userRoute");
// const dotenv = require("dotenv");
const db = require("./config/db")

const app = express()
const port= process.env.port || 8000

db()
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcom to my Api')
})


app.use('/api/user', userRoutes);







app.listen(port, () => {
    console.log(`Example app listening at http://127.0.0.1:${port}`)
});