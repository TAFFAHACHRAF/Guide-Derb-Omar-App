import express, { application } from 'express'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser"
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()
import Administrator from './routes/Administrator.js' 
import Guide from './routes/Guide.js'
import GuideConsultation from './routes/GuideConsultation.js'
import Importer from './routes/Importer.js'
import ImporterConsultation from './routes/ImporterConsultation.js'
import Person from './routes/Person.js'
import Seller from './routes/Seller.js'
import Training from './routes/Training.js'
import Transporter from './routes/Transporter.js'
import TransporterConsultation from './routes/TransporterConsultation.js'
import Visitor from './routes/Visitor.js'
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'
dotenv.config()

// Midlwares
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.json({ limit : "30mb", extended : true}))
app.use(bodyParser.urlencoded({ limit : "30mb", extended : true}))
app.use(cors())
app.use('/administrators',Administrator)
app.use('/guides',Guide)
app.use('/guideConsultations',GuideConsultation)
app.use('/importers',Importer)
app.use('/importerConsultations',ImporterConsultation)
app.use('/persons',Person)
app.use('/sellers',Seller)
app.use('/trainings',Training)
app.use('/transporters',Transporter)
app.use('/transporterConsultations',TransporterConsultation)
app.use('/visitors',Visitor)

// Environement variables
const REFLESH_TOKEN_SECRET = process.env.REFLESH_TOKEN_SECRET
const ACCESS_TOKEN_SECRET =  process.env.ACCESS_TOKEN_SECRET
const db = process.env.DB

app.get('/' ,(req,res) => {
  res.send('okay')
})

// app.post('/register' ,(req,res) => {
//    const {email,password} = req.body
//    const hashedPassword = bcrypt.hashSync(password, 10)
//    const newVisitor = new Visitor({password : hashedPassword,email})
//     try{
//         const saved=newVisitor.save()
//         res.send(saved)
//     }catch(err){
//         console.log("error")
//         res.status(409).json({message : err.message})
//     }
// })









const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  },
  {
    username: 'Achraf',
    title: 'Post 3'
  },
  {
    username: 'Imran',
    title: 'Post 4'
  }
]

app.get('/posts', authenticateToken , (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/login', (req,res) => {
  // Authentificate User

  const username = req.body.username
  const user = { name : username}

  const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET)
  res.json({ accessToken : accessToken })
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.post('/api/resgister', (req,res) => {
  console.log(req.body)
  res.json({ status : 'ok' })
})

mongoose.connect(db, function(err) {
    if (err) { 
      console.log(err);
      } else {
      console.log("connected to db!")
    }
});

app.listen(3000)