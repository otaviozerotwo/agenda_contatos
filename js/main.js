const formContatos = document.getElementById('form-contato');
const telefones = [];

let linhas = [];

formContatos.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionarLinha();
  atualizarTabela();
  contadorContatos();
});

function adicionarLinha() {
  const inputNome = document.getElementById('nome-contato');
  const inputTelefone = document.getElementById('telefone-contato');

  if (telefones.includes(inputTelefone.value)) {
    alert('Este telefone já existe na agenda');
  } else {
    telefones.push(inputTelefone.value);
  
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTelefone.value}</td>`
    linha += '</tr>';
  
    linhas.push(linha);
  }

  inputNome.value = '';
  inputTelefone.value = '';
}

function atualizarTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas.join('');
}

function contadorContatos() {
  let filtroLinhas = linhas.filter(linha => {
    return linha.includes('<tr>') && linha.includes('</tr>');
  });

  document.getElementById('count-contatos').innerHTML = `${filtroLinhas.length} Contatos`;
}

const handleTelefone = (event) => {
  let input = event.target;
  
  input.value = mascaraTelefone(input.value);
}

const mascaraTelefone = (value) => {
  if (!value) return '';

  value = value.replace(/\D/g,'');
  value = value.replace(/(\d{2})(\d)/,"($1) $2");
  value = value.replace(/(\d)(\d{4})$/,"$1-$2");

  return value;
}