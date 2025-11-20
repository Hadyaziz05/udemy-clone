import { useState } from 'react';
import './Hero.css';
import tryItNowBg from '../icons/tryitnow.png';
import jumpIntoBg from '../icons/jumpinto.png';

const slides = [
  {
    id: 1,
    background: tryItNowBg,
    title: 'Subscribe to the best of Udemy',
    description: 'With Personal Plan, you get access to 26,000+ of our top-rated courses in tech, business, and more.',
    buttonText: 'Try it now'
  },
  {
    id: 2,
    background: jumpIntoBg,
    title: 'Jump into learning — for less',
    description: "If you're new to Udemy, we've got good news: For a limited time, courses start at just E£259.99 for new learners!",
    buttonText: 'Sign up now'
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${slide.background})` }}
    >
      <button className="hero-arrow hero-arrow-left" onClick={prevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div className="hero-content">
        <div className="hero-card">
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <button className="cta-button">{slide.buttonText}</button>
        </div>
      </div>

      <button className="hero-arrow hero-arrow-right" onClick={nextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </section>
  );
}

export default Hero;
