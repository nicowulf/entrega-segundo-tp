const $main = document.querySelector("main");

fetch("https://hp-api.onrender.com/api/characters")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
      data.forEach((character) => {
                         
        let status ;
          if (character.alive === true ? status = "Vivo" : status = "Muerto");
        
        $main.innerHTML += `<div>
        <img src="${
          character.image
            ? character.image
            : "../assets/img/defaultChar/harry-potter-def-char.webp"
        }">
        <h4>${character.name}</h4>
        <p><i>Casa</i>: ${character.house}</p>
        <p><i>Especie</i>: ${character.species}</p>
        <p><i>Género</i>: ${character.gender}</p>
        <p><i>Estado</i>: ${status}</p>
        <p><i>Intérprete</i>: ${character.actor}</p>
        </div>`;

    });
  });


