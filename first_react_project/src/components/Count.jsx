import React,{useState,useEffect,useRef} from "react"

export default function Count(){

    const [count,setCount]= useState(0)
    const intervalRef= useRef(null);

    useEffect(()=>{
        intervalRef.current= setInterval(()=>{
          
            setCount(c=>{
            if(c>=10){
                clearInterval(intervalRef.current)
                return c
            }
             return c+1
            })
        },1000)

        return()=>clearInterval(intervalRef.current)
    },[])

    return(
        <div>
            <p>count:{count}</p>
        </div>
    )
}

// export default function Count(){
//     const [count,setCount] = useState(0)
//     const intervalId = useRef(null)

//     useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setCount(prev => prev + 1); 
//     }, 1000);

//     return () => {
//       clearInterval(intervalRef.current); 
//     };
//   }, []);

//   useEffect(() => {
//     if (count === 10) {
//       clearInterval(intervalRef.current); 
//     }
//   }, [count]);

//   return (
//     <div>
//       <p>count: {count}</p>
//     </div>
//   );

// }

// export default function Count(){
//     const [count,setcount]= useState(0)

//     useEffect(()=>{
//         const interval= setInterval(()=>{
//             setcount(count+1)
//         },1000)

//         return ()=> clearInterval(interval)
        
//     })

//     return(
//         <p>count:{count}</p>
//     )
// }

// export default function Count(){
//     const [count,setcount]=useState(0)
//     const [message,setmessage]=useState("")

//     const intervalId=setInterval(()=>{
//         setcount(count+1)
//     },1000)

//        setTimeout(()=>{
//         setmessage("Mr.Bean")
//     if(count===10){
//         clearInterval(intervalId)
//     }
// },2000)

//     return(
//         <>
//         <div>message:{message}</div>
//         <p>count:{count}</p>
//         </>
//     )
// }
// export default function Count(){
//     const [count,setcount]=useState(0)

//     const intervalRef = useRef(null)

//     useEffect(()=>{
//        intervalRef.current=setInterval(() => {
//             setcount(count+1)
//        }, 1000);

//         return ()=>{
//          clearInterval(intervalRef.current)
//         }
//     })

//     useEffect(()=>{
//          if(count===10){

//                 clearInterval(intervalRef.current)
//             }
//     },[count])

//     return(
//         <div>
//             <p>count:{count}</p>
//         </div>
//     )
// }

// export default function Count(){
//     const [count,setcount]= useState(0);

//         const increment= ()=>{setcount(count+1);};
    
//         const decrement =()=>{setcount(count-1);};



//     return(
//         <div>
//             <h1>counter:{count}</h1>
//             <button onClick={increment} disabled={count===10}>increment</button>
//             <button onClick={decrement} disabled={count===-10}>decrement</button>
//         </div>
//     )
// }

// export default function Count(){
// const [count,setcount]=useState(0)

//  const increment = ()=>{setcount(count+1);};
//  const decrement=()=>{setcount(count-1)}
// 
// return(
//     <div>
//         <h1>counter:{count}</h1>
//         <button onClick={increment}>increment</button>
//           <button onClick={decrement}>decrement</button>
//     </div>
// )
// }
