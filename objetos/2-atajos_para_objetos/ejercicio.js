//Ejer1//
const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'music', 'sports']
  }
            
  const { 
    weight = 70,
    height = 180,
    } = person
  console.log(weight, height, name)
  
//imprime el peso y la altura porque son arrays adentro de un objeto y no necesita un valor para ejecutarse
  
/////////////////////////////////////////////////////////////////////////////////
//Ejer2
const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'music', 'sports']
  }
            
  const { age: personAge } = person
  console.log(age)
//No imprime nada porque hay errores en el codigo
//////////////////////////////////////////////////////////////////////////////////
//Ejer3
//el valor destructuracion 
