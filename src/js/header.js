const themeSwitch = document.getElementById('themeSwitch');
const isDarkMode = localStorage.getItem('darkMode') === 'true';
const switchLight = document.querySelector('.light_mode');
const switchDark = document.querySelector('.dark_mode');
const header = document.querySelector('.header_wrapper');
const loginBtn = document.querySelector('.btn_log-in');
const logoLight = document.querySelector('.logo_light');
const logoDark = document.querySelector('.logo_dark');
document.body.classList.toggle('dark-mode', isDarkMode);

themeSwitch.addEventListener('change', () => {
  const isDarkMode = themeSwitch.checked;
  document.body.classList.toggle('dark-mode', isDarkMode);

  switchLight.style.display = 'block';
  switchDark.style.display = 'none';
  loginBtn.style.backgroundColor = 'white';
  logoLight.style.display = 'block';
  logoDark.style.display = 'none';
  if (isDarkMode === true) {
    switchLight.style.display = 'none';
    switchDark.style.display = 'block';
    loginBtn.style.backgroundColor = '#333';
    logoDark.style.display = 'block';
    logoLight.style.display = 'none';
  }
});
