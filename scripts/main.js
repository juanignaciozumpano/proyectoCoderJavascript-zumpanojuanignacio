/////////////////////////////FORMULARIO///////////////////////////////////////
console.log("Formulario para registrar un contacto");
//funcion flecha
const obtenerNombreCompleto = (apellido, nombre) => {
    return apellido + ", " + nombre;
};
//funcion flecha pedida dentro de otra funcion flecha
const obtenerDetalleDeContacto = (surName, name, email, message) => {
    return (obtenerNombreCompleto(surName, name) + ", con correo electónico: " + email + ". Dejó el siguiente mensaje: " + message
    );
};  

let respuestaUsuario = prompt("¿Quieres simular un formulario de contacto?"); 

while (respuestaUsuario.trim().toUpperCase() === "SI") {

let apellidos = prompt("Cuál es tú apellido"); 
let nombres = prompt("Cuál es tú nombre"); 
let correo = prompt("Cuál es tú correo electrónico"); 
let mensaje = prompt("Cuál es tú mensaje"); 


alert("¡Tu consulta fue enviada con exito!");


console.log("El contacto " + obtenerDetalleDeContacto(apellidos, nombres, correo, mensaje));

// TENEMOS que VOLVER a pedir al usuario su respuesta (para evitar un bucle infinito)
respuestaUsuario = prompt("¿Quieres simular un formulario de contacto?"); // SI - NO
}//fin del while
alert("Gracias por usar nuestro simulador de formulario de contacto!");
/////////////////////////////FORMULARIO///////////////////////////////////////



/////////////////////////////////////////INICIO SESION-----login/////////////////////////////////////
/*console.log("login");

let registroUser = prompt("Ya tenes una cuenta?");

while (registroUser.trim().toUpperCase() === "NO"){
    let nombreLogin = prompt("Ingresa tu nombre que quieres de usuario"); 
    let contrasenia = prompt("Elige una contraseña");

    console.log("Usuario" + nombreLogin + "y contraseña" + contrasenia + "han sido registrados!");
    alert("usuario creado con exito!")
    registroUser = prompt("Ya creaste tu usuario, para logearte escribe FIN");
}
alert("hasta pronto!")*/



/////////////////////////////////////////INICIO SESION-----login con SWITCH/////////////////////////////////////
console.log("login con switch");

let registroUser = prompt("ya tenes cuenta? escribe si o no");
    switch (registroUser.trim().toUpperCase()) {
    case "SI":
        let nameUser = prompt("Ingresa tu nombre de usuario");
        let contrasenia = prompt("Ingresa tu contrasenia");
        alert("login exitoso!");
        console.log("-->el usuario que ingreso es" + nameUser + "con la contraseña " + contrasenia);
        break;
    case "NO":
        let nuevoUsuario = prompt("Elegi un nombre de usuario");
        let nuevaContrasenia = prompt("Elegi una contrasenia");
        alert("usuario creado con exito!");
        console.log("-->el usuario creado es" + nuevoUsuario + "con la contraseña " + nuevaContrasenia);
        break;
    default: 
        alert("opcion incorrecta!");
        console.log("-->el usuario creado es" + nameUser + "con la contraseña " + contrasenia);
        break;
    }