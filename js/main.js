
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });


const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    panels.forEach(p => p.classList.remove('active'));
    panel.classList.add('active');
  });
});

const btn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
