import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";

const projects = [
    { id: 1, title: "CircleSupport", desc: "Anonymous community support platform." },
    { id: 2, title: "Smart Greenhouse", desc: "Java Swing project for greenhouse automation." },
    { id: 3, title: "Library Automation", desc: "Book borrowing and e-book management system." },
];

export default function ProjectsPage() {
    return (
    <div>
    <Navbar />
    <section className="projects-page">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <h2>{p.title}</h2>
            <p>{p.desc.length > 80 ? p.desc.slice(0, 80) + "..." : p.desc}</p>
            <Link to={`/project/${p.id}`} className="view-btn">View Details</Link>
          </div>
        ))}
      </div>
    </section>
    </div>
    );
}
