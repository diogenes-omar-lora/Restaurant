let Enviar = document.getElementById('boton');

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

        document.getElementById('name').value='';
        document.getElementById('phone').value='';
        document.getElementById('people').value='';
        document.getElementById('date').value='';
        document.getElementById('time').value='';

    }else{
        alert('No puede dejar los campos vacios...');
    }
})

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
  });
