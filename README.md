# Sobre o Projeto
Controle de Notas é uma aplicação de console (CLI) desenvolvida como um trabalho acadêmico. O sistema permite ao usuário gerenciar as notas de um aluno ao longo de quatro bimestres, consultar notas específicas e verificar a situação final de aprovação ou reprovação com base na média.

Funcionalidades
Atribuir Notas: Adiciona ou atualiza a nota de um bimestre específico.
Consultar Notas: Exibe a nota de um bimestre informado pelo usuário.
Verificar Situação: Calcula a média final e informa se o aluno foi aprovado ou reprovado.

Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes tecnologias:

TypeScript: Linguagem principal para o desenvolvimento, adicionando tipagem estática ao JavaScript.
Node.js: Ambiente de execução para o código do lado do servidor.
readline-sync: Biblioteca para receber input do usuário de forma síncrona no console.

Como Executar o Projeto
Siga os passos abaixo para executar o projeto em seu ambiente local.

Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina:

Node.js (que já vem com o npm)
Git (opcional, para clonar o repositório)
Passos para Execução
Clone o repositório:

git clone [https://github.com/gustavociliao/Prova-do-thiago.git](https://github.com/gustavociliao/Prova-do-thiago.git)
Acesse a pasta do projeto:

cd controle-de-notas
Instale as dependências:

npm install
Execute a aplicação:

npm run dev
Ao executar o último comando, um menu interativo aparecerá no seu terminal para que você possa utilizar o sistema.

Estrutura de Arquivos
O projeto está organizado da seguinte forma:

├── Aluno.ts # (Model) Classe que representa o aluno e suas regras de negócio.

├── AlunoController.ts # (Controller) Classe que gerencia a interação com o usuário.

├── index.ts # Ponto de entrada da aplicação. └── ... # Outros arquivos de configuração (package.json, tsconfig.json etc).
