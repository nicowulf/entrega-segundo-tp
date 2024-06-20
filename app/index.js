const renderHouses = () => {
    const housesList = document.getElementById("houses-list");

    const houses = [
        {  
            name: "Gryffindor",
            img: "../assets/img/houses/gryff.png",
            phrase: "Donde habitan los valientes de corazón, su audacia, su valor y su caballerosidad distinguen a los Gryffindors.",
            values: ["Valentía", "Audacia", "Lealtad", "Honestidad"],
            founder: "Godric Gryffindor",
            members: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"],
        },
        {
            name: "Slytherin",
            img: "../assets/img/houses/sly.png",
            phrase: "Esa gente astuta que utiliza cualquier medio para lograr sus fines",
            values: ["Astucia", "Ambición", "Determinación", "Liderazgo", "Sangre"],
            founder: "Salazar Slytherin",
            members: ["Severus Snape", "Draco Malfoy", "Bellatrix Lestrange", "Tom Riddle (Lord Voldemort)"],
        },
        {
            name: "Hufflepuff",
            img: "../assets/img/houses/huff.png",
            phrase: "Donde son justos y leales, esos pacientes Hufflepuffs son sinceros y no temen el trabajo duro.",
            values: ["Lealtad", "Trabajo Duro", "Justicia", "Amabilidad", "Tolerancia"],
            founder: "Helga Hufflepuff",
            members: ["Cedric Diggory", "Nymphadora Tonks", "Pomona Sprout", "Newt Scamander"],
        },
        {
            name: "Ravenclaw",
            img: "../assets/img/houses/rav.png",
            phrase:"Donde aquellos con ingenio y conocimiento siempre encontrarán a los de su clase.",
            values: ["Intelecto", "Creatividad", "Originalidad", "Integridad", "Sabiduría"],
            founder: "Rowena Ravenclaw",
            members: ["Luna Lovegood", "Cho Chang", "Gilderoy Lockhart", "Padma Patil"],
        }
    ];

     houses.forEach((house) => {
        // console.log(house)
        const arrayOfValues = house.values.map((value) => `<li>${value}</li>`);
        const arrayOfMembers = house.members.map((member) => `<li>${member}</li>`);

        const stringOfValues = arrayOfValues.join("");
        const stringOfMembers = arrayOfMembers.join("");

        housesList.innerHTML += `
              <div class= "card-container">
                <div class="card-${house.name}">
                  <div class="front-content">
                     <img src="${house.img}" alt="imagen de ${house.name}">
                  </div>
                  <div class="content">
                     <p class="phrase">${house.phrase}</p>
                     <h4 class="heading">Valores:</h4>
                     <ul>
                         ${stringOfValues}
                     </ul>
                     <h4 class="heading">Fundador:</h4>
                     <p>${house.founder}</p>
                     <h4 class="heading">Integrantes Notables:</h4>
                     <ul>
                         ${stringOfMembers}
                    </ul>
                  </div>
                </div>
              </div>
         `;

})
};

