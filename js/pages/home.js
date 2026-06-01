// Career and Technology Data
const CareerData = {
  frontend: {
    title: 'Frontend Developer',
    overview: 'Build beautiful, interactive user interfaces and web applications.',
    icon: '🎨',
    skills: [
      'HTML5 & Semantic Markup',
      'CSS3 & Responsive Design',
      'JavaScript (ES6+)',
      'React or Vue.js',
      'State Management',
      'API Integration',
      'Testing & Debugging'
    ],
    tools: ['VS Code', 'Chrome DevTools', 'Figma', 'Git', 'Webpack', 'npm'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind'],
    projects: [
      { title: 'Portfolio Website', difficulty: 'Beginner' },
      { title: 'E-commerce Store UI', difficulty: 'Intermediate' },
      { title: 'Netflix Clone', difficulty: 'Advanced' }
    ],
    salaryEntry: '$60K - $80K',
    salaryMid: '$90K - $130K',
    salaryExpert: '$150K+',
    companies: ['Google', 'Meta', 'Netflix', 'Airbnb', 'Spotify']
  },
  backend: {
    title: 'Backend Developer',
    overview: 'Build robust server-side applications, APIs, and databases.',
    icon: '⚙️',
    skills: [
      'Server-Side Programming',
      'Database Design & SQL',
      'RESTful API Development',
      'Authentication & Security',
      'Scalability & Performance',
      'Cloud Services',
      'DevOps Basics'
    ],
    tools: ['VS Code', 'Postman', 'MySQL', 'MongoDB', 'Git', 'Docker'],
    technologies: ['Node.js', 'Python', 'Java', 'SQL', 'Redis', 'AWS'],
    projects: [
      { title: 'REST API', difficulty: 'Beginner' },
      { title: 'Social Media Backend', difficulty: 'Intermediate' },
      { title: 'Scalable E-commerce API', difficulty: 'Advanced' }
    ],
    salaryEntry: '$65K - $85K',
    salaryMid: '$100K - $140K',
    salaryExpert: '$160K+',
    companies: ['Amazon', 'Google', 'Microsoft', 'LinkedIn', 'Uber']
  },
  fullstack: {
    title: 'Full Stack Developer',
    overview: 'Master both frontend and backend - build complete applications.',
    icon: '🚀',
    skills: [
      'Frontend Technologies',
      'Backend Technologies',
      'Database Management',
      'DevOps & Deployment',
      'System Design',
      'Full Development Cycle',
      'Project Management'
    ],
    tools: ['VS Code', 'Git', 'Docker', 'AWS', 'MongoDB', 'Postman'],
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker'],
    projects: [
      { title: 'Todo App with Backend', difficulty: 'Beginner' },
      { title: 'Complete Social Platform', difficulty: 'Intermediate' },
      { title: 'SaaS Application', difficulty: 'Advanced' }
    ],
    salaryEntry: '$70K - $90K',
    salaryMid: '$110K - $150K',
    salaryExpert: '$170K+',
    companies: ['Airbnb', 'Stripe', 'GitHub', 'Shopify', 'Figma']
  },
  database: {
    title: 'Database Developer',
    overview: 'Design and manage robust, scalable database systems.',
    icon: '🗄️',
    skills: [
      'SQL & Query Optimization',
      'Database Design',
      'Indexing & Performance',
      'Backup & Recovery',
      'Data Modeling',
      'NoSQL Databases',
      'Database Administration'
    ],
    tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'DBeaver', 'pgAdmin'],
    technologies: ['SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Cassandra', 'Oracle'],
    projects: [
      { title: 'Database Schema Design', difficulty: 'Beginner' },
      { title: 'Query Optimization Project', difficulty: 'Intermediate' },
      { title: 'High-Scale DB System', difficulty: 'Advanced' }
    ],
    salaryEntry: '$68K - $88K',
    salaryMid: '$105K - $145K',
    salaryExpert: '$155K+',
    companies: ['Amazon', 'Google', 'Oracle', 'Meta', 'Microsoft']
  },
  mern: {
    title: 'MERN Stack Developer',
    overview: 'Specialize in MongoDB, Express, React, and Node.js stack.',
    icon: '⚡',
    skills: [
      'MongoDB & NoSQL',
      'Express.js Backend',
      'React Frontend',
      'Node.js Runtime',
      'REST APIs',
      'Authentication',
      'Deployment'
    ],
    tools: ['VS Code', 'MongoDB Compass', 'Postman', 'npm', 'Git', 'Vercel'],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Webpack'],
    projects: [
      { title: 'Chat Application', difficulty: 'Beginner' },
      { title: 'E-commerce Platform', difficulty: 'Intermediate' },
      { title: 'SaaS Dashboard', difficulty: 'Advanced' }
    ],
    salaryEntry: '$65K - $85K',
    salaryMid: '$95K - $135K',
    salaryExpert: '$155K+',
    companies: ['Startup Companies', 'Freelance', 'Tech Startups', 'Agencies']
  },
  mobile: {
    title: 'Mobile App Developer',
    overview: 'Build iOS and Android apps for millions of users.',
    icon: '📱',
    skills: [
      'React Native or Flutter',
      'Mobile UI/UX',
      'Native APIs',
      'App Performance',
      'Cross-platform Development',
      'App Store Deployment',
      'Push Notifications'
    ],
    tools: ['Android Studio', 'Xcode', 'VS Code', 'Firebase', 'Git', 'Postman'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
    projects: [
      { title: 'Weather App', difficulty: 'Beginner' },
      { title: 'Social App', difficulty: 'Intermediate' },
      { title: 'Banking App', difficulty: 'Advanced' }
    ],
    salaryEntry: '$68K - $88K',
    salaryMid: '$105K - $145K',
    salaryExpert: '$160K+',
    companies: ['Apple', 'Google', 'Meta', 'Uber', 'Netflix']
  },
  uxui: {
    title: 'UI/UX Designer',
    overview: 'Create beautiful and intuitive user experiences.',
    icon: '🎭',
    skills: [
      'UI Design Principles',
      'User Research',
      'Prototyping',
      'Wireframing',
      'Design Systems',
      'Usability Testing',
      'Interaction Design'
    ],
    tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Protopie', 'Illustrator'],
    technologies: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'HTML/CSS'],
    projects: [
      { title: 'Mobile App Design', difficulty: 'Beginner' },
      { title: 'Website Redesign', difficulty: 'Intermediate' },
      { title: 'Design System', difficulty: 'Advanced' }
    ],
    salaryEntry: '$55K - $75K',
    salaryMid: '$85K - $125K',
    salaryExpert: '$140K+',
    companies: ['Google', 'Apple', 'Meta', 'Airbnb', 'Figma']
  },
  aiml: {
    title: 'AI/ML Engineer',
    overview: 'Build intelligent systems with machine learning and AI.',
    icon: '🤖',
    skills: [
      'Python Programming',
      'Machine Learning',
      'Deep Learning',
      'Data Analysis',
      'Statistics',
      'TensorFlow/PyTorch',
      'Model Deployment'
    ],
    tools: ['Python', 'Jupyter', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Google Colab'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Keras'],
    projects: [
      { title: 'Sentiment Analysis', difficulty: 'Beginner' },
      { title: 'Image Classification', difficulty: 'Intermediate' },
      { title: 'NLP Transformer', difficulty: 'Advanced' }
    ],
    salaryEntry: '$80K - $110K',
    salaryMid: '$130K - $180K',
    salaryExpert: '$200K+',
    companies: ['Google', 'Meta', 'OpenAI', 'DeepMind', 'Tesla']
  },
  devops: {
    title: 'DevOps Engineer',
    overview: 'Manage infrastructure, deployment, and system reliability.',
    icon: '🔧',
    skills: [
      'Cloud Platforms (AWS/GCP)',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'System Administration',
      'Monitoring & Logging',
      'Security'
    ],
    tools: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS', 'Git'],
    technologies: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux', 'Terraform'],
    projects: [
      { title: 'Docker Setup', difficulty: 'Beginner' },
      { title: 'Kubernetes Cluster', difficulty: 'Intermediate' },
      { title: 'Full Infrastructure', difficulty: 'Advanced' }
    ],
    salaryEntry: '$75K - $95K',
    salaryMid: '$115K - $155K',
    salaryExpert: '$175K+',
    companies: ['Amazon', 'Google', 'Microsoft', 'Netflix', 'Spotify']
  }
};

