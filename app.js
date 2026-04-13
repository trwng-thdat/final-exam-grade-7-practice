const entryLinks = document.querySelectorAll(".btn");

entryLinks.forEach((link, index) => {
  link.style.animationDelay = `${index * 80}ms`;
});
