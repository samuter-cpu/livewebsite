import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <h1 className="logo">Morning Delights</h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#blog">Blog</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>Discover Breakfast Perfection</h1>
            <p>Exploring morning culinary delights, one plate at a time</p>
          </div>
        </section>

        <article className="featured-post">
          <div className="post-image">
            <div className="image-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800" 
                alt="Corned Beef Hash with Coffee"
              />
            </div>
            <div className="post-date">December 10, 2024</div>
          </div>
          
          <div className="post-content">
            <h2>The Perfect Morning: Corned Beef Hash & Coffee</h2>
            <div className="post-meta">
              <span className="read-time">5 min read</span>
              <span className="category">Breakfast</span>
            </div>
            <p className="post-excerpt">
              Discover why corned beef hash paired with a steaming cup of coffee makes for the ultimate breakfast experience. 
              This classic combination brings together the savory, crispy texture of perfectly prepared hash with the rich, 
              aromatic notes of freshly brewed coffee.
            </p>
            <button className="read-more">Read More</button>
          </div>
        </article>

        <section className="newsletter">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Subscribe to receive more breakfast inspiration</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Morning Delights. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
