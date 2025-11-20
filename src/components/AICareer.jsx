import './AICareer.css';
import aierraImage from '../icons/aierra.png';

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.545 4.635L18.18 9.18l-4.635 1.545L12 15.36l-1.545-4.635L5.82 9.18l4.635-1.545z"></path>
    <path d="M8 3l.545 1.635L10.18 5.18 9.635 5.725 8 7.36l-.545-1.635L5.82 5.18l1.635-.545z"></path>
  </svg>
);

const AwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const MessageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.33.47 2.48 1.5 3.5.76.76 1.23 1.52 1.41 2.5"></path>
  </svg>
);

function AICareer() {
  return (
    <section className="ai-career">
      <div className="ai-career-container">
        <div className="ai-career-content">
          <h2>Reimagine your career in the AI era</h2>
          <p>Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p>
          
          <div className="ai-features">
            <div className="ai-feature">
              <SparklesIcon />
              <span>Learn AI and more</span>
            </div>
            <div className="ai-feature">
              <AwardIcon />
              <span>Prep for a certification</span>
            </div>
            <div className="ai-feature">
              <MessageIcon />
              <span>Practice with AI coaching</span>
            </div>
            <div className="ai-feature">
              <LightbulbIcon />
              <span>Advance your career</span>
            </div>
          </div>

          <button className="ai-cta-button">Learn more</button>
          <p className="ai-pricing">Starting at E£204.00/month</p>
        </div>

        <div className="ai-career-image">
          <img src={aierraImage} alt="AI Career" />
        </div>
      </div>
    </section>
  );
}

export default AICareer;
