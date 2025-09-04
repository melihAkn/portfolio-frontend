import React from 'react';
import './Blog.css';
import Navbar from '../../components/Navbar';
export default function MinimalBlog() {
  return (
    <div className="blog-container">
    <Navbar />
    <div className="coming-soon-container">
      <h1 className="coming-soon-title">Coming Soon!</h1>
      <p className="coming-soon-subtitle">We are working hard to bring you exciting content. Please check back later!</p>
    </div>
    </div>
  );
}