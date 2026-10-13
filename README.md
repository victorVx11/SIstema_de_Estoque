# Controle de Estoque

Aplicação web desenvolvida para praticar Python, Flask, HTML, CSS e integração com banco de dados SQLite. Permite cadastrar, consultar e excluir produtos por uma interface no navegador.

## Funcionalidades

- Cadastro de produtos com nome, quantidade e preço.
- Listagem dos produtos em uma tabela com ID, nome, quantidade, preço e ações.
- Exclusão de produtos pelo ID, com um botão em cada linha.
- Armazenamento dos dados em um banco SQLite.
- Campos obrigatórios e restrição de valores negativos no formulário HTML.

## Tecnologias

| Tecnologia | Utilização |
| --- | --- |
| Python | Lógica da aplicação |
| Flask | Rotas e processamento das requisições |
| SQLite | Armazenamento dos produtos |
| HTML e Jinja2 | Estrutura da página e exibição dos dados |
| CSS | Estilização da interface |

## Arquivos principais

| Arquivo | Função |
| --- | --- |
| `app-victor.py` | Aplicação Flask e operações no banco |
| `templates/index.html` | Página de cadastro e listagem |
| `static/style.css` | Estilos da página |
| `estoque.db` | Banco de dados, criado na primeira execução se não existir |

As pastas `templates` e `static` devem ficar no mesmo diretório de `app-victor.py`.

## Como executar

É necessário ter Python 3 e pip instalados.

1. Baixe ou clone o projeto e abra um terminal na pasta que contém `app-victor.py`.

2. Crie um ambiente virtual:

   ```bash
   python -m venv .venv
   ```

3. Instale o Flask. No Windows, use o Python do ambiente virtual:

   ```powershell
   .\.venv\Scripts\python.exe -m pip install flask
   ```

4. Execute a aplicação:

   ```powershell
   .\.venv\Scripts\python.exe app-victor.py
   ```

   No Linux ou macOS, os comandos equivalentes são:

   ```bash
   .venv/bin/python -m pip install flask
   .venv/bin/python app-victor.py
   ```

5. Abra no navegador: **http://127.0.0.1:5000**.

Mantenha o terminal aberto enquanto usa o sistema. Para encerrar, pressione `Ctrl + C`.

> A página deve ser acessada pelo Flask. Abrir o HTML diretamente ou pelo Live Server não processa os comandos Jinja2 nem as operações no banco.

## Como usar

1. Preencha o nome, a quantidade e o preço do produto.
2. Clique em **Cadastrar** para salvar e atualizar a tabela.
3. Para remover um produto, clique em **Excluir** na linha correspondente.

A exclusão remove o registro do banco de dados. Os demais produtos permanecem cadastrados, inclusive após reiniciar a aplicação.

## Rotas

| Método | Rota | Ação |
| --- | --- | --- |
| GET | `/` | Exibe a página e os produtos cadastrados |
| POST | `/cadastrar` | Cadastra um produto |
| POST | `/excluir/<int:id>` | Exclui o produto com o ID informado |

## Sobre o projeto

Projeto de estudo em desenvolvimento. Esta versão oferece cadastro, listagem e exclusão, sem login ou controle de permissões. Ainda não registra movimentações de entrada e saída de estoque.

O servidor de desenvolvimento do Flask é destinado a testes locais. A publicação para uso real exige configuração de hospedagem, segurança e persistência do banco de dados.

## Possíveis melhorias

- Edição e pesquisa de produtos.
- Confirmação antes de excluir.
- Validação dos dados também no Python.
- Login e controle de acesso.
- Histórico de entradas e saídas.
- Exportação de relatórios.

## Autor

Desenvolvido por **Victor Gabriel**, estudante de Engenharia da Computação na UNICEP São Carlos.
