function Progress({ tasks }) {

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    task => task.status === "done"
  ).length;

  const inProgressTasks = tasks.filter(
    task => task.status === "inProgress"
  ).length;

  const pendingTasks = tasks.filter(
    task => task.status === "todo"
  ).length;

  const percentage =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="progressPage">

      <h1>Progress Dashboard</h1>

      <div className="statsContainer">

        <div className="statCard">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="statCard">
          <h3>Completed</h3>
          <p>{completedTasks}</p>
        </div>

        <div className="statCard">
          <h3>In Progress</h3>
          <p>{inProgressTasks}</p>
        </div>

        <div className="statCard">
          <h3>Pending</h3>
          <p>{pendingTasks}</p>
        </div>

      </div>

      <h2>Overall Progress ({percentage}%)</h2>

      <div className="progressBar">
        <div
          className="progressFill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="progressText">
  {completedTasks} of {totalTasks} tasks completed
</p>

    </div>
  );
}

export default Progress;