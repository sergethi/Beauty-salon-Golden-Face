const express = require('express')
const bodyParser = require('body-parser')
 const nodemailer = require('nodemailer')
// const cors = require('cors')
// const { response } = require('express')
 const PORT = process.env.PORT||8080

 const app = express()

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:true}))
// app.use(cors())

app.get('/', (req, res)=>{
    res.send("hello world!!! whhuophdg")
})
// app.post('/api/form', (req, res)=>{
//     //console.log(req.body)
//     res.send(req.body)
// })

app.post('/api/form', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {user: 'sergethiti@gmail.com', pass:'mknkbcznruutdbmu'}
    })

    let mailOption = {
        from: data.email,
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

    smtpTransport.sendMail(mailOption, (error, info) => {
        if(error){
            console.log(error)
            res.send(error)
        }
        else{
            console.log('email sent:' + info.response)
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