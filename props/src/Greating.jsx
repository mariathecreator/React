import React from "react";
// import Button from './button.jsx'
 export default function Greating(){
    const [name , setName] = React.useState("")
    const [age , setAge] =React.useState("")
    const [display, setDisplay]= React.useState("")

    const handlebtn=(e)=>{
e.preventDefault()
setName("")
setAge("")
setDisplay(`hai ${name}, ${age}`)
    }
   return(
    <div>
      <form onSubmit={handlebtn}>
        <input type="text"  placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <Button type="submit">Display</Button>
      </form>
{display && <p>{display}</p>}
    </div>
   )
}