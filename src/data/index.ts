import { Project, Experience, Education, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Burger Ordering App',
    description: 'Full-stack app with React, Node, MongoDB, and Kotlin. Includes Android app and OAuth2 email system.',
    tech: ['React', 'Node.js', 'MongoDB', 'Kotlin'],
    demoLink: 'https://glorytaste.netlify.app',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Diabetes Prediction Web App',
    description: 'Flask-based web app using Python machine learning libraries for predictions.',
    tech: ['Python', 'Flask', 'Machine Learning'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Football News Blog',
    description: 'Next.js blog with MongoDB, Cloudinary, and VPS deployment (Ubuntu, Nginx, PM2).',
    tech: ['Next.js', 'MongoDB', 'Cloudinary'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Car Rental Website',
    description: 'Spring Boot and React.js app with JWT and role-based authentication.',
    tech: ['Spring Boot', 'React.js', 'MySQL', 'JWT'],
    demoLink: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=800&q=80'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'GIC Myanmar Co., Ltd',
    position: 'Full-stack Developer Intern',
    duration: 'Dec 2024 – March 2025',
    description: [
      'Built full-stack apps with Spring Boot, React.js, and MySQL',
      'Collaborated on frontend-backend integration',
      'Documentation and low-code development'
    ]
  },
  {
    id: '2',
    company: 'Pathway Plus - Education Research Center',
    position: 'Backend Developer',
    duration: 'Jan 2023 – July 2023',
    description: [
      'Developed backend systems with Next.js, Node.js, Express.js, and MongoDB',
      'Implemented secure APIs and authentication systems',
      'Deployed server applications on VPS'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    school: 'Myanmar Institute of Information Technology',
    degree: 'Bachelor of Engineering (Honors) in Computer Science & Engineering',
    duration: '2016 - 2025',
    description: 'Expected graduation in 2025'
  }
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', icon: 'Frame' },
      { name: 'Next.js', icon: 'LayoutTemplate' },
      { name: 'HTML/CSS', icon: 'Code2' },
      { name: 'JavaScript', icon: 'FileJson' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'Server' },
      { name: 'Express.js', icon: 'Network' },
      { name: 'Spring Boot', icon: 'Leaf' },
      { name: 'Java', icon: 'Coffee' }
    ]
  },
  {
    category: 'Mobile',
    items: [
      { name: 'Kotlin (Android)', icon: 'Smartphone' },
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: 'Database' },
      { name: 'MySQL', icon: 'Database' },
      { name: 'PostgreSQL', icon: 'Database' }
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'Docker', icon: 'Box' },
      { name: 'AWS', icon: 'Cloud' }
    ]
  }
];

export const personalInfo = {
  name: "Myat Thura Soe",
  title: "Full-Stack Web Developer",
  bio: "Aspiring software developer focused on web and mobile development. Experienced in building responsive web applications using MERN stack & Spring Boot for Web and Kotlin for Android. Passionate about clean, scalable code and collaborative growth.",
  contact: {
    phone: "+959776697907",
    email: "myatthu.dev@gmail.com",
    address: "Chanayetharsan, Mandalay, Myanmar",
    linkedin: "https://linkedin.com/in/myatthurasoe",
    github: "https://github.com/MyatThuraSoe"
  }
};