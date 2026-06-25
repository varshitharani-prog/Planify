function About() {
  return (
    <div className="aboutPage">

      <div className="aboutCard">

        <h1>📋 About Planify</h1>

        <p className="aboutDescription">
          Planify is a productivity-focused task management application
          designed to help users organize, track, and complete tasks
          efficiently. It provides an intuitive workflow with drag-and-drop
          task management, progress tracking, and smart productivity features.
        </p>

        <h2>✨ Key Features</h2>

        <ul>
          <li>Task Creation, Editing & Deletion</li>
          <li>Drag & Drop Task Management</li>
          <li>Priority-Based Task Organization</li>
          <li>Progress Analytics Dashboard</li>
          <li>Local Storage Persistence</li>
          <li>Responsive Mobile-Friendly UI</li>
          <li>AI Productivity Assistant</li>
        </ul>

        <h2>🛠 Tech Stack</h2>

        <div className="techStack">

          <span>React</span>
          <span>JavaScript</span>
          <span>CSS</span>
          <span>React Router</span>
          <span>DND Kit</span>
          <span>Local Storage</span>

        </div>

        <h2>🚀 Project Goal</h2>

        <p>
          The goal of Planify is to improve productivity by combining
          task organization, visual progress tracking, and AI-powered
          assistance in a single platform.
        </p>

        <div className="versionBox">
          <strong>Version:</strong> Planify v1.0
        </div>

      </div>

    </div>
  );
}

export default About;