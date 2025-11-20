import { useState } from 'react';
import './CourseCategories.css';

const coursesData = {
  'Artificial Intelligence (AI)': [
    {
      id: 1,
      image: 'https://img-c.udemycdn.com/course/480x270/4470388_f653_5.jpg',
      title: 'The AI Engineer Course 2025: Complete AI Engineer Bootcamp',
      instructor: '365 Careers',
      rating: 4.6,
      reviewCount: '11,661',
      price: 'E£349.99',
      badge: 'Bestseller'
    },
    {
      id: 2,
      image: 'https://img-c.udemycdn.com/course/480x270/5593828_95f2.jpg',
      title: 'Intro to AI Agents and Agentic AI',
      instructor: '365 Careers',
      rating: 4.4,
      reviewCount: '1,647',
      price: 'E£349.99',
      badge: 'Bestseller'
    },
    {
      id: 3,
      image: 'https://img-c.udemycdn.com/course/480x270/4280048_a1d4.jpg',
      title: 'The Complete Guide To AI Powered Salesforce Development',
      instructor: 'Matt Gerry',
      rating: 4.8,
      reviewCount: '84',
      price: 'E£349.99',
      badge: 'Bestseller'
    },
    {
      id: 4,
      image: 'https://img-c.udemycdn.com/course/480x270/1606208_4807_3.jpg',
      title: 'Artificial Intelligence for Business + ChatGPT Prize [2025]',
      instructor: 'Hadelin de Ponteves, Kirill Eremenko',
      rating: 4.4,
      reviewCount: '4,856',
      price: 'E£719.99',
      badge: 'Premium',
      isPremium: true
    }
  ],
  'Python': [
    {
      id: 5,
      image: 'https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg',
      title: 'Complete Python Bootcamp: Go from zero to hero in Python 3',
      instructor: 'Jose Portilla',
      rating: 4.6,
      reviewCount: '485,321',
      price: 'E£349.99',
      badge: 'Bestseller'
    },
    {
      id: 6,
      image: 'https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg',
      title: 'Python for Data Science and Machine Learning Bootcamp',
      instructor: 'Jose Portilla',
      rating: 4.6,
      reviewCount: '125,419',
      price: 'E£349.99',
      badge: 'Bestseller'
    },
    {
      id: 7,
      image: 'https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg',
      title: 'Automate the Boring Stuff with Python Programming',
      instructor: 'Al Sweigart',
      rating: 4.7,
      reviewCount: '112,583',
      price: 'E£349.99',
      badge: 'Bestseller'
    },
    {
      id: 8,
      image: 'https://img-c.udemycdn.com/course/240x135/482754_7146_6.jpg',
      title: 'The Python Mega Course: Build 10 Real World Applications',
      instructor: 'Ardit Sulce',
      rating: 4.5,
      reviewCount: '66,342',
      price: 'E£349.99',
      badge: 'Bestseller'
    }
  ],
  'Microsoft Excel': [
    {
      id: 9,
      image: 'https://img-c.udemycdn.com/course/240x135/321410_53e7_7.jpg',
      title: 'Microsoft Excel - Excel from Beginner to Advanced',
      instructor: 'Kyle Pew',
      rating: 4.6,
      reviewCount: '241,587',
      price: 'E£349.99',
      badge: 'Bestseller'
    },
    {
      id: 10,
      image: 'https://img-c.udemycdn.com/course/240x135/1229576_dec9_6.jpg',
      title: 'Microsoft Excel Pro Tips: Go from Beginner to Advanced',
      instructor: 'Maven Analytics',
      rating: 4.6,
      reviewCount: '35,421',
      price: 'E£349.99',
      badge: 'Bestseller'
    },
    {
      id: 11,
      image: 'https://img-c.udemycdn.com/course/240x135/1754098_e0df_3.jpg',
      title: 'Excel Skills for Business Specialization',
      instructor: 'Macquarie University',
      rating: 4.8,
      reviewCount: '18,924',
      price: 'E£349.99',
      badge: 'Bestseller'
    },
    {
      id: 12,
      image: 'https://img-c.udemycdn.com/course/240x135/822444_a6db.jpg',
      title: 'Excel VBA Programming - The Complete Guide',
      instructor: 'Boris Paskhaver',
      rating: 4.5,
      reviewCount: '12,876',
      price: 'E£349.99',
      badge: 'Bestseller'
    }
  ]
};

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

function CourseCategories() {
  const [activeTab, setActiveTab] = useState('Artificial Intelligence (AI)');
  const tabs = Object.keys(coursesData);

  return (
    <section className="course-categories">
      <div className="course-categories-container">
        <h2>Skills to transform your career and life</h2>
        <p className="course-categories-subtitle">
          From critical skills to technical topics, Udemy supports your professional development.
        </p>

        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="courses-grid">
          {coursesData[activeTab].map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                {course.instructor === '365 Careers' && (
                  <div className="course-badge-overlay">365 Careers</div>
                )}
              </div>
              <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">{course.instructor}</p>
                <div className="course-rating">
                  <span className={`course-badge ${course.isPremium ? 'premium' : ''}`}>
                    {course.isPremium && '👑 '}
                    {course.badge}
                  </span>
                  <span className="rating-number">{course.rating}</span>
                  <StarIcon />
                  <span className="rating-count">{course.reviewCount} ratings</span>
                </div>
                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseCategories;
