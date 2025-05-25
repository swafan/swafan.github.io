// MOBILE SCROLL TO REMOVE FOOTNOTES

document.addEventListener('DOMContentLoaded', () => {

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    // Only run on mobile
    if (window.innerWidth > 768) return;
    const activeFootnotes = document.querySelectorAll('.footnote-content.show');
    if (activeFootnotes.length && Math.abs(window.scrollY - lastScrollY) > 5) {
      activeFootnotes.forEach(fn => fn.classList.remove('show'));
    }

    lastScrollY = window.scrollY;
  });
});

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
    button.classList.toggle('active');
  } else {
    details.classList.add('hidden');
    button.textContent = "Read the story";
    button.classList.remove('active');
  }
}

// FOOTNOTES IN WRITING PIECES

/* Default footnotes PC */
function toggleFootnote(el) {
  const footnote = el.querySelector('.footnote-content');
  footnote.classList.toggle('show');
}
