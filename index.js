const express = require("express");
app = express();
const port = 8000;
const userRoutes = require('./routers/userRoute')
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Welcom to my Api')
})


app.use('/api/user', userRoutes)







app.listen(port, () => {
    console.log(`Example app listening at http://127.0.0.1:${port}`)
})