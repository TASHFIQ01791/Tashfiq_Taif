document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Typing Effect
  const typingElement = document.querySelector('.typing');
  const words = ['Frontend Developer', 'Problem Solver', 'Web Designer'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    typingElement.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, 1000);
    }
  }

  setTimeout(type, 1000);

  // Load More Projects
  const loadMoreBtn = document.querySelector('.load-more');
  const projectCards = document.querySelectorAll('.project-card');
  let visibleCount = 6;

  loadMoreBtn.addEventListener('click', () => {
    for (let i = visibleCount; i < visibleCount + 3 && i < projectCards.length; i++) {
      projectCards[i].classList.remove('hidden');
    }
    visibleCount += 3;
    if (visibleCount >= projectCards.length) {
      loadMoreBtn.style.display = 'none';
    }
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Skill Hover Effect
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const level = item.getAttribute('data-level');
      let color;
      switch (level) {
        case 'Basic':
          color = 'var(--basic-color)';
          break;
        case 'Mid':
          color = 'var(--intermediate-color)';
          break;
        case 'Advanced':
          color = 'var(--advanced-color)';
          break;
        default:
          color = 'var(--primary-color)';
      }
      item.style.backgroundColor = color;
      item.querySelector('i').style.color = 'white';
      item.querySelector('span').style.color = 'white';
      item.querySelector('::after').style.backgroundColor = color;
    });

    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'white';
      item.querySelector('i').style.color = 'var(--primary-color)';
      item.querySelector('span').style.color = 'inherit';
    });
  });
});