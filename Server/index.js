import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser"
import cors from 'cors'
import connectDB from './database/connexion.js'
// import Administrator from './routes/Administrator.js' 
// import Guide from './routes/Guide.js'
// import GuideConsultation from './routes/GuideConsultation.js'
// import Importer from './routes/Importer.js'
// import ImporterConsultation from './routes/ImporterConsultation.js'
import UserPerson from './routes/UserPerson.js'
// import Seller from './routes/Seller.js'
// import Training from './routes/Training.js'
// import Transporter from './routes/Transporter.js'
// import TransporterConsultation from './routes/TransporterConsultation.js'
// import Visitor from './routes/Visitor.js'
import * as dotenv from 'dotenv'
const app = express()

// Midlwares
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.json({ limit : "30mb", extended : true}))
app.use(bodyParser.urlencoded({ limit : "30mb", extended : true}))
app.use(cors())
dotenv.config()
// app.use('/administrators',Administrator)
// app.use('/guides',Guide)
// app.use('/guideConsultations',GuideConsultation)
// app.use('/importers',Importer)
// app.use('/importerConsultations',ImporterConsultation)
app.use('/UserPersons',UserPerson)
// app.use('/sellers',Seller)
// app.use('/trainings',Training)
// app.use('/transporters',Transporter)
// app.use('/transporterConsultations',TransporterConsultation)
// app.use('/visitors',Visitor)

// mongodb connection
connectDB();

app.listen(3000)