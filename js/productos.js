//Selección de elementos
const btnCarrito = document.querySelectorAll('#addCarro');
const precio = document.querySelectorAll('#precioProducto');
const tituProducto = document.querySelectorAll('#tituProducto');
const verCarrito = document.querySelector('#verCarrito');

//Variables globales
let indexCarrito = 0;
let carrito = [];

//AñadirAlCarrito
//Siempre con querySelectorAll se necesita un foreach el cual genera un NodeMap y recibe tres parámetros, elemento, indice y colección
btnCarrito.forEach( (btnCarrito, indexButton) => {
    btnCarrito.addEventListener('click', function(){
        //let index = 0;
        let precioProducto;
        let nombreProducto;
        
        //Obtenemos el texto que tengan los elementos en la posición del botón al que se hizo click
        precioProducto = precio[indexButton].textContent;
        nombreProducto = tituProducto[indexButton].textContent;
        obtenerDatos(nombreProducto, precioProducto);
    });
});

//Función que tiene dos parámetros coloca los datos en el arreglo global del carrito
function obtenerDatos(_nombre, _precio) {
    let producto = new Object();
    producto.Nombre = _nombre;
    producto.Precio = _precio;
    let stringProducto = _nombre + " " + _precio; //Creamos un string personalizado para el registro
    if (existsInArray(carrito, _nombre, _precio) != true) {
        if (indexCarrito == 0) { //Si el index de apoyo está en 0 quiere decir que ya hay elementos
            carrito[0] = producto;
            indexCarrito++;
        } else {
            carrito[indexCarrito] = producto;
            indexCarrito++;
        }
    } else {
        console.log('Ya has agregado este producto');
    }
    
    console.log(carrito);
    //console.log(`Nombre:${_nombre} Precio:${_precio}`);
}

//Función que en base a un arreglo y dos parámetros extra determina si existe en el array del carrito un elemento, pendiente de arreglar
function existsInArray(array, _nombre, _precio){
    let stringProducto = _nombre + " " + _precio;
    if (array.includes(stringProducto)) {
        return true;
    } else {
        return false;
    }
}

//MostrarCarrito

//En base al click del botón
verCarrito.addEventListener('click', function(){
    if (carrito.length == 0) { //Si el arreglo está vacío
        alert('Aún no has añadido productos al carrito');
    } else {

        //Creamos el div para el fondo que ocupará todo el alto del body y ancho
        const divFondo = document.createElement('DIV');
        divFondo.classList.add('divFondo');
        divFondo.classList.add('overlayCarrito');
    
        //A continuación creamos un título a mostrar con un elemento h2 al cual se le asignan clases para darle diseño
        const tituloCarrito = document.createElement('H2');
        tituloCarrito.textContent = 'Artículos en el carrito';
        tituloCarrito.classList.add('transparent-background');
        tituloCarrito.classList.add('no-margin');
        tituloCarrito.classList.add('color-white');
    
        //Creamos un div general que encerrará todos los elementos obtenidos al recorrer el arreglo y principalmente se hizo para dar disposición a esos elementos
        const divGeneral = document.createElement('DIV');
        divGeneral.classList.add('divGenera');
        divGeneral.classList.add('bg-white');
    
        //Iteramos el arreglo del carrito
        for(let i = 0; i < carrito.length; i++){
            //Por cada iteración se crea un div que tiene el propósito de encerrar a los elementos que se crearán después ára darles una disposición deseada
            const divCarrito = document.createElement('DIV');
            divCarrito.classList.add('divCarrito');

            //Creación de los elementos párrafo usando la metodología de punto para acceder a los valores de los objetos guardados
            const parrafoNombre = document.createElement('P');
            parrafoNombre.textContent = carrito[i].Nombre;
            const parrafoPrecio = document.createElement('P');
            parrafoPrecio.textContent = carrito[i].Precio;

            //Se añaden los parrafos al div que controlará ambos elementos
            divCarrito.appendChild(parrafoNombre)
            divCarrito.appendChild(parrafoPrecio);
            divGeneral.appendChild(divCarrito);
        }

        //Se crean los botones al final de todo, en el se añaden las clases, el texto y la función onclick que elimina el divfondo y además al body le quita la clase que se usa solo para mostrar el carrito
        const botonComprar = document.createElement('BUTTON');
        botonComprar.classList.add('btn-comprar--carrito');
        botonComprar.textContent = 'Realizar compra';
        botonComprar.onclick = function(){
            divFondo.remove();
            const body = document.querySelector('body');
            body.classList.remove('positionBodyCarrito');
        }

        const botonCerrar = document.createElement('BUTTON');
        botonCerrar.classList.add('btn-cerrar--carrito');
        botonCerrar.textContent = 'Cerrar carrito';
        botonCerrar.onclick = function(){
            divFondo.remove();
            const body = document.querySelector('body');
            body.classList.remove('positionBodyCarrito');
        }
    
        //Añadimos los elementos por orden al divFondo
        divFondo.appendChild(tituloCarrito);
        divFondo.appendChild(divGeneral);
        divFondo.appendChild(botonComprar);
        divFondo.appendChild(botonCerrar);
    
        //Añadimos el divfondo con todo agregado ya al body para mostrarlo
        const body = document.querySelector('body');
        body.classList.add('positionBodyCarrito');
        body.appendChild(divFondo);
    }
});