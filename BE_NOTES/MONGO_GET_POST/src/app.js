
const express = require("express");
const app = express();
const notesModel = require("./models/notes.model");
const notesModule = require("./models/notes.model");
app.use(express.json());


app.post("/api/notes",async (req,res)=>{
     const {title, description} = req.body;


     const note  = await notesModel.create({
          title,description
     });

     res.status(201).json({
          message:"NOTE created",
          note
     });
})

app.get("/api/notes",async(req,res)=>{
     const notes =await notesModule.find();

     res.status(200).json({
          message:"fetched",
          notes
     });
})

app.patch("/api/notes/:id",async(req,res)=>{
     const {id} = req.params;
     const {title, description} = req.body;  
     


module.exports = app;