"use strict";

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let newPassword = "";

// Mostra o valor do ranger
sizePassword.innerHTML = sliderElement.value;
// Mostra a alteração do valor do ranger
sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
};

// Função para gerar senha
function generatePassword() {
  let pass = "";

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  newPassword = pass;
}

function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(newPassword);
}
