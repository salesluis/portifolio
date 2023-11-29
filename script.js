const jsClass = document.documentElement.classList.add("js");

function animationSectionScroll(){
  const sections = document.querySelectorAll(".js-animation-scroll");
  const windowMetade = window.innerHeight * 0.6
  
  function animarScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisdibleSection = (sectionTop - windowMetade) < 0;
      if (isVisdibleSection) {
        section.classList.add("active");
      }
    });
  }
  animarScroll()
  window.addEventListener("scroll", animarScroll);
}
animationSectionScroll()
