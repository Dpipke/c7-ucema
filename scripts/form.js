const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();  // Evita el envío del formulario para procesar los datos en JavaScript

    // Datos personales
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const position = document.getElementById('position').value;
    const cv = document.getElementById('cv').files[0]; // Esta es una referencia al archivo. Para obtener el nombre, usar cv.name
    const age = document.getElementById('age').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const linkedin = document.getElementById('linkedin').value.trim();
    const coverLetter = document.getElementById('cover-letter').value.trim();
    
    if(isNaN(age)){
        alert("La edad debe ser un numero")
        return
    }
    //console.log("cover letter ", coverLetter)
    if(coverLetter == ""){
        alert("Contanos sobre vos")
        return
    }
    if(fullname == ""){
        alert("Ingresa tu nombre")
        return
    }else{
        alert("muy bien")
    }
    if(!fullname.includes(" ")){
        alert("Ingresa tu nombre y apellido")
        return
    }
    if(!email.includes("@")){
        alert("Ingresa un mail valido")
        return
    }
    // Idiomas seleccionados
    const selectedLanguages = [];
    document.querySelectorAll('input[name="language"]:checked').forEach(function(checkbox) {
        selectedLanguages.push(checkbox.value);
    });

    // Preferencias de trabajo
    let workingPreference
    if(document.querySelector('input[name="working-preferences"]:checked') == null){
        workingPreference = "NS/NC"
    }else{
        workingPreference = document.querySelector('input[name="working-preferences"]:checked').value
    }

    let selectedWorkingPlace
    if(document.querySelector('input[name="working-place"]:checked') == null){
        selectedWorkingPlace = "No seleccionado"
    }else{
        selectedWorkingPlace = document.querySelector('input[name="working-place"]:checked').value
    }
    //const selectedWorkingPreference = document.querySelector('input[name="working-preferences"]:checked').value; 
   // const selectedWorkingPlace = document.querySelector('input[name="working-place"]:checked').value;
    const startDate = document.getElementById('start-date').value;


    // Mostrar resultados en la consola 
    // console.log("Nombre y Apellido:", fullname);
    // console.log("Email:", email);
    // console.log("DNI/Pasaporte:", dni);
    // console.log("Puesto de interés:", position);
    // console.log("Archivo CV:", cv ? cv.name : 'Ninguno seleccionado');
    // console.log("Edad:", age);
    // console.log("Teléfono:", telephone);
    // console.log("LinkedIn:", linkedin);
    // console.log("Carta de presentación:", coverLetter);
    // console.log("Idiomas seleccionados:", selectedLanguages);
    // console.log("Disponibilidad horaria:", workingPreference);
    // console.log("Forma de trabajo:", selectedWorkingPlace);
    // console.log("Fecha de comienzo:", startDate);

    const candidato = {
        name: fullname,
        email: email,
        passport: dni,
        position: position,
        cv: cv,
        age: age,
        telephone: telephone,
        socialMedia: linkedin,
        presentation: coverLetter,
        languages: selectedLanguages,
        workingPreference: workingPreference,
        workingPlace: selectedWorkingPlace,
        startDate: startDate
    }
    console.log("candidato antes de guartdar en local storage", candidato)
    localStorage.setItem("candidato", JSON.stringify(candidato))
});

function getCandidato(){
    const candidatoLocalStorage = JSON.parse(localStorage.getItem("candidato"))
    console.log("candidato recuperado del localstorage", candidatoLocalStorage)
}