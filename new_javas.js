// Smooth scroll function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav');
    const header = document.getElementById('header');

    // Mobile menu toggle
    mobileToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Typing animation
    const roles = ['Developer', 'Student', 'Programmer'];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const dynamicText = document.getElementById('dynamic-text');

    function typeAnimation() {
        const currentRole = roles[currentRoleIndex];
        
        if (!isDeleting && currentCharIndex < currentRole.length) {
            dynamicText.textContent = currentRole.slice(0, currentCharIndex + 1);
            currentCharIndex++;
            setTimeout(typeAnimation, 150);
        } else if (isDeleting && currentCharIndex > 0) {
            dynamicText.textContent = currentRole.slice(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(typeAnimation, 100);
        } else if (!isDeleting && currentCharIndex === currentRole.length) {
            setTimeout(() => {
                isDeleting = true;
                typeAnimation();
            }, 2000);
        } else if (isDeleting && currentCharIndex === 0) {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            isDeleting = false;
            setTimeout(typeAnimation, 200);
        }
    }

    typeAnimation();

    // Certificates data and rendering
    const certificates = [
  {
    title: "HTML",
    issuer: "CISCO",
    image: "./HTML.png",   
    level: "beginner",
    color: "glow"
  },
  {
    title: "JavaScript Advanced Concepts",
    issuer: "CISCO",
    image: "JS.png",
    level: "intermediate",
    color: "glow-secondary"
  },
  {
    title: "CSS",
    issuer: "CISCO",
    image: "CSS.png",
    level: "intermediate",
    color: "accent"
  },
  {
    title: "Python Programming",
    issuer: "Python ",
    image: "Python.png",
    level: "intermediate",
    color: "glow"
  },
  {
    title: "JAVA",
    issuer: "JAVA FOUNDATIONS",
    image: "JAVA.png",
    level: "intermediate",
    color: "glow-secondary"
  },
  {
    title: "SQL",
    issuer: "CISCO",
    image: "sql.png",
    level: "beginner",
    color: "accent"
  }
];

function renderCertificates() {
    const certificatesGrid = document.getElementById('certificates-grid');
    certificatesGrid.innerHTML = '';

    certificates.forEach((cert, index) => {
        const certCard = document.createElement('div');
        certCard.className = 'certificate-card cosmic-card';
        certCard.style.animationDelay = `${index * 0.1}s`;

        certCard.innerHTML = `
            <div class="cert-badge">#${index + 1}</div>
            <div class="cert-content">
                <h3 class="${cert.color}-text">${cert.title}</h3>
                <p class="cert-issuer">${cert.issuer}</p>
                <div class="cert-image">
                    <img src="${cert.image}" alt="${cert.title}">
                </div>
                <div class="cert-footer">
                    <span class="cert-level ${cert.level}">
                        ${cert.level.charAt(0).toUpperCase() + cert.level.slice(1)}
                    </span>
                    <div class="cert-dots">
                        <div class="dot" style="background: #00bcd4; animation-delay: 0s;"></div>
                        <div class="dot" style="background: #ffeb3b; animation-delay: 0.2s;"></div>
                        <div class="dot" style="background: #e91e63; animation-delay: 0.4s;"></div>
                    </div>
                </div>
            </div>
        `;

        certificatesGrid.appendChild(certCard);
    });
}


    // Skills data and rendering
    const skills = [
        {
            name: "C",
            level: 85,
            category: "programming",
            icon: "💾",
            description: "Strong foundation in C programming with system-level programming experience"
        },
        {
            name: "Java", 
            level: 80,
            category: "programming",
            icon: "☕",
            description: "Object-oriented programming and application development"
        },
        {
            name: "Python",
            level: 90,
            category: "programming", 
            icon: "🐍",
            description: "Versatile programming for web development, scripting, and automation"
        },
        {
            name: "HTML",
            level: 95,
            category: "web",
            icon: "🌐", 
            description: "Semantic markup and modern HTML5 features"
        },
        {
            name: "CSS",
            level: 90,
            category: "web",
            icon: "🎨",
            description: "Responsive design, animations, and modern CSS frameworks"
        },
        {
            name: "JavaScript",
            level: 85,
            category: "web",
            icon: "⚡",
            description: "ES6+, DOM manipulation, and modern JavaScript frameworks"
        }
    ];

    function getSkillLevel(level) {
        if (level >= 90) return 'Expert';
        if (level >= 75) return 'Advanced';
        return 'Intermediate';
    }

    function renderSkills() {
        const programmingSkills = document.getElementById('programming-skills');
        const webSkills = document.getElementById('web-skills');
        
        programmingSkills.innerHTML = '';
        webSkills.innerHTML = '';

        skills.forEach((skill, index) => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card cosmic-card';
            skillCard.style.animationDelay = `${index * 0.1}s`;

            const dotsHtml = Array.from({length: 5}, (_, i) => 
                `<div class="dot ${i < Math.ceil(skill.level / 20) ? 'active' : ''}"></div>`
            ).join('');

            skillCard.innerHTML = `
                <div class="skill-header">
                    <div class="skill-icon">${skill.icon}</div>
                    <div class="skill-info">
                        <h4>${skill.name}</h4>
                        <p class="skill-proficiency">${skill.level}% Proficiency</p>
                    </div>
                </div>
                <div class="skill-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%; animation-delay: ${index * 0.2}s;"></div>
                    </div>
                </div>
                <p class="skill-description">${skill.description}</p>
                <div class="skill-footer">
                    <div class="skill-dots">${dotsHtml}</div>
                    <span class="skill-level">${getSkillLevel(skill.level)}</span>
                </div>
            `;

            if (skill.category === 'programming') {
                programmingSkills.appendChild(skillCard);
            } else {
                webSkills.appendChild(skillCard);
            }

            // Animate progress bar
            setTimeout(() => {
                const progressFill = skillCard.querySelector('.progress-fill');
                progressFill.style.width = `${skill.level}%`;
            }, (index * 200) + 500);
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    function observeElements() {
        const elementsToObserve = document.querySelectorAll('.cosmic-card, .stat-card, .certificate-card, .skill-card');
        elementsToObserve.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Parallax effect for floating elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-element');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Particle effect on mouse move
    document.addEventListener('mousemove', (e) => {
        createParticle(e.clientX, e.clientY);
    });

    function createParticle(x, y) {
        if (Math.random() > 0.95) { // Only create particles occasionally
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = '#00bcd4';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.opacity = '0.8';
            particle.style.animation = 'particle-fade 1s ease-out forwards';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }

    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particle-fade {
            0% {
                opacity: 0.8;
                transform: scale(1) translateY(0);
            }
            100% {
                opacity: 0;
                transform: scale(0.5) translateY(-20px);
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize everything
    renderCertificates();
    renderSkills();
    setTimeout(observeElements, 100);

    // Add custom cursor effect
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(0,188,212,0.5) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = (e.clientX - 10) + 'px';
        cursor.style.top = (e.clientY - 10) + 'px';
    });

    // Add hover effects for interactive elements
    document.querySelectorAll('a, button, .cosmic-card').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });

    console.log('🌟 Cosmic Portfolio Initialized! Welcome to the universe of possibilities!');
});