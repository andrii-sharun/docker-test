import express from 'express'

const port = process.env.PORT || 3001

const app = express()

app.get('/', (_, res) => {
    res.send('Hello from Docker!')
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})