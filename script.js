    // procura o form no html pra começar o formulario//
    const formulario = document.querySelector("form");

    // Procura a tablela pra adiconar os valores //
    const corpoTabela  = document.querySelector("tbody");

    // adicona um novo id pro proximo produto//
    let proximoId = corpoTabela.children.length + 1;

    formulario.addEventListener("submit", function(event)
    {
        // funçao de deixar o campo vazio //
        event.preventDefault();

        // Variavel do nome //
        const nomeProduto = document.querySelector("#nome-produto").value;
        
        // Variavel do Produto//
        const quantidadeProduto = document.querySelector("#quantidade-produto").value;
       
        // Variavel do preço //
        const precoProduto = document.querySelector("#preco-produto").value;
        
        // começo pra adiconar os valores nas variaveis procuranto o Tr no html//
        const novaLinha = document.createElement("tr");

        //add o valor nessa variavel//
        const celulaId = document.createElement("td");
        celulaId.textContent = proximoId;proximoId++;
        novaLinha.appendChild(celulaId);

        //add o valor nessa variavel//
        const celulaNome = document.createElement("td");
        celulaNome.textContent = nomeProduto;
        novaLinha.appendChild(celulaNome);

        //add o valor nessa variavel//
        const celulaQuantidade = document.createElement("td");
        celulaQuantidade.textContent = quantidadeProduto;
        novaLinha.appendChild(celulaQuantidade)

        //add o valor nessa variavel fora que converte em rmoeda brasileira//
        const celulaPreco = document.createElement("td");
        celulaPreco.textContent = Number(precoProduto).toLocaleString("pt-BR", {
            style: "currency",
        currency: "BRL"
        });
        // fim do codigo //
        novaLinha.appendChild(celulaPreco);

        //Criação do Botao de excluir//
        //Cria o Elemento td ação//
        const celulaAcoes = document.createElement("td");

        //Cria o botão excluir chamado ação//
        const botaoExcluir = document.createElement("button");

        botaoExcluir.textContent = "Excluir";

        // função que excluir um item na tabela//

        botaoExcluir.addEventListener("click", function() {
        novaLinha.remove();
        });
        // fim das açoes excluir //
        celulaAcoes.appendChild(botaoExcluir);
        novaLinha.appendChild(celulaAcoes);
        
        //fim da tabela//
        corpoTabela.appendChild(novaLinha);
        formulario.reset();


    });
