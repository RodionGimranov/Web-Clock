let bodyContainer = document.getElementById('body-container');
let themeSwitcher = document.getElementById('theme-switcher');
let arrowBack = document.getElementById('back__arrow-btn');
let arrowNext = document.getElementById('forward_arrow-btn');

let hideControlsTimeout;

bodyContainer.addEventListener('mousemove', function() {
    themeSwitcher.style.opacity = '1';
    arrowBack.style.opacity = '1';
    arrowNext.style.opacity = '1';

    themeSwitcher.style.transition = 'opacity 0.3s';
    arrowBack.style.transition = 'opacity 0.3s';
    arrowNext.style.transition = 'opacity 0.3s';

    clearTimeout(hideControlsTimeout);

    hideControlsTimeout = setTimeout(() => {
        themeSwitcher.style.opacity = '0';
        arrowBack.style.opacity = '0';
        arrowNext.style.opacity = '0';
    }, 3000);
});


function updateClocks() {
    const now = dayjs();

    document.getElementById('all-time-v1').textContent = now.format('HH:mm:ss');
    
    document.getElementById('watch-text-v2').textContent = now.format('HH');
    document.getElementById('minutes-text-v2').textContent = now.format('mm');
    
    document.getElementById('watch-text-v3').textContent = now.format('HH');
    document.getElementById('minutes-text-v3').textContent = now.format('mm');
    document.getElementById('day-of-the-week').textContent = now.format('dddd,');
    document.getElementById('month').textContent = now.format('MMMM');
    document.getElementById('day-of-the-month').textContent = now.format('D');
}

setInterval(updateClocks, 100);


document.addEventListener('DOMContentLoaded', function () {
    const designs = document.querySelectorAll('.watch__design__container > div');
    let currentIndex = 0;

    function updateDesignVisibility() {
        designs.forEach((design, index) => {
            if (index === currentIndex) {
                design.style.display = 'flex';
            } else {
                design.style.display = 'none';
            }
        });
    }

    updateDesignVisibility();

    document.getElementById('back__arrow-btn').addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + designs.length) % designs.length;
        updateDesignVisibility();
    });

    document.getElementById('forward_arrow-btn').addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % designs.length;
        updateDesignVisibility();
    });
});


let changeThemeBtn = document.getElementById('theme-switcher');

function switchTheme() {
  let currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme === 'dark') {
    document.documentElement.style.setProperty('--background-color-dark', '#fff'); 
    document.documentElement.style.setProperty('--background-card-color-dark', '#EEEEEE'); 
    document.documentElement.style.setProperty('--text-color-dark', '#303134');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.style.setProperty('--background-color-dark', '#000');
    document.documentElement.style.setProperty('--background-card-color-dark', '#161616'); 
    document.documentElement.style.setProperty('--text-color-dark', '#fff');
    localStorage.setItem('theme', 'dark');
  }
}

changeThemeBtn.addEventListener('click', switchTheme);

document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('theme') === 'light') {
    switchTheme();
  }
});