const express = require('express');
const app = express();
app.use(express.json());

let notes = [];

app.post('/api/data', async (req, res) => {
    const {title, description} = req.body;

     const note = { 
          description,
          title,
          id: notes.length + 1
     };
     notes.push(note);

     res.status(201).json({
          message:"NOTE created",
          note
     });
});


app.get('/api/data', async (req, res) => {
     res.status(200).json({
          message:"All notes",
          notes
     });
});

app.delete('/api/data/:id', async (req, res) => {
     const {id} = req.params;
     notes = notes.filter(note => note.id !== parseInt(id));
     res.status(200).json({
          message:"Note deleted",
          notes
     });
});

app.patch('/api/data/:id', async (req, res) => {
     const {id} = req.params;
     const {title, description} = req.body;
     const note = notes.find(note => note.id === parseInt(id));
     if (!note) {
          return res.status(404).json({ message: "Note not found" });
     }
     note.title = title;
     note.description = description;
     res.status(200).json({
          message:"Note updated",
          note
     });
});


module.exports = app;