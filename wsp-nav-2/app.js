const fullscreenBtn = document.querySelector('.fullscreen-btn');
const subContent = document.querySelector('.sub-content');
const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

fullscreenBtn.addEventListener('click', function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

document.addEventListener('fullscreenchange', function () {
  if (document.fullscreenElement) {
    // Enter fullscreen
    subContent.classList.add('w-full', 'h-screen', 'm-0', 'p-4');
    mainContent.classList.add('ml-0');
    sidebar.classList.add('hidden');
    header.classList.add('hidden');
  } else {
    // Exit fullscreen
    subContent.classList.remove('w-full', 'h-screen', 'm-0', 'p-4');
    mainContent.classList.remove('ml-0');
    sidebar.classList.remove('hidden');
    header.classList.remove('hidden');
  }
});

function updateTime() {
  const timeElement = document.querySelector('.time');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  timeElement.innerText = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000);
updateTime();
