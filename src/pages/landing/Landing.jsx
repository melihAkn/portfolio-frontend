// src/pages/landing/Landing.jsx
import './Landing.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar.jsx";
import '../../i18n';
const Landing = () => {
    const { t, i18n } = useTranslation();
    const savedLanguage = localStorage.getItem("appLanguage");

    useEffect(() => {
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        } else {
            if (navigator.language.startsWith("tr")) {
                i18n.changeLanguage("tr");
            } else {
                i18n.changeLanguage("en");
            }
        }
    }, [i18n, savedLanguage]);
    const [projects, setProjects] = useState([])
    useEffect(() => {
    const getProjects = async () => {
      try{
      const res = await fetch("http://localhost:5170/portfolio/get-projects", {
        method : "POST",
        headers : {
        "Content-Type": "application/json"        
    },
        body : JSON.stringify({lang : savedLanguage})
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
  }, [savedLanguage])
    function truncate(text, maxLength) {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    }

    
    return (
        <div className="landing">
        <Navbar />
            {/* Hero Section */}
            <section className="hero">
                <h1>{t('hero.greeting')}</h1>
                <p>{t('hero.title')}</p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn primary">{t('hero.viewProjects')}</a>
                    <a href="#contact" className="btn secondary">{t('hero.contactMe')}</a>
                </div>
            </section>

            {/* About Me */}
            <section id="about" className="about">
                <h2>{t('about.title')}</h2>
                <p>{t('about.description')}</p>
            </section>

            {/* Projects */}
            <section id="projects" className="projects">
                <h2>{t('projects.title')}</h2>
                <div className="project-list">
                    {projects.map((proj, idx) => (
                        <div className="project-card" key={idx}>
                            <img src={proj.img} alt={proj.title} />
                            <h3>{proj.title}</h3>
                            <p>{truncate(proj.description, 120)}</p>
                            <a href={`/project/${proj.id}`} className="btn-secondary">{t('projects.viewDetails')}</a>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                    <a href="/projects" className="btn-primary">{t('projects.viewAllProjects')}</a>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="contact">
                <h2>{t('contact.title')}</h2>
                <form className="contact-form">
                    <input type="text" placeholder={t('contact.yourName')} required />
                    <input type="email" placeholder={t('contact.yourEmail')} required />
                    <textarea placeholder={t('contact.yourMessage')} rows="5" required />
                    <button type="submit" className="btn primary">{t('contact.sendMessage')}</button>
                </form>
                <p style={{ marginTop: "20px" }}>
                    {t('contact.sendMeAnEmail')} :{" "}
                    <a href="mailto:you@example.com">you@example.com</a>
                </p>
                <div className="socials">
                    <a href="https://github.com/melihAkn" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/melih-akıncı-24633133a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>{t('footer.copyright')}</p>
            </footer>
        </div>
    );
};

export default Landing;
