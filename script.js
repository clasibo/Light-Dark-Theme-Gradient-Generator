const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const textBox = document.getElementById('text-box');

//Dark or Light Image
const imageMode = (color) => { //it replace the double code wiritten
    image1.src = `./img/image_1_${color}.svg`;
    image2.src = `./img/image_2_${color}.svg`;
    image3.src = `./img/image_3_${color}.svg`;
    image4.src = `./img/image_4_${color}.svg`;
    image5.src = `./img/image_5_${color}.svg`;
}
//Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun'); // replace the below repetition
   /* toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');*/
    imageMode('dark');// the argument has to be a string
    /*image1.src = './img/image_1_dark.svg';
    image2.src = './img/image_2_dark.svg';
    image3.src = './img/image_3_dark.svg';
    image4.src = './img/image_4_dark.svg';
    image5.src = './img/image_5_dark.svg';*/
}
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 /50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    /*toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');*/
    imageMode('light'); // the argument has to be a string
    /*image1.src = './img/image_1_light.svg';
    image2.src = './img/image_2_light.svg';
    image3.src = './img/image_3_light.svg';
    image4.src = './img/image_4_light.svg';
    image5.src = './img/image_5_light.svg';*/
}
// Switch Theme Dynamically
function switchTheme(event) {
   // console.log(event.target.checked); // on click we get true or false depending of the toggle button
if (event.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
}
}
// Event Listener
//https://www.w3schools.com/jsref/event_onchange.asp

toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
/*const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
document.documentElement.setAttribute('data-theme', 'currentTheme');
if(currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
} 
}*/