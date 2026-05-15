 function transformar(){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      card.classList.toggle("flip");
    });

    const titulo = document.getElementById("titulo");

    if(titulo.innerText === "Minha Identidade"){
      titulo.innerText = "Modo Herói";
    } else {
      titulo.innerText = "Minha Identidade";
    }

  }
