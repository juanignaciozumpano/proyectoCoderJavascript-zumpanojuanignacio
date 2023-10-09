/////////////////////////////FORMULARIO///////////////////////////////////////
console.log("Formulario para registrar un contacto");
//funcion flecha
/*const obtenerNombreCompleto = (apellido, nombre) => {
    return apellido + ", " + nombre;
};
//funcion flecha pedida dentro de otra funcion flecha
const obtenerDetalleDeContacto = (surName, name, email, message) => {
    return (obtenerNombreCompleto(surName, name) + ", con correo electónico: " + email + ". Dejó el siguiente mensaje: " + message
    );
}; */ 
/////Objetos Literales////
////////////////////////////Concatenar 2 arrays de contactos///////////////////////////////

const contacto1 = {
    apellido: "Rita",
    nombre: "Mengueche",
    correo: "ritamengueche@yahoo.com.ar",
    mensaje: "RitaPrimerContacto"
};
const contacto2 = {
    apellido: "Angel",
    nombre: "Miguel",
    correo: "miguelangel@gmail.com",
    mensaje: "MiguelSegundoContacto"
};
console.table(contacto1);
console.table(contacto2);
const listaDefinitiva = (contacto1, contacto2);
console.table(listaDefinitiva);

/////////////////////////////FORMULARIO///////////////////////////////////////
const validarFormulario = (
    apellidos = "",
    nombres = "",
    correo = "",
    mensaje = ""
) => {
    let mensajes = [];
    if (apellidos.length == 0) {
    mensajes.push("Los Apellidos son requeridos");
    }
    if (nombres.length == 0) {
    mensajes.push("Los Nombres son requeridos");
    }
    if (correo.length == 0) {
    mensajes.push("El correo es requerido");
    }
    if (mensaje.length == 0) {
    mensajes.push("El mensaje es requerido");
    }
    return mensajes; // Retornar los mensajes
    };

    const registrarContacto = (apellidos, nombres, correo, mensaje) => {
    // 1er paso
    const errores = validarFormulario(apellidos, nombres, correo, mensaje);
    if (errores.length !== 0) {
      // Hay errores en los campos del formulario, los vamos a mostrar en la UI
        console.table(errores);
        return false;
    } else {
        return true;
    }
    };

    let respuestaUsuario = prompt("¿Quieres simular un formulario de contacto?");

    while (respuestaUsuario.trim().toUpperCase() === "SI") {
    let apellidos = prompt("Cuál es tu apellido");
    let nombres = prompt("Cuál es tu nombre");
    let correo = prompt("Cuál es tu correo electrónico");
    let mensaje = prompt("Cuál es tu mensaje");

    if (registrarContacto(apellidos, nombres, correo, mensaje)) {
      // 3er paso mostrar los nuevos valores actualizados en la lista
        alert("¡Tu registro fue enviado con éxito!");
    } else {
        alert("Debes verificar los datos ingresados");
    }
    console.log("Este es tu contacto registrado con apellido"+  apellidos, nombres,correo, mensaje,);
    // TENEMOS que VOLVER a pedir al usuario su respuesta (para evitar un bucle infinito)
    respuestaUsuario = prompt("¿Quieres simular un formulario de registro de contacto?"); // SI - NO
    }

    alert("Gracias por usar nuestro simulador de formulario de contacto!");





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

    //////////////////REGISTRO DE MENSAJES CON OBJETOS LITERALES Y ARRAYS Y PEDIDO DE MENSAJE AL USUARIO//////////
    const registroMensajes = [];

function crearMensaje() {
  const mensaje = {};

  mensaje.usuario = prompt("Introduce tu nombre de usuario:");
  mensaje.contenido = prompt("Escribe tu mensaje:");
  mensaje.fecha = new Date().toLocaleString();

  registroMensajes.push(mensaje);
}

function mostrarRegistroMensajes() {
  console.log("Registro de mensajes:");
  registroMensajes.forEach((mensaje, index) => {
    console.log(`Mensaje ${index + 1}:`);
    console.log(`Usuario: ${mensaje.usuario}`);
    console.log(`Contenido: ${mensaje.contenido}`);
    console.log(`Fecha: ${mensaje.fecha}`);
    console.log("--------------");
  });
}

let respuestaUser = prompt("¿Quieres agregar un mensaje? (SI/NO)");

while (respuestaUser.trim().toUpperCase() === "SI") {
  crearMensaje();
  respuestaUser = prompt("¿Quieres agregar otro mensaje? (SI/NO)");
}

mostrarRegistroMensajes();