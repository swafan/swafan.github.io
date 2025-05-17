  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const writingBoxes = document.querySelectorAll('.writing-box');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      writingBoxes.forEach(box => {
        const categories = box.getAttribute('data-categories').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          box.style.display = 'flex';
        } else {
          box.style.display = 'none';
        }
      });
    });
  });

