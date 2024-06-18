
const $div = document.getElementById("grid");
const $input = document.getElementById("filter");


fetch("https://hp-api.onrender.com/api/characters")
  .then((res) => res.json())
  .then((data) => {
    const characters = data;
    
    const renderCharacters = (characters) => {
      $div.innerHTML = "";
      characters.forEach((character) => {  
        
        let status ;
          if (character.alive === true ? status = "Vivo" : status = "Muerto");
        
        $div.innerHTML += `
          <div class="card">
            <div class="card_img">
              <img src="${character.image ? character.image :
               "../assets/img/defaultChar/harry-potter-def-char.webp"
              }" alt="imagen de ${character.name}">
            </div>
            <div>
              <h4>${character.name}</h4>
              <p><i>Casa</i>: ${character.house}</p>
              <p><i>Especie</i>: ${character.species}</p>
              <p><i>Género</i>: ${character.gender}</p>
              <p><i>Estado</i>: ${status}</p>
              <p><i>Intérprete</i>: ${character.actor}</p>
            </div>
          </div>`
      }
    )};
    renderCharacters(characters);
    
    $input.addEventListener("input", () => {
    const searchValue = $input.value.toLowerCase();

    const filterCharacter = characters.filter((character) =>
      character.name.toLowerCase().includes(searchValue)
    );

    renderCharacters(filterCharacter); 
  
    });
  });

  
 





