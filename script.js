// Fade in-out

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

// Show More
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



// Filters

  // const filterButtons = document.querySelectorAll('.filter-buttons button');
  // const writingBoxes = document.querySelectorAll('.writing-box');

  // filterButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     const filter = button.getAttribute('data-filter');

  //     // Update active button
  //     filterButtons.forEach(btn => btn.classList.remove('active'));
  //     button.classList.add('active');

  //     writingBoxes.forEach(box => {
  //       const categories = box.getAttribute('data-categories').split(' ');
  //       if (filter === 'all' || categories.includes(filter)) {
  //         box.style.display = 'flex';
  //       } else {
  //         box.style.display = 'none';
  //       }
  //     });
  //   });
  // });

