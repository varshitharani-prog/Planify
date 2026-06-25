import { useDraggable } from "@dnd-kit/core";

function TaskCard({ task, deleteTask, editTask, changeStatus }) {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id
  });
  function formatDate(date) {
  return date.split("-").reverse().join("-");
}
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }
    : undefined;

  return (
    <div
      className="taskCard"
      ref={setNodeRef}
      style={style}
    >

      <div
        className="dragHandle"
        {...listeners}
        {...attributes}
      >
        ⋮⋮
      </div>

      <h3>{task.title}</h3>

<p>
  <strong>Priority:</strong>{" "}
  <span className={task.priority.toLowerCase()}>
    {task.priority}
  </span>
</p>

{
  task.dueDate && (
    <p>
      📅 <strong>Due Date:</strong>{" "}
      {formatDate(task.dueDate)}
    </p>
  )
}
      <div className="taskButtons">

        <button onClick={() => editTask(task)} className="edit">
          Edit
        </button>

        <button onClick={() => deleteTask(task.id)} className="delete">
          Delete
        </button>

      </div>

      <select
        value={task.status}
        onChange={(e) =>
          changeStatus(task.id, e.target.value)
        }
      >
        <option value="todo">Todo</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>

    </div>
  );
}

export default TaskCard;