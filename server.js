document.addEventListener("DOMContentLoaded", function () {
    const projetos = [
        // Adicionar projetos
    ];
  
    //buscar os elementos que você quer editar
    //const listaProjetos = document.getElementById("lista-projetos");/
  
  
    projetos.forEach((projeto) => {
      //cria um novo li createElement("li")
      //cria um novo botão createElement("button")
  
      //adicionar o titulo do projeto ao botão .textContent
      
      button.addEventListener("click", function () {
          //adiciona titulo do projeto ao conteudo do section .textContent
          //adiciona descrição do projeto ao conteudo section .textContent
          //adiciona o atributo src com o link da imagem a tag img .setAttribute
          //adiciona os textos com os clientes no paragrafo p .textContent
     
        conteudoExibido.style.display = "block"; // Exibe a section
      });
      //
      li.appendChild(button);
      listaProjetos.appendChild(li);
    });
  
    // Adiciona um evento para ocultar a section ao clicar fora dela
    window.onclick = function (event) {
      if (event.target == conteudoExibido) {
        conteudoExibido.style.display = "none";
      }
    };
  });