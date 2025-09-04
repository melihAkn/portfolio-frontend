import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([])

  useEffect(() => {
  const getProjects = async () => {
    try{
    const res = await fetch("http://localhost:5170/portfolio/get-projects", {
      method : "GET"
    })

    if(!res.ok){
      setProjects([{error : "hata oluştu"}])
      return
    }
    const data = await res.json()
    console.log(data)
    setProjects(Array.isArray(data) ? data : [data])
    }
    catch(err){
      console.error(err)
      setProjects([{error : "sunucu hatası"}])
    }
  }
  getProjects()
}, [])
  function truncate(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <div>
      <Navbar />
      <div className="projects-page-container">
        <h2 className="projects-page-title">{t('projects.title')}</h2>
        <div className="projects-page-list">
          {projects.map((proj) => (
            <div className="projects-page-card" key={proj.id}>
              <img src={proj.img} alt={proj.title} className="projects-page-card-img" />
              <div className="projects-page-content">
                <h3 className="projects-page-content-title">{proj.title}</h3>
                <p className="projects-page-description">
                  {truncate(proj.description, 120)}
                </p>
                <div className="projects-page-tech-info">
                  <strong>Backend:</strong> {proj.backendTechStack || 'N/A'}
                  <br />
                  <strong>Database:</strong> {proj.frontendTechStack || 'N/A'}
                </div>
                <Link to={`/project/${proj.id}`} className="projects-page-btn-secondary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;