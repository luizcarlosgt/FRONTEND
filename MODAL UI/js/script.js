const btn_fechar_modal = document.querySelector('#fechar');
const btn_abrir_modal = document.querySelector('#btn');
const modal = document.querySelector('.modal');

btn_fechar_modal.addEventListener('click', showModal);
btn_abrir_modal.addEventListener('click', showModal);

function showModal(){
    modal.classList.toggle('active');
}