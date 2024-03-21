//----------selecionar os elementos----------//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const resposta = document.querySelector(".mensagem-final");
const contenido = document.querySelector(".right-encriptador");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

//----------botn de encriptar----------//
btnEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = txtEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
  console.log(txt);

  if (texto == "") {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFDCB";
    aviso.style.fontweight = "800";
    aviso.textContent = "O campo de texto  não deve está vazio";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== txt) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFDCB";
    aviso.style.fontweight = "800";
    aviso.textContent = "Não deve ter acentos e caracateres especiais";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== texto.toLowerCase()) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFDCB";
    aviso.style.fontweight = "800";
    aviso.textContent = "o texto deve ser todo em minúscula";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    resposta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

//----------botn de desencriptar----------//
btnDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = txtEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
  console.log(txt);

  if (texto == "") {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFDCB";
    aviso.style.fontweight = "800";
    aviso.textContent = "O campo de texto  não deve está vazio";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== txt) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFDCB";
    aviso.style.fontweight = "800";
    aviso.textContent = "Não deve ter acentos e caracateres especiais";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== texto.toLowerCase()) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFDCB";
    aviso.style.fontweight = "800";
    aviso.textContent = "o texto deve ser todo em minúscula";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    resposta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

//----------botn de copiar----------//
btnCopiar.addEventListener("click", (e) => {
  e.preventDefault();
  let copiar = resposta;
  copiar.select();
  document.execCommand("copy");
});
