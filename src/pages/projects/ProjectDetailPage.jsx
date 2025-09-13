import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./ProjectDetailPage.css";
import { useState, useEffect } from "react";
import Navbar from "./../../components/Navbar.jsx"
export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState([])
  const savedLanguage = localStorage.getItem("appLanguage");

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await fetch(`http://localhost:5170/portfolio/get-projects/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ lang: savedLanguage })
        })


        if (!res.ok) {
          setProject([{ error: "hata oluştu" }])
          return
        }
        const data = await res.json()
        console.log(data)
        setProject(Array.isArray(data) ? data : [data])
      }
      catch (err) {
        console.error(err)
        setProject([{ error: "sunucu hatası" }])
      }
    }
    getProject()
  }, [id, savedLanguage])


  return (
    <div className="entire-page">
      <Navbar />
      <div className="page-grid">
        <aside className="sidebar left-sidebar">
          <div className="ad-box">Ad / Extra Content</div>
        </aside>

        <main className="main-content">
          <div className="blog-content">
            {project.length > 0 ? (
              <>
                <h1 className="blog-title">{project[0].title}</h1>
                <div className="markdown-body">
                  <ReactMarkdown>{project[0].content}</ReactMarkdown>
                </div>
              </>
            ) : (
              <p>Loading project...</p>
            )}

            <div className="blog-footer">
              <Link to="/projects" className="back-link">
                ← Back to Projects
              </Link>
            </div>
          </div>
        </main>

        <aside className="sidebar right-sidebar">
          <div className="ad-box">Ad / Extra Content</div>
        </aside>
      </div>
    </div>
  );
}
