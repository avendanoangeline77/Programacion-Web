//Condiciones
// while 

let contador = 0;

while(contador < array.length){
console.log(array[contador]);
contador++;


}

//for
for(let i= 0; i < array.length; i++) {
   console.log([i], array);


}



//foreach 
array.forEach((element) =>  {
   console.log(element);
})
0.3




//ejercicio 3

const lista = [1,2,4,5,5,6,6,7] 
let suma = 0 

function sumarPares(numeros) {
  for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        suma = suma + numeros[i]
    }
}
return suma
}

console.log(sumarPares(lista))


