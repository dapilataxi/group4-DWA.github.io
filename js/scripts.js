document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.querySelector('.rd-mobilemenu');
    var toggleButton = document.querySelector('.rd-mobilepanel_toggle');

    toggleButton.addEventListener('click', function () {
        // Agregar o remover la clase 'active' al menú y al botón cuando se hace clic en el botón
        mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
});

window.addEventListener('scroll', function () {
    var header = document.querySelector('.desplaza');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('fixed');
        setTimeout(function () {
            header.classList.add('show');
        }, 1); // Necesario para que la animación funcione
    } else {
        header.classList.remove('show');
        setTimeout(function () {
            if (window.scrollY === 0) {
                header.classList.remove('fixed');
            }
        }, 300); // Debe coincidir con la duración de la transición en CSS
    }
});

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_pphwu3t';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                alert('Mensaje enviado correctamente!');
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });

        this.reset();
    });