const renderSpells = () => {
    const spellsList = document.getElementById("spells-list");

    const spells = [
      {
        name: "Expecto Patronum",
        description:
          "Este hechizo se utiliza para conjurar un Patronus, una forma de energía positiva que repele los Dementores, seres que se alimentan de felicidad y dejan a su paso una sensación de frío y desesperación.",
        img: "../assets/gifs/expectopatronum.webp",
      },
      {
        name: "Expelliarmus",
        description:
          "Un hechizo que desarma a un oponente, haciendo que su varita salga volando de su mano. Es utilizado principalmente para desarmar en lugar de causar daño.",
        img: "../assets/gifs/expelliarmus.webp",
      },
      {
        name: "Alohomora",
        description:
          "Abre cerraduras y puertas cerradas. Es especialmente útil para acceder a lugares cerrados o bloqueados.",
        img: "../assets/gifs/alohomora.webp",
      },
      {
        name: "Avada Kedavra",
        description:
          "Uno de los tres hechizos imperdonables, Avada Kedavra es una maldición asesina que causa la muerte instantánea a su objetivo. Es uno de los hechizos más oscuros y está prohibido por la ley mágica.",
        img: "../assets/gifs/absnot.webp",
      },
      {
        name: "Wingardium Leviosa",
        description:
          "Un hechizo encantador que levita objetos. Es uno de los primeros hechizos que los estudiantes de Hogwarts aprenden en clase de Encantamientos.",
        img: "../assets/gifs/leviosa.webp",
      },
      {
        name: "Accio",
        description:
          "El hechizo de convocatoria. Se utiliza para atraer objetos hacia el lanzador, incluso si están fuera de su alcance físico.",
        img: "../assets/gifs/Accio_Harry_Potter.webp",
      },
      {
        name: "Lumos",
        description:
          "Enciende la punta de la varita del lanzador, proporcionando una fuente de luz en la oscuridad. Es útil para explorar lugares oscuros",
        img: "../assets/gifs/lumos.webp",
      },
      {
        name: "Crucio",
        description:
          "Otra de las maldiciones imperdonables, Crucio es una maldición torturadora que causa un dolor extremo al objetivo. Es utilizada como herramienta de tortura por los seguidores de Lord Voldemort.",
        img: "../assets/gifs/ofCourseNot.webp",
      },
      {
        name: "Imperio",
        description:
          "La tercera maldición imperdonable, Imperio permite al lanzador controlar completamente las acciones de la víctima. Es utilizado para manipular y controlar a otras personas.",
        img: "../assets/gifs/nosepue.webp",
      },
    ];

    spells.forEach((spell) => {
        spellsList.innerHTML += `
            <li>
              <div class= "card-container-spells">
                <div class="card">
                  <div class="front-content-spells">
                     <h4>${spell.name}</h4>
                     <p>${spell.description}</p>
                  </div>
                  <div class="content">
                     <img src="${spell.img}" alt="imagen de ${spell.name}">
                  </div>
                </div>
              </div>
            </li>`;
    })    
};

