import React from 'react'
import './App.css'

{/*greatings is the child component */ }
function Greating({ name, age }) {

  return (
    <div>
      <h3>hello,{name}!</h3>
      <p>you are {age} old.</p>
    </div>
  )
}
function Name({ name }) {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

{/*app is the parent component*/ }
function App() {
  const students = [
    {
      id: 1,
      name: "maria",
      age: 23

    },
    {
      id: 2,
      name: "fresca",
      age: 23
    }

  ]

  return (
    <div>
      <h1>student</h1>

      <Greating name="sandy" age="24" />

      <div>
        {students.map((student) => {
          const data = student.name.toUpperCase()
          return <Greating key={student.id} name={data} age={student.age} />
        })}
      </div>

      <div>
        {students.map((student) => (
          <Name key={student.id} name={student.name} />
        ))}


      </div>
    </div>
  )
}

export default App
