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

// Home page
app.get("/", function(req, res){
  res.render("index")
});

// Index route
app.get("/jobs", function(req, res){
    Job.find({}, function(err, jobs){
    if(err){
      console.log(err);
    } else{
      res.render("jobs", {jobs: jobs});
    }
  })
})

// New route
app.get("/jobs/new", function(req, res){
  res.render("new")
});

// Create route
app.post("/jobs", function(req, res){
  Job.create(req.body.job, function(err, newJob){
      if(err){
          res.render("new");
      } else{
          res.redirect("/jobs");
      }
  });
})

// Show route
app.get("jobs/:id", function(req, res){
  Job.findById(req.params.id , function(err, foundJob){
    if(err){
      res.redirect("/jobs");
    } else{
      res.render("show", {job: foundJob})
    }
  })
})

app.listen(3000, () =>
  console.log('App listening on port 3000!'),
);