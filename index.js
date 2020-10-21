const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')
const { response } = require('express')
const PORT = process.env.PORT||3001

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.post('/api/form', (req, res)=>{
    res.send(req.body)
})

app.post('/api/form', (req, res) => {
    let data = req.body
    smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {user: 'sergethiti@gmail.com', pass:'blackecho7'}
    })

    let mailOption = {
        fromm: data.email,
        to: 'sergethiti@gmail.com',
        subject: `message from ${data.fullname}`,
        html: `
          <h3>Informations</h3>
                <ul>
                <li> Full Name: ${data.fullname}</li>
                <li> Email: ${data.email}</li>
                
                </ul> 
          <h3>Message</h3>
          <p>${data.message}</p>
        `
    }

    smtpTransport.sendMail(mailOption, (error, response) => {
        if(error){
            res.send(error)
        }
        else{
            res.send('SUCESS')
        }
    })

    smtpTransport.close()
})

app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`)
})


// "start": "node index.js",
// "server": "nodemon index.js",
// "client": "npm start --prefix client",
// "dev": "concurrently \"npm run server\" \"npm run client\""
//"proxy": "http://localhost:3001",