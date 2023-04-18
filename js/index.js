function exibirTamanhoJanela() {
    // Obter a largura e altura da janela do navegador em pixels
    var largura = window.innerWidth;
    var altura = window.innerHeight;
      
    // Exibir a largura e altura no console
    console.log("Largura: " + largura + " pixels");
    console.log("Altura: " + altura + " pixels");
  }
  
  // Chame a função pela primeira vez para exibir o tamanho da janela
  exibirTamanhoJanela();
  
  // Adicione um ouvinte de evento para chamar a função sempre que a janela for redimensionada
  window.addEventListener("resize", function() {
    console.clear();
    exibirTamanhoJanela();
  });