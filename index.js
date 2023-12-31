const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

app.get('/api', (req, res) => {
const{slack_name, track} = req.query
const date = new Date()
    res.json({
        slack_name,
        current_day: days[date.getDay()],
        utc_time: date.toISOString().split('.')[0] + 'Z',
        track, github_file_url: 'https://github.com/Dadakyle/HNG-Project_001/blob/main/index.js',
        github_repo_url: 'https://github.com/Dadakyle/HNG-Project_001',
        status: 200
    })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})