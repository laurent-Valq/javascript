const body = document.querySelector("body")
const main = document.createElement("main")
const div = document.createElement("div")
const heading = document.createElement("h1")
const paragraph = document.createElement("p")
const button = document.createElement("button")

body.append(main)
main.append(div)

const cardTitle = ["one", "two", "three", "four"]

/*const card = () => {
    div.append(heading)
    heading.textContent = "Omeruta"
    div.append(paragraph)
    paragraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
    div.append(button)
    button.textContent = "RED"
    div.style.display = "flex"
    div.style.flexDirection = "column"
    div.style.textAlign = "center"
    button.style.background = "darkGrey"
    button.style.border = "none"
    button.style.height = "40px"
    button.style.borderRadius = "10px"
    
    button.addEventListener("click", () => {
   
    
       paragraph.style.color === "red" ? 
       paragraph.style.color = "black" :
       paragraph.style.color = "red"
    })
}*/

const cardBlock = () => {
    for(let i = 0; i <= cardTitle.length; i++) {
        
    div.append(heading)
    heading.textContent = "Omeruta"
    div.append(paragraph)
    paragraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
    div.append(button)
    button.textContent = "RED"
    div.style.display = "flex"
    div.style.flexDirection = "column"
    div.style.textAlign = "center"
    button.style.background = "darkGrey"
    button.style.border = "none"
    button.style.height = "40px"
    button.style.borderRadius = "10px"
    
    button.addEventListener("click", () => {
       //paragraph.style.color = "red" 
       /*if(paragraph.style.color === "red") {
        paragraph.style.color = "black"
       } else {
        paragraph.style.color = "red"
       }*/
       paragraph.style.color === "red" ? 
       paragraph.style.color = "black" :
       paragraph.style.color = "red"
    })
    }
}
cardBlock()





