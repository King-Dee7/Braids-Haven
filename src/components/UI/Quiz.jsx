import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// Icons mapped per step index, per option index
const stepIcons = [
  ['💎', '✨', '🌀', '🪶', '❓'],  // Hair type
  ['⏳', '📅', '🔒'],              // Duration
  ['☀️', '🎉', '📚', '💼', '✈️'],  // Occasion
  ['🙅‍♀️', '🤏', '💆‍♀️'],           // Maintenance
];

const quizData = {
  en: {
    steps: [
      {
        question: 'What is your hair type?',
        options: ['Natural 4C', 'Relaxed', 'Thick & coily', 'Fine & straight', 'Not sure']
      },
      {
        question: 'How long do you want the style to last?',
        options: ['2 weeks', '4-6 weeks', '8+ weeks']
      },
      {
        question: 'What is the main occasion?',
        options: ['Everyday', 'Event', 'Uni', 'Work', 'Vacation']
      },
      {
        question: 'How much maintenance are you okay with?',
        options: ['Zero', 'A little', 'Love caring for my hair']
      }
    ],
    results: [
      {
        name: 'Knotless Braids',
        desc: 'Perfect for a low-tension, natural look that lasts 4-6 weeks. Great for everyday wear or vacation.',
        image: '/knotless%20braids.jpg'
      },
      {
        name: 'Passion Twists',
        desc: 'A gorgeous, textured style that gives a bohemian vibe. Low maintenance and great for events.',
        image: '/Passion-Twist-Braids.jpeg'
      },
      {
        name: 'Cornrows / Feed-ins',
        desc: 'A sleek, protective style that is quick to install and lasts up to 2-3 weeks. Ideal for zero maintenance.',
        image: '/feed%20ins.jpg'
      }
    ],
    resultTitle: 'Your Perfect Match',
    bookCta: 'Book This Style',
    restart: 'Retake Quiz',
    startQuiz: 'Find Your Style',
    introText: 'Answer a few quick questions and we\'ll recommend the perfect style for you.'
  },
  fi: {
    steps: [
      {
        question: 'Mikä on hiustyyppisi?',
        options: ['Luonnonkihara 4C', 'Suoristettu', 'Paksu & kihara', 'Hento & suora', 'En ole varma']
      },
      {
        question: 'Kuinka kauan haluat tyylin kestävän?',
        options: ['2 viikkoa', '4-6 viikkoa', 'Yli 8 viikkoa']
      },
      {
        question: 'Mikä on pääasiallinen käyttötarkoitus?',
        options: ['Arki', 'Juhla', 'Opiskelu', 'Työ', 'Loma']
      },
      {
        question: 'Kuinka paljon haluat käyttää aikaa ylläpitoon?',
        options: ['En yhtään', 'Vähän', 'Rakastan hiustenhoitoa']
      }
    ],
    results: [
      {
        name: 'Knotless Braids',
        desc: 'Täydellinen luonnolliseen, hiuspohjaa rasittamattomaan tyyliin. Kestää 4-6 viikkoa. Sopii arkeen tai lomalle.',
        image: '/knotless%20braids.jpg'
      },
      {
        name: 'Passion Twists',
        desc: 'Upea, tekstuurinen tyyli boheemilla vivahteella. Helppo ylläpitää ja sopii erinomaisesti juhliin.',
        image: '/Passion-Twist-Braids.jpeg'
      },
      {
        name: 'Cornrows / Feed-ins',
        desc: 'Tyylikäs, suojaava letitys joka on nopea tehdä ja kestää 2-3 viikkoa. Ihanteellinen nollaylläpitoon.',
        image: '/feed%20ins.jpg'
      }
    ],
    resultTitle: 'Täydellinen Valintasi',
    bookCta: 'Varaa Tämä Tyyli',
    restart: 'Tee Kysely Uudelleen',
    startQuiz: 'Löydä Tyylisi',
    introText: 'Vastaa muutamaan kysymykseen, niin suosittelemme sinulle täydellistä tyyliä.'
  }
};

const Quiz = ({ lang }) => {
  const data = quizData[lang];
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const totalSteps = data.steps.length;
  const isComplete = currentStep >= totalSteps;
  const progressPercent = isComplete ? 100 : (currentStep / totalSteps) * 100;

  const handleOptionSelect = (option) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setAnswers([...answers, option]);
    
    setTimeout(() => {
      setCurrentStep(prev => prev + 1);
      setIsAnimating(false);
    }, 400);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
  };

  const getResult = () => {
    const durationAnswer = answers[1] || '';
    if (durationAnswer.includes('2')) return data.results[2];
    if (durationAnswer.includes('4')) return data.results[0];
    return data.results[1];
  };

  if (!isQuizStarted) {
    return (
      <div className="quiz-container quiz-banner" id="style-finder">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 'var(--space-3)', color: 'var(--primary-dark)' }}>
            {lang === 'en' ? 'Not sure what to get?' : 'Etkö ole varma tyylistä?'}
          </h2>
          <p className="quiz-intro-text">{data.introText}</p>
          <button 
            className="btn-primary" 
            style={{ padding: '16px 32px', fontSize: '1.25rem' }} 
            onClick={() => setIsQuizStarted(true)}
          >
            {data.startQuiz}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container" id="style-finder">
      <p className="quiz-intro-text">{data.introText}</p>
      <div className="quiz-card">
        {/* Gold Progress Bar */}
        <div className="quiz-progress-bar">
          <div 
            className="quiz-progress-bar-fill" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="quiz-card-inner">
          {!isComplete ? (
            <div className={`quiz-step ${isAnimating ? 'slide-out' : 'slide-in'}`}>
              <div className="quiz-progress">
                Step {currentStep + 1} of {totalSteps}
              </div>
              <h2 className="quiz-question">{data.steps[currentStep].question}</h2>
              <div className="quiz-options">
                {data.steps[currentStep].options.map((option, idx) => (
                  <button 
                    key={idx} 
                    className="quiz-option-btn"
                    onClick={() => handleOptionSelect(option)}
                  >
                    <span className="option-icon">
                      {stepIcons[currentStep]?.[idx] || '•'}
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="quiz-result">
              <h2 className="quiz-result-title">{data.resultTitle}</h2>
              <div className="result-card">
                <img src={getResult().image} alt={getResult().name} className="result-image" />
                <div className="result-info">
                  <h3>{getResult().name}</h3>
                  <p>{getResult().desc}</p>
                  <Link to="/booking" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '24px' }}>
                    {data.bookCta}
                  </Link>
                  <button className="btn-secondary" style={{ display: 'block', textAlign: 'center', width: '100%', marginTop: '12px', color: 'var(--primary-dark)', borderColor: 'var(--divider-col)' }} onClick={resetQuiz}>
                    {data.restart}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

