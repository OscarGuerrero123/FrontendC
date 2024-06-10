import { useState } from "react"
import List from "./List"
import TaskModal from "./TaskModal"


function App() {
  const [taskList, setTaskList] = useState(
  JSON.parse(localStorage.getItem("taskList")) || []
  )

  localStorage.setItem("taskList", JSON.stringify(taskList)) 

  return (
    <div className="container">
      <h1>To Do List</h1>
      <hr />
      <List 
      taskList={taskList}
      setTaskList={setTaskList}
      />

<hr />
    <div className="text-end">
      <TaskModal taskList={taskList} 
      setTaskList={setTaskList}
      />
      <button type="button" className="btn btn-primary" 
      data-bs-toggle="modal"
      data-bs-target="#TaskModal">
        <i className="bi bi-plus-lg"></i> Add </button>
  
    </div>
    </div>
   
  )
}

export default App