import express from "express"
import router from "./router"
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', router)

app.listen(3000, () => {
    console.log('listen on port 3000')
})

export default app