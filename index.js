let continuar = true;

while (continuar) {

    // MOSTRAR  UN MENSAJE DE OPCIÓN 

    let opcion  = parseInt(prompt("Sigue los siguientes pasos: \n 1- Logueo \n 2- Turnero \n 3- Salir"))
    
    // EVALUAR LA OPCIÓN SELECCIONADA

    switch (opcion) {
        case 1: // if opcion === 1
            let usuario = prompt("Ingrese un nombre de usuario administrador").toLowerCase(); 
            let contrasenia = prompt("Ingrese una contraseña de administrador").toUpperCase(); 
        
                while (usuario != "admin" || contrasenia != "ADMIN123") { 
                    alert("El usuario o contraseña no son válidos");
                
                    usuario = prompt("Ingrese un nombre de usuario administrador");
                    contrasenia = prompt("Ingrese una contraseña de administrador");
                }
                    alert("Bienvenido, ya estás logueado para comenzar con el turnero");
        
            break;

        case 2: 
            for (let i = 1; i <= 5; i++) {
                let ingresarNombrePaciente = prompt("Ingrese nombre de paciente");
                let ingresarEspecialidad = prompt("Ingrese Especialidad");
                
                console.log("Paciente: " + ingresarNombrePaciente + " / Turno n°:  " + i + " / Especialidad:  "  + ingresarEspecialidad);
                
            }
                alert("Los pacientes serán llamados por pantalla")
                
            break;

        case 3: // else if opcion === 3
            continuar = false; // termina el ciclo, por eso esta opción nos lleva al alert de abajo
                    
            break;
            default: // else
                alert("Opción inválida. Por favor ingrese una opción correcta");
            break;
    }

    alert("Cargue los datos en sistema, para su facturación");

}

// PARA CARGAR  FACTURA DE PACIENTE



    function FacturaCliente (nombre, especialidad, precioConsulta) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.precioConsulta = precioConsulta; 
        this.iva = precioConsulta * 0.21;
        this.descuentoIva = function() { 
            this.precioConsulta = this.precioConsulta - this.iva;
        } 

    }

    const facturacliente1 = new FacturaCliente("Pedro", "Endocrinología" , 3000);
    console.log(facturacliente1);

    facturacliente1.descuentoIva();
    console.log(facturacliente1.precioConsulta);

   const listadoNombrePaciente = [];
   let cantidad = parseInt (prompt ("Ingrese cantidad de factura cliente"));

       do {

            let nombre = prompt("Ingrese nombre de paciente");
            listadoNombrePaciente.push(nombre);

        } while (listadoNombrePaciente.lenght !=cantidad);

        alert(listadoNombrePaciente.join("\n"));
        console.log(listadoNombrePaciente);