const renderMovies = () => {
  const moviesList = document.getElementById("movies-list");

  const movies = [
    {
      id: "HP1",
      cover: "../assets/img/movs/HP1.webp",
      title: "Harry Potter y la Piedra Filosofal",
      synopsis:
        "Un huérfano entra a una escuela de magia y hechicería donde se dará cuenta de la verdad sobre su familia, de sí mismo y del mal que asecha el mundo mágico.",
      year: 2001,
      duration: "2h 32m",
      spoiler:
        "El profesor Quirrell, aparentemente débil y tímido, es en realidad el anfitrión de Lord Voldemort. Voldemort está buscando la Piedra Filosofal, que se guarda en Hogwarts, para restaurar su forma física y recuperar su poder. Este giro en la trama es crucial para el clímax de la historia, donde Harry y sus amigos deben enfrentarse a Quirrell/Voldemort para proteger la Piedra Filosofal y evitar que caiga en manos del mal.",
    },
    {
      id: "HP2",
      cover: "../assets/img/movs/HP2.webp",
      title: "Harry Potter y la Cámara Secret",
      synopsis:
        "Un antiguo mito parece corroborado cuando una misteriosa presencia comienza a acechar los pasillos de la escuela de magia dejando a sus víctimas petrificadas.",
      year: 2002,
      duration: "2h 41m",
      spoiler:
        "El heredero de Salazar Slytherin, revelado más adelante en la trama, es Tom Riddle, que se presenta en forma de un recuerdo conservado en un diario mágico. A través de este diario, Tom Riddle manipula a Ginny Weasley para abrir la Cámara   Secreta, liberando al basilisco que petrifica a varios estudiantes y amenaza con matar a los nacidos de muggles en Hogwarts. La resolución de esta trama es crucial para la seguridad de la escuela y para la comprensión más profunda de la conexión entre Harry y Voldemort.",
    },
    {
      id: "HP3",
      cover: "../assets/img/movs/HP3.webp",
      title: "Harry Potter y el Prisionero de Azkabán",
      synopsis:
        "Harry está listo para su tercer año en Hogwarts, pero cuando el terrible Sirius Black escapa de la prisión de Azkaban, el peligro se apodera de él y Harry sabe que, tarde o temprano, Black vendrá a su encuentro.",
      year: 2004,
      duration: "2h 22m",
      spoiler:
        "Sirius Black, quien ha sido presentado como un peligroso asesino y el responsable de la traición de los padres de Harry, en realidad es inocente. Además, se revela que Peter Pettigrew, quien había sido aparentemente asesinado por Sirius,está vivo y es quien verdaderamente traicionó a los padres de Harry. Este giro en la trama cambia la percepción de Sirius y de todo el incidente relacionado con la muerte de los padres de Harry.",
    },
    {
      id: "HP4",
      cover: "../assets/img/movs/HP4.webp",
      title: "Harry Potter y el Cáliz de Fuego",
      synopsis:
        "Un joven mago se encuentra compitiendo en un peligroso torneo entre escuelas de magia rivales, pero tendrá dificultades al distraerse con pesadillas recurrentes.",
      year: 2005,
      duration: "2h 37m",
      spoiler:
        "El Cáliz de Fuego, un artefacto mágico que selecciona a los campeones para participar en el Torneo de los Tres Magos, es manipulado para incluir a Harry Potter como un cuarto campeón, a pesar de que no cumplía con los requisitos de edad para participar. Este giro en la trama lleva a Harry a enfrentarse a desafíos mortales y a descubrir una conspiración más oscura detrás de su participación en el torneo.",
    },
    {
      id: "HP5",
      cover: "../assets/img/movs/HP5.webp",
      title: "Harry Potter y la Órden del Fénix",
      synopsis:
        "Con su advertencia sobre el regreso de Lord Voldemort, Harry y Dumbledore son atacados por las autoridades del Ministerio de Magia, mientras que una maga autoritaria toma lentamente el poder en Hogwarts.",
      year: 2007,
      duration: "2h 18m",
      spoiler:
        "Sirius Black, el padrino de Harry, muere. Durante una batalla en el Ministerio de Magia, Sirius es asesinado por su prima, Bellatrix Lestrange, quien lo lanza a través de un umbral mágico, lo que lo hace caer en un abismo llamado el 'Velos'. Esta pérdida afecta profundamente a Harry, ya que Sirius era una figura paterna para él y su única conexión con su familia de sangre.",
    },
    {
      id: "HP6",
      cover: "../assets/img/movs/HP6.webp",
      title: "Harry Potter y el Misterio del Príncipe",
      synopsis:
        "Harry Potter empieza su sexto año en Hogwarts, descubre un libro 'propiedad del Príncipe Mestizo', y empieza a aprender más sobre el oscuro pasado de Voldemort.",
      year: 2009,
      duration: "2h 33m",
      spoiler:
        "Severus Snape, quien ha sido un personaje ambiguo durante toda la serie, finalmente mata a Albus Dumbledore, el director de Hogwarts y mentor de Harry. Esta traición aparente por parte de Snape deja a Harry y a los lectores con muchas   preguntas sin respuesta sobre los verdaderos motivos y lealtades de Snape. Este evento marca un punto crucial en la trama y prepara el escenario para el enfrentamiento final entre Harry y Voldemort en el último libro.",
    },
    {
      id: "HP71",
      cover: "../assets/img/movs/HP71.webp",
      title: "Harry Potter y las Reliquias de la Muerte parte 1",
      synopsis:
        "Harry se embarca en una carrera contrarreloj para destruir los Horrocruxes y descubre la existencia de los tres objetos más poderosos del mundo mágico: las reliquias de la muerte.",
      year: 2010,
      duration: "2h 26m",
      spoiler:
        "Uno de los momentos más tristes es la muerte de Dobby, el elfo doméstico. Dobby muere heroicamente mientras ayuda a Harry, Hermione, Ron y otros prisioneros a escapar de la mansión de los Malfoy. La escena es emotiva, ya que Dobby muere en los brazos de Harry, justo después de lograr su libertad.",
    },
    {
      id: "HP72",
      cover: "../assets/img/movs/HP72.webp",
      title: "Harry Potter y las Reliquias de la Muerte parte 2",
      synopsis:
        "Harry, Ron y Hermione buscan los Horcruxes restantes de Voldemort en su esfuerzo por destruir al Señor Oscuro mientras la batalla final continúa en Hogwarts.",
      year: 2011,
      duration: "2h 10m",
      spoiler:
        "Uno de los spoilers más impactantes es la revelación de la verdadera lealtad y los sentimientos de Severus Snape. A         través de sus recuerdos, que Harry ve en el Pensadero, se descubre que Snape siempre estuvo enamorado de la madre de Harry, Lily Potter, y que todo lo que hizo, incluyendo su aparente alianza con Voldemort, fue para proteger a Harry en honor a ella. Además, Snape revela que Harry es un Horrocrux involuntario, lo que significa que Harry debe morir para que Voldemort sea completamente mortal.",
    },
  ];

  movies.forEach((movie) => {
    moviesList.innerHTML += `
            <article class="${movie.id}">
                <img src="${movie.cover}" alt="imagen de ${movie.name}">
                <h4>${movie.title}</h4>
                <div class="mov-data">
                    <p class="mov-year">${movie.year}</p>
                    <p class="mov-duration">${movie.duration}</p>
                </div>
                <div class="mov-description">
                    <p>${movie.synopsis}</p>
                </div>
                <div class="mov-spoiler">
                    <button class="spoiler-btn">Alerta de spoiler!!</button>
                    <p class="mov-spoiler">${movie.spoiler}</p> 
                </div>    
            </article>        
        `;
  });
};

