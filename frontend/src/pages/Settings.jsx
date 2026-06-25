function Settings({ setTasks }) {

  function clearAllTasks() {

    setTasks([]);

    localStorage.removeItem("tasks");
  }

  return (
    <div className="settingsPage">

      <h1>⚙ Settings</h1>

      <p className="settingsDescription">
        Manage your Planify workspace and application preferences.
        Use the options below to maintain your task data and keep
        your workspace organized.
      </p>

      <div className="settingsCard">

        <h2>Data Management</h2>

        <p>
          Clearing tasks will permanently remove all saved tasks
          from local storage. This action cannot be undone.
        </p>

        <button
          className="settingBtn"
          onClick={clearAllTasks}
        >
          Clear All Tasks
        </button>

      </div>

      <div className="settingsCard">

        <h2>Application Info</h2>

        <p>Planify v1.0</p>

        <p>
          Built with React, React Router, DND Kit and Local Storage.
        </p>

      </div>

    </div>
  );
}

export default Settings;