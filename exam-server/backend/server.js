const http =  require('http') 
const students = require('./data')

const server = http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    const rollNo = req.url.slice(1)
    const result = students.find(ele => {
        return ele.roll_number === parseInt(rollNo)
    })
    if(result) {
        res.end(JSON.stringify(result))
    }else {
        res.end(JSON.stringify({}))
    }
})

server.listen(3030,() => {
   console.log('server is running')
})