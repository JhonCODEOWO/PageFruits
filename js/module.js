console.log('Se ha insertado el js');


const btnMenu = document.querySelector('#btn-menu');
console.log(btnMenu);
const navHeader = document.querySelector('#nav-header');
let activo = false;
const body = document.querySelector('body');
console.log(body);

btnMenu.addEventListener('click', function(){
    if (activo == false) {
        navHeader.style.display = 'flex';
        activo = true;
    } else {
        navHeader.style.display = 'none';
        activo = false;
    }
});

//Se crea un evento que escucha cada vez que cambias el tamaño del navegador
//El uso en este proyecto es verificar que tamaño de  pantalla tenemos cada vez que la redimensionamos, y si el elemento navHeader está oculto, mostrarlo de nuevo
window.addEventListener('resize', function(){
    if (verificarViewPort() >= 992) {
        navHeader.style.display = 'flex';
    } else {
        navHeader.style.display = 'none';
    }
});

//Al cargarse el dom de la página web
// window.addEventListener('DOMContentLoaded', function(){
// let backgroundImage = '';
// if (verificarViewPort() >= 768) {
//     backgroundImage = '../img/aaron-blanco-tejedor-CNpYALGZhMo-unsplash.jpg'
//     console.log('pc');
// } else {
//     backgroundImage = '../img/edit-movil.jpg'
//     console.log('telefono');
// }
// body.style.backgroundImage = `url(${backgroundImage})`;
// });

//Función que detecta si se está viendo la página en un telefono o dispositivos más grandes, retorna el valor del ancho de la pantalla actual
function verificarViewPort() {
    let ancho = window.innerWidth || document.documentElement.clientWidth;
    return ancho;
}