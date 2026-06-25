import { DndContext } from "@dnd-kit/core";

import Column from "./Column";
import TaskCard from "./TaskCard";

function Board({
  tasks,
  deleteTask,
  editTask,
  changeStatus
}) {

  const todoTasks = tasks.filter(
    task => task.status === "todo"
  );

  const progressTasks = tasks.filter(
    task => task.status === "inProgress"
  );

  const doneTasks = tasks.filter(
    task => task.status === "done"
  );

  function handleDragEnd(event) {
  const { active, over } = event;


  if (!over) return;

  changeStatus(active.id, over.id);
}
  return (
    <DndContext onDragEnd={handleDragEnd}>

      <div className="board">

        <Column
          title={`Todo (${todoTasks.length})`}
          id="todo"
        >
          {
            todoTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                editTask={editTask}
                changeStatus={changeStatus}
              />
            ))
          }
        </Column>

        <Column
          title={`In Progress (${progressTasks.length})`}
          id="inProgress"
        >
          {
            progressTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                editTask={editTask}
                changeStatus={changeStatus}
              />
            ))
          }
        </Column>

        <Column
          title={`Done (${doneTasks.length})`}
          id="done"
        >
          {
            doneTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                editTask={editTask}
                changeStatus={changeStatus}
              />
            ))
          }
        </Column>

      </div>

    </DndContext>
  );
}

export default Board;