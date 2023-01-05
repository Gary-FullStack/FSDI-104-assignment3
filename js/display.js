function displayPetCards() {

    // select the section by id
    let petSection = document.getElementById("pets");
    let card = "";
    // travel the array
    for (let i = 0; i < PetsRus.pets.length; i++) {
        let pet = PetsRus.pets[i];
        // create the template string
        card += `
            <div class = "petCard">
            <h4>Owner: ${pet.Oname}</h4>
            <h4>Email: ${pet.Email}</h4>
            <h4>Name: ${pet.name}</h4>
            <p> Age: ${pet.age}</p>
            <p> Type: ${pet.type}</p>
            <p> Gender: ${pet.gender}</p>
            <p> Breed: ${pet.breed}</p>
            <p> Temperament: ${pet.temperament}</p>
            <p> Service: ${pet.service}</p>
            </div>`;

        console.log(card);
        // 

    }
    //    insert template into the petsection
    petSection.innerHTML = card;
}



// function displayInfo() {

//     document.getElementById("info").innerHTML = "you have " + PetsRus.pets.length + " pets registered.";
// }