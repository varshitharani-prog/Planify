function AddTaskModal({
  title,
  setTitle,
  priority,
  setPriority,
  dueDate,
  setDueDate,
  addTask,
  closeModal,
  editId
}) {
  return (
    <div className="modalOverlay">
      <div className="modal">

        <h2>
          {editId ? "Edit Task" : "Add Task"}
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <div className="buttons">

          <button
            onClick={addTask}
            className="update"
          >
            {editId ? "Update" : "Save"}
          </button>

          <button
            onClick={closeModal}
            className="cancel"
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddTaskModal;