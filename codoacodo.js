document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    let counter = 0;

    setInterval(() => {
        counter++;
        carousel.style.transform = `translateX(${-counter * 100}%)`;

        if (counter === 3) {
            counter = 0;
            setTimeout(() => {
                carousel.style.transition = 'none';
                carousel.style.transform = 'translateX(0)';
            }, 500);
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease-in-out';
            }, 600);
        }
    }, 3000);
});
// formulario
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validación básica
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Por favor, complete todos los campos.');
        } else {
            // Puedes enviar el formulario aquí (o realizar otras acciones)
            alert('Formulario enviado con éxito!');
            contactForm.reset(); // Limpiar el formulario
        }
    });
});
//tickets
function calcularTotal() {
    // Obtiene la categoría y la cantidad de tickets del formulario.
    const category = document.getElementById("categoria").value;
    const quantity = document.getElementById("quantity").value;
  
    // Calcula el precio total.
    let precio = 200;
    switch (category) {
      case "Estudiante":
        precio *= 0.2;
        break;
      case "Trainee":
        precio *= 0.5;
        break;
      case "Junior":
        precio *= 0.85;
        break;
    }
  
    // Actualiza el campo "Precio total" con el precio calculado.
    document.getElementById("total").textContent = price * quantity;
  }
  
  // Asigna el evento "click" al botón "Comprar".
  document.getElementById("ticket-form").addEventListener("submit", calcularTotal);
  