import express from 'express';
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('<h1>Learning Express Node.JS!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})