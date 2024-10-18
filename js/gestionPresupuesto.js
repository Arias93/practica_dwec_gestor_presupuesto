let presupuesto = 0;

function actualizarPresupuesto() {
    if (numero>0){
        presupuesto=presupuesto+numero;
        return presupuesto;
    }
    else{ 
        console.log("Has introducido un numero negativo");
        return -1;
    };
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto() {
    
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
