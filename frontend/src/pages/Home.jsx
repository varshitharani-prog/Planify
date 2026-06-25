import { useState,useEffect } from "react";
import Board from "../components/Board";
import AddTaskModal from "../components/AddTaskModal";
function Home({tasks,setTasks}) {

    
    const [showModal,setShowModal]=useState(false);
    const [title,setTitle]=useState("");
    const [priority,setPriority]=useState("High");
    const [dueDate,setDueDate]=useState("");
    const [editId, setEditId] = useState(null);

     

    function addTask() {

  if(title==="") return;

  if(editId){

    setTasks(
      tasks.map(task =>
        task.id===editId
        ? {
            ...task,
            title,
            priority,
            dueDate
          }
        : task
      )
    );

    setEditId(null);

  }
  else{

    const newTask = {
      id: Date.now(),
      title,
      priority,
      dueDate,
      status: "todo"
    };

    setTasks([...tasks, newTask]);
  }

  setTitle("");
  setPriority("High");
  setDueDate("");

  setShowModal(false);
}

    function editTask(task) {


  setTitle(task.title);
  setPriority(task.priority);
  setDueDate(task.dueDate);

  setEditId(task.id);

  setShowModal(true);
}

function deleteTask(id){

    setTasks(
        tasks.filter(
            task => task.id !== id
        )
    );

}
function changeStatus(id, status){

    setTasks(
        tasks.map(task =>
            task.id === id
            ? {...task, status}
            : task
        )
    );

}

            useEffect(() => {
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}, [tasks]);

    function closeModal() {
  setShowModal(false);

  setEditId(null);

  setTitle("");
  setPriority("High");
  setDueDate("");
}
    return (
        <div className="home">

            <div className="greeting">
    <h1>Welcome to Planify </h1>

    <p>
        Plan smarter, stay focused, and track every step of your productivity journey. Organize your work, prioritize important tasks, and stay focused on what matters most.
    </p>
</div>

            <button
                className="addTaskBtn"
                onClick={()=>setShowModal(true)}
            >
            + Add Task
            </button>


            <Board
tasks={tasks}
deleteTask={deleteTask}
editTask={editTask}
changeStatus={changeStatus}
/>


            {
showModal &&
<AddTaskModal
  title={title}
  setTitle={setTitle}
  priority={priority}
  setPriority={setPriority}
  dueDate={dueDate}
  setDueDate={setDueDate}
  addTask={addTask}
  closeModal={closeModal}
  editId={editId}
/>
}
        </div>
    );
}

export default Home;