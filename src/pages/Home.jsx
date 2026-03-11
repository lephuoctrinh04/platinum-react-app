function Home() {
    return (
      <main>
        <section className="hero">
          <div className="container hero-content">
            <h1>Personal Task & Productivity Manager</h1>
            <p>
              Organize your daily work, track your progress, explore useful posts,
              and manage productivity with a modern React application.
            </p>
            <div className="hero-buttons">
              <a href="/tasks" className="primary-btn">
                Manage Tasks
              </a>
              <a href="/posts" className="secondary-btn">
                View Posts
              </a>
            </div>
          </div>
        </section>
  
        <section className="features-section container">
          <h2 className="section-title">Main Features</h2>
  
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Task Management</h3>
              <p>Add, edit, delete, complete, search, and filter your tasks.</p>
            </div>
  
            <div className="feature-card">
              <h3>Productivity Tracking</h3>
              <p>See how many tasks remain and keep your workflow organized.</p>
            </div>
  
            <div className="feature-card">
              <h3>API Integration</h3>
              <p>View real posts fetched from an external API source.</p>
            </div>
  
            <div className="feature-card">
              <h3>Responsive UI</h3>
              <p>Enjoy a clean and modern design that works on all devices.</p>
            </div>
          </div>
        </section>
  
        <section className="about-section container">
          <h2 className="section-title">About This Project</h2>
          <p className="about-text">
            This project was developed to practice frontend skills from Week 1 to
            Week 12, including HTML, CSS, JavaScript, React, React Router, API
            integration, localStorage, component-based architecture, and UI/UX
            design.
          </p>
        </section>
      </main>
    );
  }
  
  export default Home;