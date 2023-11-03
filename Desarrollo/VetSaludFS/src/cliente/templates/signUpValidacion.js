/*
const btnRegistrarse = document.querySelector("#btnRegistrarse");
const aceptar = document.querySelector("#aceptar");
const mensaje = document.querySelector("#mensaje");

btnRegistrarse.addEventListener("click", ()=>{
    mensaje.showModal()
});

aceptar.addEventListener("click", ()=>{
    mensaje.close()
});*/

const btnRegistrarse = document.querySelector("#btnRegistrarse");
const aceptar = document.querySelector("#aceptar");
const mensaje = document.querySelector("#mensaje");
const nombreInput = document.querySelector("#nombre");
const direccionInput = document.querySelector("#direccion");
const dniInput = document.querySelector("#dni");
const numeroInput = document.querySelector("#numero");
const correoInput = document.querySelector("#correo");
const contrasenaInput = document.querySelector("#contrasena");

btnRegistrarse.addEventListener("click", () => {
  if (validarFormulario()) {
    mensaje.showModal();
  }
});

aceptar.addEventListener("click", () => {
  mensaje.close();
});

function validarFormulario() {
  const email = correoInput.value.trim();
  const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (
    nombreInput.value.trim() === "" ||
    direccionInput.value.trim() === "" ||
    dniInput.value.length < 8 ||
    numeroInput.value.length < 9 ||
    contrasenaInput.value.length < 8 ||
    !emailPattern.test(email)
  ) {
    alert("Por favor, completa todos los campos correctamente.");
    return false;
  }
  return true;
}
