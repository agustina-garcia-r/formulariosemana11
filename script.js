const formu = document.getElementById('formulariop');
const botonsubmit = document.getElementById('botoncito');

formu.addEventListener("submit", function(event) {
  event.preventDefault();
  const NOMBRE = document.getElementById("nombre").value;
  const APELLIDO = document.getElementById('apellido').value;
  const fechaCumple = document.getElementById('cumple').value;

  const datosform = {
    nombre: NOMBRE,
    apellido: APELLIDO,
    "fecha de nacimiento" : fechaCumple,
  };

  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosform),
  };

  fetch('https://jsonplaceholder.typicode.com/users', opciones)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

    })
    .catch(error => {
      console.log(error);
      alert("Hubo un error al enviar los datos.");
    });
});

