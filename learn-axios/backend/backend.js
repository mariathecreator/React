import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

let post=[]
let id=1;

app.get("/posts",(req,res)=>{
    res.json(post)
})

app.post("/posts",(req,res)=>{
    const {title,body}=req.body

    if(!title ||!body){
        res.status(401).json({error:"Both title and body is required"})
    }
    
    const newPost={id:id++,title,body}
    post.push(newPost)
    res.status(201).json(newPost)
})


app.listen(3000,()=>{
    console.log("server is running in port:3000");
})