document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchBtn');
  const headerSection = document.getElementById('headerSection');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchCloseBtn = document.getElementById('searchCloseBtn');
  // Search functionality
  searchBtn.addEventListener('click', () => {
    headerSection.classList.add('hidden');
    searchOverlay.classList.remove('hidden');
  });

  searchCloseBtn.addEventListener('click', () => {
    searchOverlay.classList.add('hidden');
    headerSection.classList.remove('hidden');
  });
});


