import "./Navbar.css";
import '../i18n';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
function Navbar() {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(localStorage.getItem("appLanguage") || (navigator.language.startsWith("tr") ? "tr" : "en"));
    
    useEffect(() => {
        i18n.changeLanguage(language);
        localStorage.setItem("appLanguage", language); // LocalStorage'e kaydet
    }, [language, i18n]);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <nav className="navbar">
            <div className="logo" id="navbarLogo"><Link to="/" className="logo">Melih Akn</Link></div>
            <ul className="nav-links">
                <li><a href="/blog">{t('nav.blog')}</a></li>
                <li><a href="/#about">{t('nav.about')}</a></li>
                <li><a href="/#projects">{t('nav.projects')}</a></li>
                <li><a href="/#contact">{t('nav.contact')}</a></li>
                {/* Dil Seçimi Dropdown */}
            <select 
                value={language} 
                onChange={handleLanguageChange} 
                className="language-select"
            >
                <option value="en">EN</option>
                <option value="tr">TR</option>
            </select>
            
            </ul>
        </nav>
    );
}

export default Navbar;