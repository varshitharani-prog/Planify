import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Assistant from "./pages/Assistant";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import About from "./pages/About";

function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  return (
    <div className="app">

      <Navbar />

      <main className="mainContent">

        <Routes>

          <Route
            path="/"
            element={
              <Home
                tasks={tasks}
                setTasks={setTasks}
              />
            }
          />

          <Route
            path="/progress"
            element={
              <Progress
                tasks={tasks}
              />
            }
          />

          <Route
  path="/assistant"
  element={<Assistant />}
/>

          <Route
            path="/settings"
            element={
              <Settings
                setTasks={setTasks}
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

        </Routes>


      </main>

    </div>
  );
}

export default App;