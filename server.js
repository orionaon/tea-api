const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'China',
        'waterTemp': 180,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'earthy'
    },
    'matcha': {
        'type': 'green',
        'origin': 'China',
        'waterTemp': 180,
        'steepTimeSeconds': 90,
        'caffinated': true,
        'flavor': 'grassy'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'unknown',
        'steepTimeSeconds': 'unknown',
        'caffinated': false,
        'flavor': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]) {
        response.json(tea[teaName])
    } else {
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})