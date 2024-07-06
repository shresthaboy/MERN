 // 1. Connecting to the Mongo Database
 const mongoose = require('mongoose')

 const url = 'mongodb+srv://sabinshresthanepal04:0I8n0W6hrAffO5H2@cluster0.zbzlbok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
 mongoose.set('strictQuery',false)
 mongoose.connect(url).then(()=>{
    console.log("mongodb is connected!")
 })

 // 2.Creating Schema to store the note in DB
 const noteSchema = mongoose.Schema({
    content: String,
    important: Boolean
 })

 // 3. Creating Model of our note schema
 const Note = mongoose.model('Note',noteSchema)

 // creating object of our note model
 const note = new Note({content:'Hello world', important:true})

 // 4. Saving note and closing the db connection
//  note.save().then(res=>{
//     console.log('note saved!')
//     mongoose.connection.close()
//  })

// 5. Printing database objects holded by the Note model
Note.find({}).then(result=>{
    result.forEach(note=>console.log(note))
    mongoose.connection.close()
})