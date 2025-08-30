import { useParams, Link } from "react-router-dom";

const projects = [
  { id: 1, title: "CircleSupport", desc: "Anonymous community support platform where users can ask and answer questions in different categories. Includes AI suggestions and mentor features." },
  { id: 2, title: "Smart Greenhouse", desc: "Greenhouse automation project built with Java Swing and MySQL. Includes temperature/moisture tracking, watering system, and harvest planning." },
  { id: 3, title: "Library Automation", desc: "Library management system with modules for member registration, book lending/returning, e-book management, and admin editing features." },
];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.desc}</p>
      <Link to="/projects" className="back-btn">← Back to Projects</Link>
    </div>
  );
}
