/* ==============================
   TYPING ANIMATION
============================== */
const typedText = document.getElementById('typed-text');
const promptString = "navigate --user=ariful";
let i = 0;
function typePrompt(){
  if(i < promptString.length){
    typedText.textContent += promptString.charAt(i);
    i++;
    setTimeout(typePrompt,100);
  }
}
setTimeout(typePrompt,500);

/* ==============================
   SKILL BAR ANIMATION
============================== */
document.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.skill-progress');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.width = entry.target.getAttribute('data-width');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  skillBars.forEach(bar => observer.observe(bar));

  /* ==============================
     SMOOTH SCROLL FOR NAV LINKS
  =============================== */
  document.querySelectorAll('.nav-command').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      window.scrollTo({top: target.offsetTop-80, behavior:'smooth'});
    });
  });

  /* ==============================
     PROJECT FILTER BUTTONS
  =============================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      projects.forEach(p => {
        if(category === 'all' || p.getAttribute('data-category') === category){
          p.style.display = 'block';
        } else {
          p.style.display = 'none';
        }
      });
    });
  });

  /* ==============================
     TOGGLE PROJECT DETAILS
  =============================== */
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const desc = btn.previousElementSibling;
      if(desc.style.display === 'none'){
        desc.style.display = 'block';
        btn.textContent = 'Hide Details';
      } else {
        desc.style.display = 'none';
        btn.textContent = 'Show Details';
      }
    });
  });
});
