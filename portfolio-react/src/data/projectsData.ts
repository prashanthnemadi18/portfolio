import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'agroguard',
    title: 'AgroGuard AI',
    subtitle: 'Smart Crop Disease Detection System',
    description: [
      'AI-powered crop disease detection using CNN with real-time weather integration.',
      'Detects 10+ diseases across Pepper, Potato, and Tomato crops.',
      'Provides confidence scores and treatment recommendations for farmers.'
    ],
    domain: 'AI & Agriculture',
    stack: ['Python', 'TensorFlow/Keras', 'Flask', 'CNN', 'OpenWeatherMap API'],
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800',
    gallery: [
      '/agroguard-ai/home.png',
      '/agroguard-ai/sign-in.png',
      '/agroguard-ai/dashboard.png',
      '/agroguard-ai/ai-analysis.png',
      '/agroguard-ai/ai-assistant.png',
      '/agroguard-ai/environment.png',
      '/agroguard-ai/performance.png',
      '/agroguard-ai/how-it-works.png'
    ]
  },
  {
    id: 'online-exam',
    title: 'AI-Based Online Examination System',
    subtitle: 'Published in IJIRT (Impact Factor 8.017)',
    description: [
      'Next.js exam platform with Google Gemini AI for auto-generating MCQs.',
      'Integrated anti-cheating features and secure exam timer.',
      'Built-in PDF exporters for question papers and student results.'
    ],
    domain: 'AI & Education',
    stack: ['Next.js', 'React', 'TypeScript', 'Gemini AI', 'jsPDF'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    gallery: [
      '/ai-exam/home.jpg',
      '/ai-exam/teacher-login.jpg',
      '/ai-exam/create-exam.jpg',
      '/ai-exam/teacher-dashboard.jpg',
      '/ai-exam/registration-link.jpg',
      '/ai-exam/registration.jpg',
      '/ai-exam/registration-completed.jpg',
      '/ai-exam/instructions.jpg',
      '/ai-exam/exam-interface.jpg',
      '/ai-exam/exam-submitted.jpg',
      '/ai-exam/result.jpg',
      '/ai-exam/complete-result.jpg',
      '/ai-exam/student-list.jpg'
    ]
  },
  {
    id: 'ai-resume',
    title: 'AI Resume Builder',
    subtitle: 'ATS Optimization & Real-Time Scoring',
    description: [
      'Modern AI-powered resume builder with multiple professional templates.',
      'Integrated Google Gemini AI for professional content generation and auto-save.',
      'Secure JWT authentication and real-time ATS scoring system.'
    ],
    domain: 'AI & HR Tech',
    stack: ['React', 'Spring Boot', 'Gemini AI', 'PostgreSQL', 'JWT'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    gallery: [
      '/AI-resume/landing-page.png',
      '/AI-resume/power-features-for-job-seekers.png',
      '/AI-resume/create-account.png',
      '/AI-resume/dashboard.png',
      '/AI-resume/candidate-dashborad.png',
      '/AI-resume/persnol-details.png',
      '/AI-resume/professional-narrative.png',
      '/AI-resume/education.png',
      '/AI-resume/work-experience.png',
      '/AI-resume/projects.png',
      '/AI-resume/skills.png',
      '/AI-resume/achievements.png',
      '/AI-resume/certifications.png',
      '/AI-resume/complete-resume.png',
      '/AI-resume/check-ats-resume-score.png',
      '/AI-resume/candidate-dashborad-after.png'
    ]
  },
  {
    id: 'food-waste',
    title: 'Food Waste Reimagined',
    subtitle: 'Agriculture & Sustainability Platform',
    description: [
      'Intelligent platform to predict food expiration and reduce waste.',
      'Built with Scikit-Learn expiry models and Flask backend for item tracking.',
      'Includes community food donation features for NGOs and local organizations.'
    ],
    domain: 'Sustainability',
    stack: ['Python', 'Flask', 'Scikit-Learn', 'React', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    gallery: [
      '/food-waste/home.jfif',
      '/food-waste/login.jfif',
      '/food-waste/dashboard.jfif',
      '/food-waste/add-item.jfif',
      '/food-waste/show-item.jfif',
      '/food-waste/ai-suggestion.jfif',
      '/food-waste/how-it-works.png'
    ]
  },
  {
    id: 'legal-risk',
    title: 'LegalRisk AI Platform',
    subtitle: 'Contract Review & Risk Assessment',
    description: [
      'AI-powered legal risk assessment system using NLP for contract review.',
      'Provides automated risk scoring and compliance checking for legal documents.',
      'Includes secure document management and detailed reporting features.'
    ],
    domain: 'AI & Legal Tech',
    stack: ['Python', 'NLP', 'Flask', 'AI/ML'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    gallery: [
      '/LegalRisk AI Platform/Home page.png',
      '/LegalRisk AI Platform/_login page.png',
      '/LegalRisk AI Platform/dashboard page.png',
      '/LegalRisk AI Platform/risk-dashboard page.png',
      '/LegalRisk AI Platform/analysis page.png',
      '/LegalRisk AI Platform/Identified Risk Factors page.png',
      '/LegalRisk AI Platform/risk facrors 3 page.png',
      '/LegalRisk AI Platform/Strategic Recommendations page.png',
      '/LegalRisk AI Platform/Export & Documentation page.png',
      '/LegalRisk AI Platform/risk factor pdf documentation.png'
    ]
  },
  {
    id: 'smart-hire',
    title: 'Smart Hire ATS',
    subtitle: 'AI-Powered Applicant Tracking System',
    description: [
      'Comprehensive applicant tracking and recruitment management platform with AI-powered features.',
      'Advanced resume parsing and candidate scoring for intelligent hiring decisions.',
      'Integrated analytics dashboard for HR teams with real-time insights and reporting.'
    ],
    domain: 'AI & HR Tech',
    stack: ['React', 'Node.js', 'AI/ML', 'PostgreSQL', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    gallery: [
      '/smart-hire/landing-page.png',
      '/smart-hire/step-rpocess.png',
      '/smart-hire/create-account.png',
      '/smart-hire/sign-in.png',
      '/smart-hire/candidate-dashborad.png',
      '/smart-hire/candidate-jobs-list.png',
      '/smart-hire/applythe-job-using-resume.png',
      '/smart-hire/uploded-the-resume.png',
      '/smart-hire/candidate-applied-successfully.png',
      '/smart-hire/Hr-dashborad.png',
      '/smart-hire/hr-jobpost-and-view-the-applications.png',
      '/smart-hire/hr-see-the-application-and-candidate-resume.png',
      '/smart-hire/advaced-ai.png',
      '/smart-hire/hr-analyised-the-dashborad.png'
    ]
  },
  {
    id: 'ai-quiz',
    title: 'AI Quiz Platform',
    subtitle: 'Interactive Learning & Assessment',
    description: [
      'Interactive quiz platform with AI-generated questions and real-time scoring.',
      'Includes a leaderboard system and multiple difficulty levels for engagement.',
      'Responsive design optimized for both desktop and mobile users.'
    ],
    domain: 'AI & Gamification',
    stack: ['React', 'Node.js', 'AI', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    gallery: [
      '/AI Quiz Platform/Home page.png',
      '/AI Quiz Platform/login page.png',
      '/AI Quiz Platform/Dashborad page.png',
      '/AI Quiz Platform/power full ai features.png',
      '/AI Quiz Platform/take a quiz page.png',
      '/AI Quiz Platform/start the quiz.png',
      '/AI Quiz Platform/quiz question page.png',
      '/AI Quiz Platform/quiz completed page.png',
      '/AI Quiz Platform/downloded the result page.png',
      '/AI Quiz Platform/analytics page.png'
    ]
  },
  {
    id: 'ai-recruitment',
    title: 'AI Recruitment System',
    subtitle: 'Intelligent Candidate Matching',
    description: [
      'ML-powered candidate matching with automated resume screening and ranking.',
      'Video interview analysis with sentiment detection and predictive analytics.',
      'Advanced reporting features for tracking recruitment success metrics.'
    ],
    domain: 'AI Recruitment',
    stack: ['Python', 'TensorFlow', 'Flask', 'React'],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
    gallery: [
      '/AI Recruitment System/home page.png',
      '/AI Recruitment System/register page.png',
      '/AI Recruitment System/candidate page.png',
      '/AI Recruitment System/uploded the resume page.png',
      '/AI Recruitment System/extract the information page.png',
      '/AI Recruitment System/my appication candidate page.png',
      '/AI Recruitment System/hr dashborad page.png'
    ]
  }
];
