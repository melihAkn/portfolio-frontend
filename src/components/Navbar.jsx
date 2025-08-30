import "./Navbar.css";
import '../i18n';
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
function Navbar() {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        if (navigator.language.startsWith("tr")) {
            i18n.changeLanguage("tr");
        } else {
            i18n.changeLanguage("en");
        }
    }, [i18n]);
    return (
        <nav className="navbar">
            <div className="logo">Melih Akn</div>
            <ul className="nav-links">
                <li><a href="/blog">{t('nav.blog')}</a></li>
                <li><a href="/#about">{t('nav.about')}</a></li>
                <li><a href="/#projects">{t('nav.projects')}</a></li>
                <li><a href="/#contact">{t('nav.contact')}</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;