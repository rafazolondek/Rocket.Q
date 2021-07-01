import  Modal  from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDiscription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões com a classe "check"
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", handleClick) 
})

//Quando o botão delete for clicado abre a modal

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)


    //Se check for true coloca a primeira, se não, a segunda:
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDiscription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")
    
    //abrir modal
    modal.open()
}
