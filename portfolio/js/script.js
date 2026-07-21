// Custom Cursor
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Subtle delay for outline
    setTimeout(() => {
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    }, 50);
});

document.querySelectorAll('a, button, .glass-card, .tech-icon').forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
    });
});

// Theme Toggle (Dark/Light)
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Read theme from localStorage or default to HTML data-theme attribute
const savedTheme = localStorage.getItem('theme') || htmlElement.getAttribute('data-theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);

// Initialize toggle icon
if (themeToggle) {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

function updateLogos(theme) {
    const brandImages = document.querySelectorAll('.brand img');
    brandImages.forEach(img => {
        if (theme === 'light') {
            img.src = 'img/logoblanco.png';
        } else {
            img.src = 'img/logo.png';
        }
    });
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update icon (keep moon icon)
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

    // Update particles color
    initParticles(newTheme);

    // Update logo images
    updateLogos(newTheme);
});

// Initialize logo based on initial theme
updateLogos(savedTheme);

// Particles JS Initialization
function initParticles(theme) {
    const color = theme === 'dark' ? '#ffffff' : '#4f46e5';
    const opacity = theme === 'dark' ? 0.3 : 0.2;

    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": color },
            "shape": { "type": "circle" },
            "opacity": { "value": opacity, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": color,
                "opacity": opacity * 0.5,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                "push": { "particles_nb": 3 }
            }
        },
        "retina_detect": true
    });
}

// Initialize particles on load
initParticles(savedTheme);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
        backToTop.classList.add('visible');
    } else {
        navbar.classList.remove('nav-scrolled');
        backToTop.classList.remove('visible');
    }
});

// Back to Top functionality
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Reveal Animation & Skill Bars & Counters
const reveals = document.querySelectorAll('.reveal');
const skillBars = document.querySelectorAll('.skill-progress');
const counters = document.querySelectorAll('.counter');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    // Reveals
    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');

            // If it contains skill bars, animate them
            const bars = reveal.querySelectorAll('.skill-progress');
            bars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });

            // If it contains counters, animate them
            const counts = reveal.querySelectorAll('.counter');
            counts.forEach(counter => {
                if (!counter.classList.contains('counted')) {
                    const target = +counter.getAttribute('data-target');
                    animateCounter(counter, target);
                    counter.classList.add('counted');
                }
            });
        }
    });
}

function animateCounter(el, target) {
    let count = 0;
    const speed = 200; // lower is faster
    const inc = target / speed;

    const updateCount = () => {
        count += inc;
        if (count < target) {
            el.innerText = Math.ceil(count);
            setTimeout(updateCount, 10);
        } else {
            el.innerText = target;
        }
    };
    updateCount();
}

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    // Force contact link active at the absolute bottom of the page
    if (document.getElementById('contact') && (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        current = 'contact';
    }

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href === `#${current}` || href.endsWith(`#${current}`))) {
            if (current) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});
