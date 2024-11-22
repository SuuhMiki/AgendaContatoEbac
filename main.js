let linhas='';


const form =document.getElementById('Form-contato');
form.addEventListener('submit', function(e){
    e.preventDefault();

const inputNomeContato = document.getElementById('Nome-contato');
const inputNumeroContato = document.getElementById('numero-contato');

let linha = '<tr>';
linha += `<td>${inputNomeContato.value}</td>`;
linha += `<td>${inputNumeroContato.value}</td>`;
linha +='<tr>';

linhas += linha;

const corpoTabela= document.querySelector("tbody");
corpoTabela.innerHTML = linhas;

inputNomeContato.value = '';
inputNumeroContato.value = '';

})