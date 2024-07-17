
const btnCodigo = document.querySelector('#btnCodigo')
const codigos = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
let myPictures = [];
let myPicturesStringRecuperado = localStorage.getItem('myPictures')
let myPicturesRecuperado = JSON.parse(myPicturesStringRecuperado);

if (myPicturesRecuperado != null){
  for (let i = 0; i < myPicturesRecuperado.length; i++) {
    let picRec = myPicturesRecuperado[i];
    let cont=1;
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

btnCodigo.addEventListener('click', ()=> conferirCodigo());

const modal = document.querySelector('#modal');
 
function openPicture(cont) {
  cont.src = 'img/'+ cont.id + '.png';
  cont.style.display = "block";
  cont.addEventListener('click', ()=> openModal(cont.id));
}

function conferirCodigo() {
  let codigo = document.querySelector('#codigo');
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
   
      openMsgCode();
    }
    cont++;
    
  }

}

function openMsgCode() {
  let msgCode = document.querySelector('#msg-code');
  msgCode.style.display = 'block';
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
  menu.style.marginLeft = '-260px';
  menuStatus = 'off'
}

let container = document.querySelector('.container');
container.addEventListener('click', ()=> closerMenu())
