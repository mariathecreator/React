import { useCallback, useState } from "react"
export default function Counter(){

    const [count , setCount]=useState(0)
    const [display, setDisplay]= useState("show")
    const [text , setText]=useState("")

    const increment = useCallback(()=>{
        setCount(count=>count+1)
    },[])

    const showCount = useCallback(()=>{
        setDisplay(d=>d==="show"?"hide":"show")
    })
    return(
        <div>
            {display=="show" &&<p>count:{count}</p>}
            <button onClick={increment}>+1</button>
            <button onClick={showCount}>{display==="show"? "hide":"show"}</button>
        </div>
    )
}