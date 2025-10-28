import express from 'express'
import cors from 'cors'
const PORT = 3000
const app = express()
app.get('/', (req, res) => {
    res.json({
        name: "marelign ier",
        dpt:"computer since"
    })
})
app.get('/about/:id', (req, res) => {
    const id = req.params.id
    res.send(`the is is ${id}`)
})
app.listen(PORT, () => {
        console.log(`server runo=ing on the port http://localhost:${PORT}`);
        
    })