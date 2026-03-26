const filterButtons = document.querySelectorAll('.filter-button');
const publicationCards = document.querySelectorAll('.publication-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');

    publicationCards.forEach((card) => {
      const matches = selectedFilter === 'all' || card.dataset.year === selectedFilter;
      card.classList.toggle('is-hidden', !matches);
    });
  });
});
