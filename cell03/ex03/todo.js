// Função para adicionar uma nova tarefa
function adicionarTarefa(tarefaTexto) {
    const ftList = document.getElementById('ft_list');

    // Cria uma nova div para a tarefa
    const novaTarefa = document.createElement('div');
    novaTarefa.className = 'tarefa';
    novaTarefa.textContent = tarefaTexto;

    // Adiciona um evento de clique para remover a tarefa
    novaTarefa.onclick = function () {
        if (confirm('Você deseja remover esta tarefa?')) {
            ftList.removeChild(novaTarefa);
            salvarTarefas();
        }
    };

    // Adiciona a nova tarefa no topo da lista
    ftList.insertBefore(novaTarefa, ftList.firstChild);

    // Salva as tarefas no cookie
    salvarTarefas();
}

// Função para salvar as tarefas no cookie
function salvarTarefas() {
    const ftList = document.getElementById('ft_list');
    const tarefas = [];
    
    // Adiciona cada tarefa ao array
    for (let i = 0; i < ftList.children.length; i++) {
        tarefas.push(ftList.children[i].textContent);
    }

    // Converte o array em uma string JSON e salva no cookie
    document.cookie = `tarefas=${JSON.stringify(tarefas)}; path=/; max-age=31536000`;
}

// Função para carregar as tarefas do cookie
function carregarTarefas() {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    let tarefas = [];

    // Encontra o cookie de tarefas
    for (const cookie of cookies) {
        if (cookie.startsWith('tarefas=')) {
            tarefas = JSON.parse(cookie.substring('tarefas='.length));
            break;
        }
    }

    // Adiciona cada tarefa à lista
    for (const tarefa of tarefas) {
        adicionarTarefa(tarefa);
    }
}

// Evento para adicionar tarefa ao clicar no botão
document.getElementById('botaoAdicionar').onclick = function () {
    const tarefaTexto = prompt('Digite a nova tarefa:');
    if (tarefaTexto) {
        adicionarTarefa(tarefaTexto);
    }
};

// Função para mostrar um alerta a cada 30 segundos
function alertaPeriodico() {
    setInterval(function () {
        alert('Please, use me...');
    }, 30000); // 30000 milissegundos = 30 segundos
}

// Carrega as tarefas quando a página é carregada e inicia o alerta periódico
window.onload = function() {
    carregarTarefas();
    alertaPeriodico();
};
