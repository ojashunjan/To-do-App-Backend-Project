//URL -> http://localhost:8383
//IP -> 127.0.0.1:8383

const express = require('express')
const app = express()

const PORT = 8383

let data = ["ojas"]


app.use(express.json())

//HTTP VERBS AND ROUTES
app.get('/', (req, res)=> {

    res.send(`
        <h1>DATA:</h1>
        <body 
        style = "background:pink;
        color: blue;"
        
            <p>${JSON.stringify
                (data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body> 
        `)
})

app.get('/dashboard', (req, res)=> {

    res.send(`
        <body>
        <h1>Dashboard</h1>
        <a href="/">Home</a>


        </body>
        `)
})

app.get('/api/data', (req, res)=> {

    console.log("For data")
    res.send(data)
})

app.post('/api/data', (req, res) => {

    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)

})

app.delete('/api/data', (req, res) => {

    data.pop()
    console.log("deleted")
    res.sendStatus(203)
})


app.listen(PORT, () => console.log(`Server has started on: ${PORT} `))