//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;
//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    if(nomeAmigo === '') {
        alert('Por favor, insira um amigo!'); //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

        return;
}
amigos.push(nomeAmigo); //Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
inputAmigo.value = ''; //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
inputAmigo.focus(); //Adicionar automaticamente cursor no campo de texto
atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos'); //Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
    listaAmigos.innerHTML = ''; //Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.


    amigos.forEach(amigo => {
        let item = document.createElement('li'); //Percorrer o array e criar elementos de lista (li) para cada nome.
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}
function sortearAmigo() {
    if(amigos.length === 0) {
        alert('Você precisa adicionar um amigo!'); //Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; //Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu amigo sorteado foi ${amigoSorteado}`; //Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.

//Limpar lista de amigos deizando só o resultado
    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = '';
    amigos = [];
}