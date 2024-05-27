document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
    //const mensajeError = document.getElementById('mensajeError');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Previene el envío del formulario para poder validarlo con Javascript

        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let email = document.getElementById('email').value;
        let telefono = document.getElementById('telefono').value;
        let direccion = document.getElementById('direccion').value;
       // let terminos = document.getElementById('terminos').checked;
        // Validación de los campos
        if (nombre.trim() === '') {
            
            alert("Error: el campo nombre no puede estar vacio.");
            return;
        }

        if (!validar(nombre)) {
            
            alert("11Error: No se admiten caracteres especiales , ni nùmeros.");
            return;
        }

        if (apellido.trim() === '') {
            
            alert("Error: el campo apellido no puede estar vacio.");
            return;
        }

        if (!validarapellido(apellido)) {
            
            alert("2Error: No se admiten caracteres especiales , ni nùmeros.");
            return;
        }

        if (telefono.trim() === '') {
            
            alert("Error: el campo telefono no puede estar vacio.");
            return;
        }

        if (!validartel(telefono)) {
            
            alert("Error: Formato incorrecto.");
            return;
        }

        if (direccion.trim() === '') {
            
            alert("Error: el campo direcciòn no puede estar vacio.");
            return;
        }

        if (!validardir(direccion)) {
            
            alert("Error: Formato incorrecto.");
            return;
        }

        if (email.trim() === '') {
           
           alert("Error: el campo email no puede estar vacio");
            return;
        }

        if (!validarEmail(email)) {
            
            alert("Error: Formato incorrecto");
            return;
        }

       

       
        // Si todo está correcto, se puede proceder a enviar el formulario o hacer alguna otra acción        
        alert('Formulario enviado con éxito!');
        formulario.submit(); 
    });

    function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function validar(nombre) {
        const re1 = /[A-Za-z]/;
        return re1.test(String(nombre).toLowerCase());
    }
    function validarapellido(apellido) {
        const re2 = /[A-Za-z]/;
        return re2.test(String(apellido).toLowerCase());
    }
    function validartel(telefono) {
        const re3 = /[0-9]/;
        return re3.test(String(telefono).toLowerCase());
    }
    function validardir(direccion) {
        const re4 = /[A-Za-z]+[ ]+[0-9]/;
        return re4.test(String(direccion).toLowerCase());
    }
});