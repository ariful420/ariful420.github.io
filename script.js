// Typed prompt animation
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

// Project Filter
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

// Smooth scroll
document.querySelectorAll('.nav-command').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({top:target.offsetTop-80, behavior:'smooth'});
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.skill-progress');

  const animateSkills = () => {
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50) {
        bar.style.width = bar.getAttribute('data-width');
      }
    });
  };

  window.addEventListener('scroll', animateSkills);
  animateSkills(); // animate on load if visible
});
