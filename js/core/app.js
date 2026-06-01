// Core Application Module
const App = {
  // Initialize application
  init() {
    this.setupTheme();
    this.setupNavigation();
    this.setupSearch();
    this.setupScrollToTop();
    this.setupAIAssistant();
    this.loadStoredData();
  },

  // Theme Management
  setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('cwf-theme') || 'light';
    this.setTheme(savedTheme, html, sunIcon, moonIcon);

    // Theme toggle listener
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme, html, sunIcon, moonIcon);
      localStorage.setItem('cwf-theme', newTheme);
    });
  },

  setTheme(theme, html, sunIcon, moonIcon) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      html.removeAttribute('data-theme');
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  },

  // Navigation Management
  setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbarMenu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navbarMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbarMenu.classList.remove('active');
      });
    });

    // Update active nav link based on current page
    this.updateActiveNavLink();
  },

  updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href').split('/').pop();
      if (href === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },

  // Search Functionality
  setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');

    searchBtn.addEventListener('click', () => {
      searchModal.classList.add('active');
      searchInput.focus();
    });

    searchClose.addEventListener('click', () => {
      searchModal.classList.remove('active');
    });

    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        searchModal.classList.remove('active');
      }
    });

    searchInput.addEventListener('input', (e) => {
      this.performSearch(e.target.value);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        searchModal.classList.remove('active');
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchModal.classList.add('active');
        searchInput.focus();
      }
    });
  },

  performSearch(query) {
    const searchResults = document.getElementById('searchResults');
    
    if (!query.trim()) {
      searchResults.innerHTML = '';
      return;
    }

    // Mock search results - in production, this would search actual data
    const results = [
      { title: 'JavaScript Basics', page: 'learn.html#javascript' },
      { title: 'React Tutorial', page: 'learn.html#react' },
      { title: 'CSS Flexbox', page: 'learn.html#flexbox' },
      { title: 'HTML5 Guide', page: 'learn.html#html' },
      { title: 'Web Development Roadmap', page: 'learn.html#roadmap' }
    ].filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length === 0) {
      searchResults.innerHTML = '<div style="padding: 16px; text-align: center; color: var(--color-text-secondary);">No results found</div>';
      return;
    }

    searchResults.innerHTML = results.map(result => 
      `<a href="${result.page}" class="search-result-item">
        <strong>${result.title}</strong>
      </a>`
    ).join('');

    // Close modal on result click
    document.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        document.getElementById('searchModal').classList.remove('active');
      });
    });
  },

  // Scroll to Top Button
  setupScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
      } else {
        scrollToTopBtn.classList.remove('show');
      }
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  },

  // AI Assistant Setup
  setupAIAssistant() {
    const aiAssistantToggle = document.getElementById('aiAssistantToggle');
    const aiCtaBtn = document.getElementById('aiCtaBtn');
    const aiAssistant = document.getElementById('aiAssistant');
    const aiClose = document.getElementById('aiClose');
    const aiSend = document.getElementById('aiSend');
    const aiInput = document.getElementById('aiInput');

    const openAI = () => {
      aiAssistant.classList.add('show');
      aiInput.focus();
    };

    const closeAI = () => {
      aiAssistant.classList.remove('show');
    };

    aiAssistantToggle.addEventListener('click', (e) => {
      e.preventDefault();
      openAI();
    });

    aiCtaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openAI();
    });

    aiClose.addEventListener('click', closeAI);

    aiSend.addEventListener('click', () => {
      const message = aiInput.value.trim();
      if (message) {
        this.sendAIMessage(message);
        aiInput.value = '';
      }
    });

    aiInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const message = aiInput.value.trim();
        if (message) {
          this.sendAIMessage(message);
          aiInput.value = '';
        }
      }
    });
  },

  sendAIMessage(message) {
    const aiMessages = document.getElementById('aiMessages');
    
    // Add user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'ai-message ai-message-user';
    userMessageDiv.innerHTML = `<p>${this.escapeHTML(message)}</p>`;
    aiMessages.appendChild(userMessageDiv);

    // Save to storage
    this.saveAIHistory(message);

    // Simulate AI response
    setTimeout(() => {
      const botMessageDiv = document.createElement('div');
      botMessageDiv.className = 'ai-message ai-message-bot';
      const response = this.getAIResponse(message);
      botMessageDiv.innerHTML = `<p>${response}</p>`;
      aiMessages.appendChild(botMessageDiv);
      
      // Scroll to bottom
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }, 500);

    // Scroll to bottom
    aiMessages.scrollTop = aiMessages.scrollHeight;
  },

  getAIResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('hello') || msg.includes('hi')) {
      return "👋 Hello! How can I help you with your coding journey today?";
    } else if (msg.includes('javascript')) {
      return "📚 JavaScript is a versatile language used for web development. You can learn it in our <strong>Learn</strong> section. Would you like recommendations for JavaScript projects?";
    } else if (msg.includes('project') || msg.includes('build')) {
      return "🚀 We have 50 complete, production-ready projects from beginner to advanced level. Check out our <strong>Projects</strong> page to start building!";
    } else if (msg.includes('roadmap')) {
      return "🗺️ Our roadmaps guide you from zero to job-ready in specific tech stacks. Which career path interests you? Frontend, Backend, Full Stack, or something else?";
    } else if (msg.includes('help') || msg.includes('how')) {
      return "💡 I can help with:\n- Learning recommendations\n- Project ideas\n- Career guidance\n- Interview prep\n- Error debugging\n\nWhat would you like help with?";
    } else {
      return "🤖 That's interesting! I'm still learning. For now, try asking about specific technologies, projects, or career paths. How can I help you grow as a developer?";
    }
  },

  saveAIHistory(message) {
    let history = JSON.parse(localStorage.getItem('cwf-ai-history') || '[]');
    history.push({
      timestamp: new Date().toISOString(),
      message: message
    });
    // Keep only last 50 messages
    if (history.length > 50) {
      history = history.slice(-50);
    }
    localStorage.setItem('cwf-ai-history', JSON.stringify(history));
  },

  // Utility Methods
  loadStoredData() {
    // Load saved progress, bookmarks, etc.
    const savedData = localStorage.getItem('cwf-user-data');
    if (savedData) {
      const userData = JSON.parse(savedData);
      // Use stored data as needed
    }
  },

  escapeHTML(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  },

  // Storage helper
  saveUserData(key, value) {
    let userData = JSON.parse(localStorage.getItem('cwf-user-data') || '{}');
    userData[key] = value;
    localStorage.setItem('cwf-user-data', JSON.stringify(userData));
  },

  getUserData(key) {
    const userData = JSON.parse(localStorage.getItem('cwf-user-data') || '{}');
    return userData[key];
  }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
