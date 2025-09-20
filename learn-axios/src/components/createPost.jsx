import React,{useState} from "react";
import axios from "axios";
import "../App.css"

const CreatePost=({onCreatePost})=>{
const [title,setTitle] = useState("")
const [body,setBody] = useState("")
const [response,setResponse] = useState("")

const handleSubmit=(event)=>{
event.preventDefault()

if(!title.trim()||!body.trim()){
setResponse("please fill in all the fields")
return;
}

const newPost = {
    title,
    body
}

axios
.post("http://localhost:3000/posts",newPost)
.then((response)=>{
    setResponse("Post created sucessfully")
    setTitle("")
    setBody("")
    onCreatePost(response.data)
})
.catch(()=>{
    setResponse("error creating post")
})
}

return(
    <div className="div">
        <h2 className="h1">Create Post</h2>
        <form className="form" onSubmit={handleSubmit}>
            <input className="input" type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
            <textarea  className="textarea" placeholder="Body" onChange={(e)=>setBody(e.target.value)} ></textarea>
            <button className="button" type="submit">Create</button>
        </form>
        {response && <p>{response}</p>}
    </div>
)
}
export default CreatePost