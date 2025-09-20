import React,{useState,useEffect} from "react";
import axios from "axios"
import CreatePost from "./createPost";
import '../App.css'

const App=()=>{
const [data,setData]= useState([])
const [loading ,setLoading] = useState(true)
const [error ,setError] =useState(null)

useEffect(()=>{
  axios
  .get("http://localhost:3000/posts")
  .then((response)=>{
    setData(response.data);
    setLoading(false);
  })
  .catch((error)=>{
    setError(error.message);
    setLoading(false)
  });
});

const addPost =(newPost)=>{
  setData([newPost,...data])
}

if(loading) return <div className="div">loading...</div>
if(error) return <div className="div">error:{error}</div>

return(
 
  <div className="div1 div">
    <h1 className="h1">BLOGS</h1>
    <CreatePost onCreatePost={addPost}/>
    <h2 className="h1" >Post</h2>
    <ul>
      {data.map((post)=>(
        <div className="post" key={post.id}>
         <h3 className="post1"> {post.id}</h3>
          <h3 className="post1">{post.title}</h3>
          <p className="post1">{post.body}</p>
        </div>
        
      ))}
    </ul>
  </div>
  
)
}

export default App