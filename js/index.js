// animação com scroll 
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// animação com scroll endS

// pre loader 
$(window).on("load",function(){
  $(".loader-container").fadeOut(1000);
  setTimeout(function(){
    $(".Typewriter").addClass("animate");
  },1000)
})
// pre loader end 

document.querySelector('.brand').addEventListener('click', function() {
  // Adiciona a classe que contém as propriedades de animação
  this.classList.add('click-animation');

  // Remove a classe após a animação terminar
  setTimeout(() => {
    this.classList.remove('click-animation');
  }, 1000); // Defina a duração da animação em milissegundos aqui
});


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
