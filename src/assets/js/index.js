import Contact from "./Contact.js";
const lastNameInput = document.querySelector("input#lastname");
const firstNameInput = document.querySelector("input#firstname");
const ageInput = document.querySelector("input#firstname");
const emailInput = document.querySelector("input#email");
const phoneNumberInput = document.querySelector("input#phoneNumber");
const addContactBtn = document.querySelector("#submitBtn");
let contactRepository = [];
let contactIdRepository = [];
addContactBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const newContact = new Contact(lastNameInput.value, firstNameInput.value, parseInt(ageInput.value), emailInput.value, phoneNumberInput.value);
    console.log(newContact);
    contactRepository.push(newContact);
    contactIdRepository.push(newContact.id);
    console.log(contactRepository);
});
const displayAll = document.querySelector("#contactList");
const searchFormInput = document.querySelector("#search");
const searchBtn = document.querySelector("#searchbtn");
const output = document.querySelector("#output");
searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let foundContact = contactRepository.find(c => c.id === parseInt(searchFormInput.value));
    output.textContent = foundContact.firstname;
});
//const searchByIdBtn = document.querySelector("#displayById") as HTMLButtonElement
//const searchByNameBtn = document.querySelector("#displayByName") as HTMLButtonElement
//const searchByFirstNameBtn = document.querySelector("#displayByFistName") as HTMLButtonElement
//const searchByAgeBtn = document.querySelector("#displayByAge") as HTMLButtonElement
