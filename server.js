document.addEventListener("DOMContentLoaded", function () {
    const projetos = [
        // Adicionar projetos
        {
          titulo: "blafbaffa",
        descricao: "fjsbajsbfjosajfba",
        clientes: "jfbfsjabfsabfafjsbaf"
        }

    ];
  
    //buscar os elementos que você quer editar
    //const listaProjetos = document.getElementById("lista-projetos");/
    const conteudoExibido = document.getElementById("conteudo-exibido")
    const tituloConteudo = document.getElementById("titulo-conteudo")
    const descricaoConteudo = document.getElementById("descricao-conteudo")
    const clientesConteudo = document.getElementById("titulo-conteudo")
    
  
    projetos.forEach((projeto) => {
      const li = document.createElement("li");
      const button = document.createElement("button")
      button.textContent = projeto.titulo;
      button.addEventListener("click", function() {
        conteudoExibido.textContent = projeto.conteudo
        tituloConteudo.textContent = projeto.titulo;
        descricaoConteudo.textContent = projeto.descricao;
        clientesConteudo.textContent = projeto.clientes;
      })
      //cria um novo li createElement("li")
      //cria um novo botão createElement("button")
  
      //adicionar o titulo do projeto ao botão .textContent
      
      
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
  ;