import express, { application } from 'express'
import bodyParser from 'body-parser'
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

// Midlwares
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

// Connect to db 
mongoose.connect("mongodb+srv://achraf:achraf1234@cluster0.gzpxglp.mongodb.net/?retryWrites=true&w=majority", function(err) {
    if (err) { 
      console.log(err);
      } else {
      console.log("connected to db!")
    }
});

app.listen(3000)