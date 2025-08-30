// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Blog from './pages/blog/Blog';
import Projects from './pages/projects/Projects';
import ProjectDetailPage from './pages/projects/ProjectDetailPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetailPage/>} />
      </Routes>
    </Router>
  );
}
