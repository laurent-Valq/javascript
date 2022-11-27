//VARIABLES

// const et let // var 

// //constante 
// const name = " Laurent "
// console.log(name)
// // let 
// let name2 = "Alain"
// console.log( "premiere valeur: " + name2)

// //change la valeur de name2
// name2 = "Mani"
// console.log("deuxieme valeur: " + name2)

// //number
// const age = 25
// console.log(age)

// //boolean: true or false
// let isRaining = true // valeur initiale
// isRaining = false // valeur après changement
// console.log(isRaining)

const name = "James"
const lastName = "Bond"
// write James Bond in the console

//STRING CONCATENATION 
//console.log (name +" " + lastName)

//TEMPLATE LITERAL 
//console.log(`${name} ${lastName}`)

const year = 2022
const birth = 1981

const age = year - birth
//console.log(age)

//console.log(`je m'appelle ${name} et j'ai ${age} ans `)

// / = diviser
// + addition
// - soustraction
// * Multiplication


// ARRAY

const list = ["alain", 2, 36, "Laurent"]
//index = position de chaque élément
// index comment à partir de 0
console.log("valeur initiale de list: " + list)

//list.push("Mani") // ajoute un element a list 
console.log(list)

//list.pop() // enleve le dernier element de list 
console.log(list)
//console.log(list[2])

//list.shift() // enleve premier element list 
console.log(list)

/*list.forEach((element) => {
console.log(element + " ok")
})*/
// () => {} function anonyme
const newList = []

list.forEach(element => {
  newList.push(element + "ok") 
  console.log(newList)
})


//const list = ["alain", 2, 36, "Laurent"]
const newArray = list.map((element) => {
    return element + element 
})

console.log(newArray)