const renderBooks = () => {
  const booksList = document.getElementById("books-list");

  const books = [
    {
      id: "HPPiedra",
      cover: "../assets/img/books/HPylPF.webp",
      title: "Harry Potter y la Piedra Filosofal",
      link: "https://www.penguinlibros.com/ar/tematicas/138821-libro-harry-potter-y-la-piedra-filosofal-harry-potter-1-9788498380170?mot_tcid=661499c1-da17-4079-9552-ae34aeb5b2e5",
    },
    {
      id: "HPCamara",
      cover: "../assets/img/books/HPylaCS.webp",
      title: "Harry Potter y la Cámara Secrerta",
      link: "https://www.penguinlibros.com/ar/tematicas/138824-libro-harry-potter-y-la-camara-secreta-harry-potter-2-9788498380187?mot_tcid=c4a3f0be-fd20-4c23-80f0-183c20d3851b",
    },
    {
      id: "HPPrisionero",
      cover: "../assets/img/books/HPyelPdA.webp",
      title: "Harry Potter y el Prisionero de Azkabán",
      link: "https://www.penguinlibros.com/ar/tematicas/138827-libro-harry-potter-y-el-prisionero-de-azkaban-harry-potter-3-9788498380194?mot_tcid=45c04d23-43ab-4263-8981-a392ae47c925",
    },
    {
      id: "HPCaliz",
      cover: "../assets/img/books/HPyelCdF.webp",
      title: "Harry Potter y el Cáliz de Fuego",
      link: "https://www.penguinlibros.com/ar/tematicas/138830-libro-harry-potter-y-el-caliz-de-fuego-harry-potter-4-9788498380200?mot_tcid=15b1ecff-e3a3-4f03-b266-d6f045ed9709",
    },
    {
      id: "HPOrden",
      cover: "../assets/img/books/HPylaOdF.webp",
      title: "Harry Potter y la Órden del Fénix",
      link: "https://www.penguinlibros.com/ar/tematicas/138833-libro-harry-potter-y-la-orden-del-fenix-harry-potter-5-9788498380217?mot_tcid=8c77071d-e00b-4d95-a41f-e22f722a4307",
    },
    {
      id: "HPPrincipe",
      cover: "../assets/img/books/HPyelMdP.webp",
      title: "Harry Potter y el Misterio del Príncipe",
      link: "https://www.penguinlibros.com/ar/tematicas/138147-libro-harry-potter-y-el-misterio-del-principe-harry-potter-6-9788478889921?mot_tcid=73e9031b-f6e4-4886-bbc0-13a3a4026580",
    },
    {
      id: "HPReliquias",
      cover: "../assets/img/books/HPylRdlM.webp",
      title: "Harry Potter y las Reliquias de la Muerte",
      link: "https://www.penguinlibros.com/ar/tematicas/166024-libro-harry-potter-y-las-reliquias-de-la-muerte-harry-potter-7-9789878000190?mot_tcid=afad58d3-4a6e-44c5-b091-18bcf90e4739",
    },
  ];

   books.forEach((book) => {
     booksList.innerHTML += `
            <article class="${book.id}">
              <div class="book-cover">
                <img src="${book.cover}" alt="imagen de ${book.title}">
              </div>
              <div class="book-data">
                <h4>${book.title}</h4>
                <p>Editorial Salamandra</p>
              </div>
              <div class="book-link">
                    <button class="link-btn" <a href="${book.link}" target= "_blank">Ir a comprar</a></button>
              </div>    
            </article>        
        `;
   });
};  

renderHouses();
renderSpells();
renderMovies();
renderBooks();
