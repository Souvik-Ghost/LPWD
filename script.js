// JavaScript to toggle visibility of resource lists
document.querySelectorAll('h2').forEach((header) => {
  header.addEventListener('click', () => {
      const resources = header.nextElementSibling;
      if (resources.style.display === 'none' || resources.style.display === '') {
          resources.style.display = 'block';
      } else {
          resources.style.display = 'none';
      }
  });
});

console.log("Learning path for web development loaded.");
