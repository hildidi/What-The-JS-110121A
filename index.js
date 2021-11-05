console.log('😅')


//// The DOM Section of JS
let Something = document.querySelector('h1')
console.log(Something)

// Something.textContent = "Y'all Are Doing Awesome 🧡"
Something.innerText = "Y'all Are Doing Awesome 🧡"

////////////////////////////////////////////












//The Logical Section of JS
let variable1 = 1
console.log(variable1)


function changeAVariable (placeholderParameter){
    console.log("--- INSIDE: ChangeAVariable1----")
    console.log("This is a placeholderParameter ->", placeholderParameter)

    placeholderParameter = 2

        console.log("This is a placeholderParameter ->", placeholderParameter)

    return placeholderParameter

}
// changeAVariable()
// changeAVariable(variable1)





function aFunctionWithourParameters (){
    console.log("--- INSIDE: FunctionWithourParameters----")
}
// aFunctionWithourParameters()