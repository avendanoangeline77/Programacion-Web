//"bubles" y arrays
const array = [2,3, "pepa"];
//mientras
 while(array.length < 1) {
    console.log("test");
}

//bucle for recorre los elementos

for(let i = 0; i < array.length; i++){//siempre adentro del for usar let
    console.log("posicion",i,"valor", array[i]);
}