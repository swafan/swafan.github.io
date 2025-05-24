// SCROLLING TITLE CARD --> ABOUT ME TRANSITION

const title = document.querySelector("#intro");
const bioEnd = document.querySelector("#intro-end-marker");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      // User is scrolling UP (title should reappear)
      title.classList.remove("fade-out");
      title.classList.add("fade-in");
    } else {
      // User scrolled PAST bio-end (title fades out)
      title.classList.remove("fade-in");
      title.classList.add("fade-out");
    }
  },
  {
    threshold: 0.2,
  }
);

observer.observe(bioEnd);

// EXPANDING AND HIDING PROJECT DETAILS

function toggleDetails(button) {
  const details = button.closest('article').nextElementSibling;
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
    button.textContent = "Hide the story";
  } else {
    details.classList.add('hidden');
    button.textContent = "Read the story";
  }
}

// FOOTNOTES IN WRITING PIECES

/* Default */
function toggleFootnote(el) {
  const note = el.querySelector('.footnote-content');
  if (window.matchMedia('(hover: none)').matches) {
    // On mobile, toggle
    note.style.display = (note.style.display === 'block') ? 'none' : 'block';
  }
}

/* Mobile scroll to disappear */
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  const activeFootnotes = document.querySelectorAll('.footnote-content');

  if (window.innerWidth < 768) {
    if (Math.abs(window.scrollY - lastScrollY) > 10) {
      activeFootnotes.forEach(fn => {
        fn.style.display = 'none';
      });
    }
  }
  
  lastScrollY = window.scrollY;
});
