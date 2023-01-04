
let PetsRus = {
    name: 'Pets R Us',

    address: {
        location: '123 Street',
        city: 'PetVillage',
        State: 'Stateasota',
        zip: '12345'
    },

    contactUs: {
        email: 'petsrus@pets.com',
        Phone: '123 - 456 - 7890',
        twitter: '@PetsRUs'
    },

    hours: {
        open: '0800',
        close: '1600'
    },
    pets: []
}


function Pet(ownerName, ownerEmail, name, age, type, gender, breed, temperament, service) {

    this.ownerName = ownerName;
    this.ownerEmail = ownerEmail;
    this.name = name;
    this.age = age;
    this.type = type;
    this.gender = gender;
    this.breed = breed;
    this.temperament = temperament;
    this.service = service;

}

let inputOname = document.getElementById('txtOname');
let inputEmail = document.getElementById('txtEmail');
let inputName = document.getElementById('txtName');
let inputAge = document.getElementById('txtAge');
let inputType = document.getElementById('txtType');
let inputGender = document.getElementById('txtGender');
let inputBreed = document.getElementById('txtBreed');
let inputTemperament = document.getElementById('txtTemp');
let inputService = document.getElementById('txtService');

// register pet to the HTML form
function register() {
    console.log(inputOname.value, inputEmail.value, inputName.value, inputAge.value, inputType.value, inputGender.value, inputBreed.value, inputTemperament.value, inputService.value);

    let newPet = new Pet(inputOname.value, inputEmail.value, inputName.value, inputAge.value, inputType.value, inputGender.value, inputBreed.value, inputTemperament.value, inputService.value);

    PetsRus.pets.push(newPet);
    // alert("you have " + PetsRus.pets.length + " pets registered.");
    // console.log(newPet);
    // console.log(PetsRus.pets);
    displayInfo();
    displayPetCards();
    clearForm();
}
function clearForm() {
    inputOname.value = "";
    inputEmail.value = "";
    inputName.value = "";
    inputAge.value = "";
    inputType.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputTemperament.value = "";
    inputService.value = "";

}

function displayInfo() {

    //     document.getElementById("info").innerHTML = "you have " + PetsRus.pets.length + " pets registered.";
}


function init() {
    let Jake = new Pet('Bob', 'Bob@css.com', 'Jake', '13', 'dog', 'male', 'lab', 'calm', 'nails');
    let Ivy = new Pet('Bob', 'Bob@css.com', 'Ivy', '3', 'dog', 'female', 'mix', 'hyper', 'grooming');
    let Penny = new Pet('Bob', 'Bob@css.com', 'Penny', '10', 'dog', 'female', 'Australian Cattle', 'loving', 'check-up');
    PetsRus.pets.push(Jake, Ivy, Penny);

    displayInfo();
    displayPetCards();
}
window.onload = init;