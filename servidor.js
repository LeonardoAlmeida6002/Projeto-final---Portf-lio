document.addEventListener("DOMContentLoaded", function () {
    const projetos = [
        // Adicionar projetos
        {
          titulo: "Computação Gráfica",
        descricao: "Carga horaria: 60 horas",
        clientes: "Nesta cadeira foi trabalhado com: Adobe Photoshop & Illustrator",
        

        },
        {
          titulo: "Lógica de Programação",
        descricao: "Carga horaria: 120 horas",
        clientes: "Nesta cadeira foi trabalhado com a introducão do Java no NetBeans"
        },
        {
          titulo: "Introdução a Website",
        descricao: "Carga horaria: 40 horas",
        clientes: "Nesta cadeira foi trabalhado com a introdução ao VScode"
        },
        {
          titulo: "Banco de dados 1",
        descricao: "Carga horaria: 60 horas",
        clientes: "Nesta cadeira foi trabalhado relação no banco de dados, com diagramas ER"
        },
        {
          titulo: "Programação Orientada a Objetos 1",
        descricao: "Carga horaria: 80 horas",
        clientes: "Nesta cadeira foi trabalhado com POO em java"
        },
        {
          titulo: "Análise de Sistemas",
        descricao: "Carga horaria: 40 horas",
        clientes: "Nesta cadeira foi trabalhado com Análise de Sistemas através do Oracle, também fizemos uma entrevista presencial com o intuito de por em pratica o conteúdo aprendido durante as aulas"
        },
        {
          titulo: "Programação Website 1",
        descricao: "Carga horaria: 80 horas",
        clientes: "Nesta cadeira foi trabalhado com HTML, CSS, JavaScript e Json através do VScode"
        },
        
        


    ];
  
    //buscar os elementos que você quer editar
    const listaProjetos = document.getElementById("listaProjetos");
    const conteudoExibido = document.getElementById("conteudo-exibido")
    const tituloConteudo = document.getElementById("titulo-conteudo")
    const descricaoConteudo = document.getElementById("descricao-conteudo")
    const clientesConteudo = document.getElementById("clientes-conteudo")
    
  
    projetos.forEach((projeto) => {
      const li = document.createElement("li");
      const button = document.createElement("button")
      button.textContent = projeto.titulo;
      button.addEventListener("click", function() {

        //conteudoExibido.textContent = projeto.conteudo
        tituloConteudo.textContent = projeto.titulo;
        descricaoConteudo.textContent = projeto.descricao;
        clientesConteudo.textContent = projeto.clientes;
      })


      //cria um novo li createElement("li")
      //cria um novo botão createElement("button")
  
      //adicionar o titulo do projeto ao botão .textContent
      
      
        conteudoExibido.style.display = "block";
        li.appendChild(button);
        listaProjetos.appendChild(li); // Exibe a section
      });
      //
      
      
    });
  
    // Adiciona um evento para ocultar a section ao clicar fora dela
    window.onclick = function (event) {
      if (event.target == conteudoExibido) {
        conteudoExibido.style.display = "none";

      }
    };
  ;