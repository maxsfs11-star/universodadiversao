function mostrarDescricao(produto) {
    const texto = {
      maca: "Nossa Maçã do Amor é feita com maçãs frescas, cobertas com uma camada crocante de caramelo vermelho. Um clássico irresistível!",
      cupcake: "Cupcakes fofinhos e decorados com cobertura cremosa. Sabores variados para adoçar qualquer momento!",
      espeto: "Espetos de morango mergulhados em chocolate ao leite. Uma explosão de sabor e frescor!",
      donuts: "Deliciosas Mini Donuts, criançada vai amar.",
    };
  
    document.getElementById("texto-descricao").textContent = texto[produto];
    document.getElementById("descricao").style.display = "block";
  }


let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");
console.log("Testing... Ok");


setTimeout(function() {
  elem_preloader.classList.remove("preloader");
  elem_loader.classList.remove("loader");
  }, 1280);


