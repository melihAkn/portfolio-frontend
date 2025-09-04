// src/pages/landing/Landing.jsx

const Landing = () => {
    return (
        <div className="landing">
            {/* Hero Section */}
            <section className="hero">
                <h1>Hi, I'm Melih</h1>
                <p>Backend Developer | AI Enthusiast</p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn primary">View Projects</a>
                    <a href="#contact" className="btn secondary">Contact Me</a>
                </div>
            </section>

            {/* About Me */}
            <section className="about">
                <h2>About Me</h2>
                <p>
                    I'm a passionate backend developer specializing in .NET Core and Node.js,
                    with a strong interest in artificial intelligence.
                </p>
            </section>

            {/* Projects */}
            <section id="projects" className="projects">
                <h2>Projects</h2>
                <div className="project-list">
                    <div className="project-card">
                        <img src="/assets/project1.png" alt="Project 1" />
                        <h3>Apartment Management System</h3>
                        <p>Full-stack project with .NET Core, MySQL, and React.</p>
                    </div>
                    <div className="project-card">
                        <img src="/assets/project2.png" alt="Project 2" />
                        <h3>CircleSupport</h3>
                        <p>Anonymous community advice platform powered by AI.</p>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>.NET Core</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>MySQL</li>
                    <li>AI Integration</li>
                </ul>
            </section>

            {/* Contact */}
            <section id="contact" className="contact">
                <h2>Contact Me</h2>
                <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
                <div className="socials">
                    <a href="https://github.com/">GitHub</a>
                    <a href="https://linkedin.com/">LinkedIn</a>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>© 2025 Melih Akn. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Landing