// Technology Showcase Data
const TechnologyData = [
  {
    name: 'JavaScript',
    icon: '📝',
    description: 'Versatile programming language for web development',
    difficulty: 'Easy',
    projects: 50,
    page: 'learn.html#javascript'
  },
  {
    name: 'React',
    icon: '⚛️',
    description: 'Modern UI library for building interactive applications',
    difficulty: 'Medium',
    projects: 25,
    page: 'learn.html#react'
  },
  {
    name: 'Python',
    icon: '🐍',
    description: 'Powerful language for backend and data science',
    difficulty: 'Easy',
    projects: 30,
    page: 'learn.html#python'
  },
  {
    name: 'CSS',
    icon: '🎨',
    description: 'Styling and layout for beautiful web interfaces',
    difficulty: 'Easy',
    projects: 40,
    page: 'learn.html#css'
  },
  {
    name: 'Node.js',
    icon: '🚀',
    description: 'JavaScript runtime for server-side applications',
    difficulty: 'Medium',
    projects: 20,
    page: 'learn.html#nodejs'
  },
  {
    name: 'HTML',
    icon: '🏗️',
    description: 'Semantic markup for web page structure',
    difficulty: 'Easy',
    projects: 45,
    page: 'learn.html#html'
  },
  {
    name: 'TypeScript',
    icon: '📘',
    description: 'Typed superset of JavaScript for scalable code',
    difficulty: 'Medium',
    projects: 18,
    page: 'learn.html#typescript'
  },
  {
    name: 'SQL',
    icon: '🗄️',
    description: 'Database querying and management language',
    difficulty: 'Medium',
    projects: 22,
    page: 'learn.html#sql'
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    description: 'NoSQL database for flexible data storage',
    difficulty: 'Medium',
    projects: 15,
    page: 'learn.html#mongodb'
  },
  {
    name: 'Git',
    icon: '🔀',
    description: 'Version control system for collaborative development',
    difficulty: 'Easy',
    projects: 35,
    page: 'learn.html#git'
  },
  {
    name: 'Docker',
    icon: '🐳',
    description: 'Containerization platform for consistent deployments',
    difficulty: 'Hard',
    projects: 12,
    page: 'learn.html#docker'
  },
  {
    name: 'AWS',
    icon: '☁️',
    description: 'Cloud computing platform for scalable infrastructure',
    difficulty: 'Hard',
    projects: 16,
    page: 'learn.html#aws'
  }
];

