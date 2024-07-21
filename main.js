
const btnCode = document.querySelector('#btn-code')
const codigos = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
let myPictures = [];
let myPicturesStringRecuperado = localStorage.getItem('myPictures')
let myPicturesRecuperado = JSON.parse(myPicturesStringRecuperado);

if (myPicturesRecuperado != null){
  for (let i = 0; i < myPicturesRecuperado.length; i++) {
    let picRec = myPicturesRecuperado[i];
    let cont = 1;
    for (let i=0; i < codigos.length; i++){
      
      let c = codigos[i];
      if (picRec === c) {
        let picture = document.getElementById('p' + cont.toString());
        openPicture(picture);
      }
      cont++;
    }
  }
}

btnCode.addEventListener('click', ()=> conferirCodigo());

const modal = document.querySelector('#modal');
 
function openPicture(cont) {
  cont.src = 'img/'+ cont.id + '.png';
  cont.style.display = "block";
  cont.addEventListener('click', ()=> openModal(cont.id));
}

function conferirCodigo() {
  let codigo = document.querySelector('#codigo');
  
  if(codigos.includes(codigo.value)) {
  
    let validacao = validarCodigo(codigo.value);
 
    if(validacao) {
      openMsgCode('Código já foi usado!', '#FF9200')
    } else {
      let cont = 1;
      for(let i=0; i < codigos.length; i++){
      let c = codigos[i];
    
      if(codigo.value === c) {
        let picture = document.getElementById('p' + cont.toString());
        openPicture(picture);
        codigo.value = '';
        if(myPicturesRecuperado === null) {
          myPictures.push(c);
          myPicturesString = JSON.stringify(myPictures);
          localStorage.setItem('myPictures', myPicturesString);
        } else {
          myPicturesRecuperado.push(c);
          myPicturesRecuperadoString = JSON.stringify(myPicturesRecuperado);
          localStorage.setItem('myPictures', myPicturesRecuperadoString);
       
        }
   
        openMsgCode('Figurinha Desbloqueada com sucesso!', '#099C00');
      }
      cont++;
    }
  }
 } else {
   console.log('Codigo Inválido!');
   openMsgCode('Código Inválido!', 'red')
 }
}

function validarCodigo(code) {
  //let codigoValido;
  let codigoJaObtido = false;
  
  if (myPicturesRecuperado !== null) {
    if(myPicturesRecuperado.includes(code)){
      codigoJaObtido = true;
    }
  } else {
      if (myPictures.includes(code)) {
        codigoJaObtido = true;
      }
  }
  return codigoJaObtido;
}



function openMsgCode(mensagem, cor) {
  let msgCode = document.querySelector('#msg-code');
  msgCode.style.display = 'block';
  
  msgCode.innerHTML = mensagem;
  msgCode.style.color = cor;
 
  setTimeout(() => msgCode.style.display = 'none', 5000)
}

function openModal(codigo) {
  modal.style.display ='block';
  modal.innerHTML = `<div class="box">
                        <img src="img/${codigo}.png">
                        <button onclick="closerModal()">X</button>
                     </div>`;
}

function closerModal() {
  modal.style.display = 'none';
}

document.getElementById('btn-menu').addEventListener('click', () => abrirMenu());
let menu = document.getElementById('menu');
let menuStatus = 'off';

function abrirMenu() {
  if (menuStatus === 'off') {
    menu.style.marginLeft = 0;
    menuStatus= 'on'
  }
}

function closerMenu() {
  menu.style.marginLeft = '-290px';
  menuStatus = 'off'
}

let container = document.querySelector('.container');
container.addEventListener('click', ()=> closerMenu());

let version = document.querySelector('#version');
version.addEventListener('click', () => egg());
let click = 0;

function egg() {
  click++;
  if(click === 5) {
    alert('Desenvolvido por Sérgio A. Sousa');
    click = 0;
  }
}

let btnCopy = document.querySelector('#btn-copy');
btnCopy.addEventListener('click', () => copy());

function copy(){
		
			const texto = "nossoclubeapp@gmail.com";
			inputTest = document.createElement("input");
			inputTest.value = texto;
		
			document.body.appendChild(inputTest);
			inputTest.select();
		
			document.execCommand('copy');
			document.body.removeChild(inputTest);
		}
		
