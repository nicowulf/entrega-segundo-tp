const renderHouses = () => {
    const housesList = document.getElementById("houses-list");

    const houses = [
        {  
            name: "Gryffindor",
            img: "../assets/img/houses/gryff.webp",
            phrase: "Donde habitan los valientes de corazón, su audacia, su valor y su caballerosidad distinguen a los Gryffindors.",
            values: ["Valentía", "Audacia", "Lealtad", "Honestidad", "Caballerosidad"],
            founder: "Godric Gryffindor",
            members: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Ginny Weasley"],
        },
        {
            name: "Slytherin",
            img: "../assets/img/houses/sly.webp",
            phrase: "Esa gente astuta que utiliza cualquier medio para lograr sus fines",
            values: ["Astucia", "Ambición", "Determinación", "Liderazgo", "Sangre"],
            founder: "Salazar Slytherin",
            members: ["Severus Snape", "Draco Malfoy", "Bellatrix Lestrange", "Tom Riddle (Lord Voldemort)"],
        },
        {
            name: "Hufflepuff",
            img: "../assets/img/houses/huff.webp",
            phrase: "Donde son justos y leales, esos pacientes Hufflepuffs son sinceros y no temen el trabajo duro.",
            values: ["Lealtad", "Trabajo Duro", "Justicia", "Amabilidad", "Tolerancia"],
            founder: "Helga Hufflepuff",
            members: ["Cedric Diggory", "Nymphadora Tonks", "Pomona Sprout", "Newt Scamander"],
        },
        {
            name: "Ravenclaw",
            img: "../assets/img/houses/rav.webp",
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
             <article class="${house.name}">
                 <div>
                     <img src="${house.img}" alt="imagen de ${house.name}">
                     <p>${house.phrase}</p>
                 </div>
                 <div>
                     <h4>Valores:</h4>
                     <ul>
                         ${stringOfValues}
                     </ul>
                     <h4>Fundador:</h4>
                     <p>${house.founder}</p>
                     <h4>Integrantes Notables:</h4>
                     <ul>
                         ${stringOfMembers}
                     </ul>
                 </div>
             </article>        
         `;

})
};


renderHouses();

