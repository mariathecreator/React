import React,{useState} from "react";

export default function ToDoList(){

    const [tasks,setTasks]=useState([]);

    const [newTask,setNewTask] = useState("");

    function handleInputChanges(event){
        setNewTask(event.target.value)
    }

    function addTasks(){
        if(newTask.trim()!==""){
            
            setTasks(t=>[...t,newTask])
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedtasks = tasks.filter((_,i)=>i !== index);
        setTasks(updatedtasks);
    }

    function moveTaskup(index){
        if(index > 0){
            const updatedTasks =[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskdown(index){
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
             [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a Task"
                value={newTask} 
                onChange={handleInputChanges}/>
                 
                <button className="add-button" 
                onClick={addTasks}> Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>

                        <span className="text">{task}</span>

                        <button className="delete-button"
                        onClick={()=>deleteTask(index)}>
                        Delete</button>
                       
                        <button className="moveup-button"
                        onClick={()=>moveTaskup(index)}>
                        Up</button>

                        <button className="movedown-button"
                        onClick={()=>moveTaskdown(index)}>
                        Down</button>

                    </li>
                )}
            </ol>
        </div>
    )

}