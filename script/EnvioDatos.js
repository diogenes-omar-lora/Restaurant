let Enviar = document.getElementById('boton');

// Función para crear la tabla con los datos de las reservaciones
function cargarTabla() {
    let Reservaciones;

    if (localStorage.getItem("reserva")) {
      Reservaciones = JSON.parse(localStorage.getItem("reserva"));
    } else {
      Reservaciones = [];
    }

    let tbody = document.getElementById('tbody');
    tbody.innerHTML = "";
    Reservaciones.forEach(reserva => {
      let tr = document.createElement('tr');

      let td = document.createElement('td');
      td.innerText = reserva.name;
      td.setAttribute('data-label', 'First Name');
      tr.appendChild(td);

      const phone = document.createElement('td');
      phone.innerText = reserva.phone;
      phone.setAttribute('data-label', 'Phone');
      tr.appendChild(phone);

      const people = document.createElement('td');
      people.innerText = reserva.people;
      people.setAttribute('data-label', 'Peoples');
      tr.appendChild(people);

      const date = document.createElement('td');
      date.innerText = reserva.date;
      date.setAttribute('data-label', 'Date');
      tr.appendChild(date);

      const time = document.createElement('td');
      time.innerHTML = reserva.time;
      time.setAttribute('data-label', 'Time');
      tr.appendChild(time);

      tbody.appendChild(tr);
    });
  }

  // Llamada a la función para crear la tabla al cargar la página
  window.onload = function() {
    cargarTabla();
  }

  // Evento click del botón Enviar
  Enviar.addEventListener("click", function(){
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let people = document.getElementById('people').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

    if(name !='' && phone !='' && people !='' && date !='' && time !=''){

      let Reservaciones;

      if (localStorage.getItem("reserva")) {
        Reservaciones = JSON.parse(localStorage.getItem("reserva"));
      } else {
        Reservaciones = [];
      }

      // Agregar un nuevo objeto a la lista de reservaciones
      Reservaciones.push({
        name: name,
        phone: phone,
        people: people,
        date: date,
        time: time,
      });

      // Guardar la lista de reservaciones en el LocalStorage
      localStorage.setItem("reserva", JSON.stringify(Reservaciones));

      // Recargar la tabla con los nuevos datos
      cargarTabla();

      document.getElementById('name').value='';
      document.getElementById('phone').value='';
      document.getElementById('people').value='';
      document.getElementById('date').value='';
      document.getElementById('time').value='';

    } else {
      alert('No puede dejar los campos vacios...');
    }
  })
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
  });

