import './Skills.css';
import aiImage from '../icons/ai.png';
import itImage from '../icons/it.png';
import dataImage from '../icons/data.png';

const skillsData = [
  {
    id: 1,
    image: aiImage,
    learners: '1.7M+',
    title: 'Generative AI'
  },
  {
    id: 2,
    image: itImage,
    learners: '14M+',
    title: 'IT Certifications'
  },
  {
    id: 3,
    image: dataImage,
    learners: '8.1M+',
    title: 'Data Science'
  }
];

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

function Skills() {
  return (
    <section className="skills">
      <div className="skills-container">
        <div className="skills-content">
          <div className="skills-header">
            <h2>Learn essential career and life skills</h2>
            <p>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>
          </div>

          <div className="skills-grid">
            {skillsData.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div className="skill-image-wrapper">
                  <img src={skill.image} alt={skill.title} className="skill-image" />
                  <div className="skill-overlay">
                    <div className="skill-learners">
                      <UsersIcon />
                      <span>{skill.learners}</span>
                    </div>
                    <h3>{skill.title}</h3>
                    <button className="skill-arrow">
                      <ArrowRightIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
