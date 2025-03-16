
//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

//Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;
//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    if(nomeAmigo === '') {
        alert('Por favor, insira um nome válido!'); //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

        return;
}
amigos.push(nomeAmigo);
inputAmigo.value = '';
inputAmigo.focus();
atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}


