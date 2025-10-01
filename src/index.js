import express from "express"

const app = express()
const port = 3333

app.get("/", (request, response) => {
    response.json({ message: "Você acessou o backend!"})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}!`)
})