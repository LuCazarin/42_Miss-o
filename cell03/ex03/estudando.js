1. Função adicionarTarefa(tarefaTexto)
Esta função é responsável por adicionar uma nova tarefa à lista de tarefas. Vamos explicar o que cada parte faz:

const ftList = document.getElementById('ft_list');: Aqui, estamos selecionando o elemento com o id ft_list, que é a div que contém a lista de tarefas.

const novaTarefa = document.createElement('div');: Esta linha cria um novo elemento div, que será a representação da nova tarefa.

novaTarefa.className = 'tarefa';: Adicionamos a classe tarefa à nova div, para aplicar estilos CSS.

novaTarefa.textContent = tarefaTexto;: Definimos o texto da nova tarefa com o conteúdo fornecido pelo usuário.

novaTarefa.onclick = function () { ... };: Adicionamos um evento de clique à nova tarefa. Quando o usuário clicar em uma tarefa, será exibida uma caixa de diálogo pedindo confirmação para remover a tarefa.

ftList.insertBefore(novaTarefa, ftList.firstChild);: Aqui, estamos inserindo a nova tarefa no topo da lista de tarefas.

salvarTarefas();: Chamamos a função salvarTarefas() para salvar a lista atualizada de tarefas nos cookies.

2. Função salvarTarefas()
Esta função é responsável por salvar a lista de tarefas atualizada nos cookies.

const ftList = document.getElementById('ft_list');: Selecionamos a lista de tarefas.

const tarefas = [];: Criamos um array vazio para armazenar as tarefas.

for (let i = 0; i < ftList.children.length; i++) { ... }: Iteramos sobre os filhos da lista de tarefas.

tarefas.push(ftList.children[i].textContent);: Adicionamos o texto de cada tarefa ao array tarefas.

document.cookie = ...: Finalmente, convertemos o array tarefas em uma string JSON e a atribuímos ao cookie tarefas, que será armazenado no navegador do usuário.

3. Função carregarTarefas()
Esta função é responsável por carregar a lista de tarefas salvas nos cookies quando a página é carregada.

const cookieString = document.cookie;: Obtemos a string de cookies do navegador.

const cookies = cookieString.split('; ');: Dividimos a string de cookies em um array de strings, onde cada elemento é um cookie.

let tarefas = [];: Criamos um array vazio para armazenar as tarefas carregadas dos cookies.

for (const cookie of cookies) { ... }: Iteramos sobre os cookies para encontrar o cookie que contém as tarefas.

tarefas = JSON.parse(cookie.substring('tarefas='.length));: Quando encontramos o cookie das tarefas, convertemos a string JSON de volta para um array e a atribuímos à variável tarefas.

for (const tarefa of tarefas) { ... }: Por fim, iteramos sobre o array de tarefas carregadas e chamamos a função adicionarTarefa() para adicionar cada uma delas à lista.

Cookies
Os cookies são pequenos arquivos de texto armazenados no navegador do usuário. Eles são usados para armazenar informações sobre o usuário ou a página da web, como preferências, identificadores de sessão, e neste caso, a lista de tarefas.

document.cookie = ...: Esta linha define um novo cookie ou atualiza um cookie existente. Estamos definindo um cookie chamado tarefas com o valor sendo a string JSON da lista de tarefas.

const cookieString = document.cookie;: Esta linha obtém a string de cookies do navegador.

const cookies = cookieString.split('; ');: Esta linha divide a string de cookies em um array de strings, onde cada elemento é um cookie.

Linhas Adicionais
setInterval(function () { alert('Please, use me...'); }, 30000);: Esta linha configura um temporizador para exibir um alerta a cada 30 segundos. Isso foi adicionado como uma implementação adicional, conforme solicitado.