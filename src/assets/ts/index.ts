import Contact from "./Contact.js";
const lastNameInput:HTMLInputElement= document.querySelector("input#lastname") as HTMLInputElement
const firstNameInput:HTMLInputElement= document.querySelector("input#firstname") as HTMLInputElement
const ageInput:HTMLInputElement= document.querySelector("input#firstname") as HTMLInputElement
const emailInput:HTMLInputElement= document.querySelector("input#email") as HTMLInputElement
const phoneNumberInput:HTMLInputElement= document.querySelector("input#phoneNumber") as HTMLInputElement


const addContactBtn  = document.querySelector("#submitBtn") as HTMLButtonElement

let contactRepository =;

addContactBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const newContact = new Contact(lastNameInput.value, firstNameInput.value, parseInt(ageInput.value), emailInput.value, phoneNumberInput.value)
    console.log(newContact)
    contactRepository.push()
})

const displayAll = document.querySelector("#contactList")!

const searchFormInput = document.querySelector("#search") as HTMLInputElement

const searchBtn = document.querySelector("#searchbtn") as  HTMLButtonElement

searchBtn.addEventListener('click', (event) => {
    event.preventDefault()
    contactRepository.find()

})


//const searchByIdBtn = document.querySelector("#displayById") as HTMLButtonElement
//const searchByNameBtn = document.querySelector("#displayByName") as HTMLButtonElement
//const searchByFirstNameBtn = document.querySelector("#displayByFistName") as HTMLButtonElement
//const searchByAgeBtn = document.querySelector("#displayByAge") as HTMLButtonElement
