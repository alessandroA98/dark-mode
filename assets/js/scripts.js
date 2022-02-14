//criada por mim
var botao = document.querySelector('#mode-selector')
const body = document.querySelector("body")

botao.addEventListener("click", clicar)
botao.addEventListener("dblclick", dclick)


function clicar(){
botao.style.background = 'white'; 
botao.style.color = 'black';
body.style.background = 'black';
body.style.color = 'white'
botao.innerHTML = 'Dark Mode ON'

}
function dclick() {
        botao.style.background = 'black';
        botao.style.color = 'white';
        body.style.background = 'white';
        body.style.color = 'black'
        botao.innerHTML = 'Dark Mode OFF'
        }



// modo resolvido da professora 


// uma forma mais simple de fazer tambem é usando o toggle abaixo. ele faz ficar de um mode e se ja estiver, ele remove.

// function changeMode() {
//     changeClasses();
//     changeText();
// }

// function changeClasses() {
//     button.classList.toggle(darkModeClass);
//     h1.classList.toggle(darkModeClass);
//     body.classList.toggle(darkModeClass);
//     footer.classList.toggle(darkModeClass);
// }

// function changeText() {
//     const lightMode = 'Light Mode';
//     const darkMode = 'Dark Mode';

//     if (body.classList.contains(darkModeClass)) {
//         button.innerHTML = lightMode;
//         h1.innerHTML = darkMode + ' ON';
//         return;
//     }

//     button.innerHTML = darkMode;
//     h1.innerHTML = lightMode + ' ON';
// }

// const darkModeClass = 'dark-mode';
// const button = document.getElementById('mode-selector');
// const h1 = document.getElementById('page-title');
// const body = document.getElementsByTagName('body')[0];
// const footer = document.getElementsByTagName('footer')[0];

// button.addEventListener('click', changeMode);