// Home Page Logic
const HomePage = {
  init() {
    this.renderCareerDetails();
    this.renderTechGrid();
  },

  renderCareerDetails() {
    const careerDetails = document.getElementById('careerDetails');
    const careerBtns = document.querySelectorAll('.career-btn');
    
    const updateCareerDisplay = (careerKey) => {
      const career = CareerData[careerKey];
      if (!career) return;

      const html = `
        <div class="career-detail-card">
          <h3>${career.icon} Overview</h3>
          <p>${career.overview}</p>
        </div>

        <div class="career-detail-card">
          <h3>Required Skills</h3>
          <ul>
            ${career.skills.map(skill => `<li>${skill}</li>`).join('')}
          </ul>
        </div>

        <div class="career-detail-card">
          <h3>Tools & Platforms</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${career.tools.map(tool => `<span class="badge badge-primary">${tool}</span>`).join('')}
          </div>
        </div>

        <div class="career-detail-card">
          <h3>Technologies</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${career.technologies.map(tech => `<span class="badge badge-secondary">${tech}</span>`).join('')}
          </div>
        </div>

        <div class="career-detail-card">
          <h3>Beginner Projects</h3>
          <ul>
            ${career.projects.slice(0, 3).map(proj => `<li>${proj.title}</li>`).join('')}
          </ul>
        </div>

        <div class="career-detail-card">
          <h3>💼 Salary Ranges</h3>
          <div class="salary-range">
            <h4>Entry Level</h4>
            <p style="margin: 0; font-weight: bold; color: var(--color-success);">${career.salaryEntry}</p>
          </div>
          <div class="salary-range" style="border-left-color: var(--color-accent);">
            <h4 style="color: var(--color-accent);">Mid Level</h4>
            <p style="margin: 0; font-weight: bold; color: var(--color-accent);">${career.salaryMid}</p>
          </div>
          <div class="salary-range" style="border-left-color: var(--color-primary);">
            <h4 style="color: var(--color-primary);">Expert Level</h4>
            <p style="margin: 0; font-weight: bold; color: var(--color-primary);">${career.salaryExpert}</p>
          </div>
        </div>

        <div class="career-detail-card">
          <h3>Top Companies</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${career.companies.map(company => `<span class="badge" style="background-color: rgba(37, 99, 235, 0.15); color: var(--color-primary);">${company}</span>`).join('')}
          </div>
        </div>
      `;

      careerDetails.innerHTML = html;
    };

    // Initial render
    updateCareerDisplay('frontend');

    // Add click listeners to career buttons
    careerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        careerBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Update display
        updateCareerDisplay(btn.dataset.career);
      });
    });
  },

  renderTechGrid() {
    const techGrid = document.getElementById('techGrid');
    
    const html = TechnologyData.map(tech => `
      <div class="tech-card" onclick="window.location.href='${tech.page}'">
        <div class="tech-icon">${tech.icon}</div>
        <h3>${tech.name}</h3>
        <p>${tech.description}</p>
        <div class="tech-meta">
          <div class="tech-meta-item">
            <strong>${tech.difficulty}</strong>
            <span>Difficulty</span>
          </div>
          <div class="tech-meta-item">
            <strong>${tech.projects}</strong>
            <span>Projects</span>
          </div>
        </div>
      </div>
    `).join('');

    techGrid.innerHTML = html;
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  HomePage.init();
});
