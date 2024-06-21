$(document).ready(function() {

    // Função para adicionar uma nova tarefa
    function adicionarTarefa(tarefaTexto) {
        const novaTarefa = $('<div>').addClass('tarefa').text(tarefaTexto);

        // Adiciona evento de clique para remover a tarefa
        novaTarefa.click(function() {
            if (confirm('Você deseja remover esta tarefa?')) {
                $(this).remove();
                salvarTarefas();
            }
        });

        // Adiciona a nova tarefa no topo da lista
        $('#ft_list').prepend(novaTarefa);

        // Salva as tarefas no cookie
        salvarTarefas();
    }

    // Função para salvar as tarefas no cookie
    function salvarTarefas() {
        const tarefas = $('#ft_list .tarefa').map(function() {
            return $(this).text();
        }).toArray();

        document.cookie = `tarefas=${JSON.stringify(tarefas)}; path=/; max-age=31536000`;
    }

    // Função para carregar as tarefas do cookie
    function carregarTarefas() {
        const tarefasCookie = JSON.parse(document.cookie.replace('tarefas=', ''));

        if (tarefasCookie) {
            tarefasCookie.forEach(tarefaTexto => adicionarTarefa(tarefaTexto));
        }
    }

    // Evento para adicionar tarefa ao clicar no botão
    $('#botaoAdicionar').click(function() {
        const tarefaTexto = prompt('Digite a nova tarefa:');
        if (tarefaTexto) {
            adicionarTarefa(tarefaTexto);
        }
    });

    // Função para mostrar um alerta a cada 30 segundos
    function alertaPeriodico() {
        setInterval(function() {
            alert('Please, use me...');
        }, 30000);
    }

    // Carrega as tarefas quando a página é carregada e inicia o alerta periódico
    carregarTarefas();
    alertaPeriodico();

});