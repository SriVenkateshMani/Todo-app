const express = require("express");
const  todoParser  = require("./validate")
const Todo = require("./schema");
const connectDB = require("./db");

const app = express();

app.use(express.json())

connectDB();

// I want add a todo, update a todo, delete a todo

app.post("/todo", async function(req, res){
    const title = req.body.title;
    const description = req.body.description;
    const result = todoParser.safeParse({
        title,
        description
    })

    if(!result.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"  
        })
        return
    }

    // else put it in mongodb
    await Todo.create({
        title,
        description
    })

    res.json({
        msg: "Your Todo is created successfully" 
    })
});


// Update a todo
app.put("/todo", async function(req, res){
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const result = todoParser.safeParse({
        title,
        description
    })

    if(!result.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"  
        })
        return
    }
    
    // Find and update the todo
    await Todo.findByIdAndUpdate(id, {
        title,
        description
    });

    res.json({
        msg: "Your Todo is modified successfully" 
    })
})


// Delete a todo
app.delete("/todo", async function(req, res){
    const id = req.body.id;

    await Todo.deleteOne({
        _id: id
    })

    res.json({
        msg: "Your Todo is deleted"
    })
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});