(function () {
  const buttons = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.card');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      buttons.forEach((b) => b.classList.toggle('active', b === button));
      cards.forEach((card) => {
        const clusters = card.dataset.cluster.split(' ');
        card.classList.toggle('hidden', filter !== 'all' && !clusters.includes(filter));
      });
    });
  });
})();
