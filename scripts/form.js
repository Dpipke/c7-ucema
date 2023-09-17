const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();  // Evita el envío del formulario para procesar los datos en JavaScript

    // Datos personales
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const dni = document.getElementById('dni').value;
    const position = document.getElementById('position').value;
    const cv = document.getElementById('cv').files[0]; // Esta es una referencia al archivo. Para obtener el nombre, usar cv.name
    const age = document.getElementById('age').value;
    const telephone = document.getElementById('telephone').value;
    const linkedin = document.getElementById('linkedin').value;
    const coverLetter = document.getElementById('cover-letter').value;

    // Idiomas seleccionados
    const selectedLanguages = [];
    document.querySelectorAll('input[name="language"]:checked').forEach(function(checkbox) {
        selectedLanguages.push(checkbox.value);
    });

    // Preferencias de trabajo
    const selectedWorkingPreference = document.querySelector('input[name="working-preferences"]:checked').value; 
    const selectedWorkingPlace = document.querySelector('input[name="working-place"]:checked').value;
    const startDate = document.getElementById('start-date').value;


    // Mostrar resultados en la consola 
    console.log("Nombre y Apellido:", fullname);
    console.log("Email:", email);
    console.log("DNI/Pasaporte:", dni);
    console.log("Puesto de interés:", position);
    console.log("Archivo CV:", cv ? cv.name : 'Ninguno seleccionado');
    console.log("Edad:", age);
    console.log("Teléfono:", telephone);
    console.log("LinkedIn:", linkedin);
    console.log("Carta de presentación:", coverLetter);
    console.log("Idiomas seleccionados:", selectedLanguages);
    console.log("Disponibilidad horaria:", selectedWorkingPreference);
    console.log("Forma de trabajo:", selectedWorkingPlace);
    console.log("Fecha de comienzo:", startDate);
});
