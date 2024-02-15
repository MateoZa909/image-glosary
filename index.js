// const one = document.querySelector('.boxes .one');
// const two = document.querySelector('.boxes .two');
// const three = document.querySelector('.boxes .three');
// const four = document.querySelector('.boxes .four');
// const five = document.querySelector('.boxes .five');
// const six = document.querySelector('.boxes .six');
// const seven = document.querySelector('.boxes .seven');
// const eigth = document.querySelector('.boxes .eigth');

// one.addEventListener('click', () => {
//     one.style.display = 'none';
// })

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.boxes .box'); // Selecciona todas las cajas

    boxes.forEach(box => {
        // Cuando el cursor entra en una caja
        box.addEventListener('mouseenter', () => {
            boxes.forEach(otherBox => {
                if (otherBox !== box) { // Añade la clase 'box-fade' a las otras cajas
                    otherBox.classList.add('box-fade');
                }
            });
        });

        // Cuando el cursor sale de una caja
        box.addEventListener('mouseleave', () => {
            boxes.forEach(otherBox => {
                otherBox.classList.remove('box-fade'); // Quita la clase 'box-fade' de todas las cajas
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.boxes .box');

    boxes.forEach(box => {
        // Evento táctil para dispositivos móviles
        box.addEventListener('touchstart', (e) => {
            // Añade la clase para la expansión de la imagen y caja
            box.classList.add('box-expanded');
            e.preventDefault(); // Evita el comportamiento por defecto del navegador
        });

        box.addEventListener('touchend', (e) => {
            // Remueve la clase una vez que se termina el toque
            box.classList.remove('box-expanded');
        });
    });
});





