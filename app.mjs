import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

//Connecting to MongoDB
mongoose.connect("mongodb://localhost:27017/connect", {useNewUrlParser:true, useUnifiedTopology: true});
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// Setting up job schema
var jobSchema = new mongoose.Schema({
  companyName: String,
  positionTitle: String,
  positionDescription: String,
  jobType: String,
  startDate: String,
  positionIndustry: String,
  contactFName: String,
  contactLName: String,
  contactEmail: String,
  contactPhone: String,
  positionLocation: String,
  education: String,
  major: String,
  otherSkills: String,
  applyBy: String,
  datePosted: {type: Date, default: Date.now},
})
var Job = mongoose.model("Job", jobSchema)

// New route
app.get("/jobs/new", function(req, res){
  res.render("new.html")
});

app.listen(3000, () =>
  console.log('App listening on port 3000!'),
);