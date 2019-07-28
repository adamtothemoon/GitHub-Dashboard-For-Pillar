const healthCheck = require('./Controller/health-check');
const topReposByContributors = require('./Controller/top-repos-by-contributors-controller');
const topReposByForks = require('./Controller/top-repos-by-forks-controller');
const topReposByStars = require('./Controller/top-repos-by-stars-controller');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const healthCheckResponse = healthCheck.get()
    res.send(healthCheckResponse)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))