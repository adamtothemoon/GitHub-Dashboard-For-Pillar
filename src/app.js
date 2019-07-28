const healthCheck = require('./Controller/health-check');
const topReposByContributors = require('./Controller/top-repos-by-contributors-controller');
const topReposByForks = require('./Controller/top-repos-by-forks-controller');
const topReposByStars = require('./Controller/top-repos-by-stars-controller');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (res) => {
    const repsonse = healthCheck.get()
    res.send(repsonse)
})

app.get('/get-repos-by-contributor', (req, res) => {
    ensureProperRequest(req, res);
    const repsonse = topReposByContributors.get(req)
    res.send(repsonse)
})

app.get('/get-repos-by-forks', (req, res) => {
    ensureProperRequest(req, res);
    const repsonse = topReposByForks.get(req)
    res.send(repsonse)
})

app.get('/get-repos-by-stars', (req, res) => {
    ensureProperRequest(req, res);
    const repsonse = topReposByStars.get(req)
    res.send(repsonse)
})

app.listen(port, () => console.log(`Server Running On Port ${port}!`))

function ensureProperRequest(req,res) {
    //The front end should never send undefined or null orgname since it pulls org name from
    //the input box which even in the empty case returns "". However this ensure that if we pull from
    //other sources in the future we will be covered on those common edge cases
    if(!req.orgName || req.orgName === "" || req.orgName === null) {
        res.send(new HttpResponse(400, errorMessage("Must Request Valid Org Name")))
    }
}