//arrays 
const ejemploArray = [1, 2, 3];
console.log(ejemploArray[1])


//objetos 

const persona = {
   //clave: valor
   name: "angeline",
   age: 17,
   isWorking: true,
   dogs: ["sheika", "atenea", "cacho"],
   walk: function (){
    //si la funcion no retorna void es que no devuelve nada, si no, aclara el tipo de dato 
     return "estoy durmiendo";
     //si la funcion no devuelve ningun valor, va a devolver un undefined por default
     //console.log("estoy durmiendo");
 }
}

console.log(persona.name);
console.log(persona["name"]);
console.log(persona.dogs[1]);
//si cuando esta mostrando/ejecutando la funcion no le ponen los parentesis esta no va a funcionary00000
console.log(persona.walk());



persona.age = 29;
console.log(persona.age);

//delate borra las propiedades seleccionadas del objeto 
delete persona.age;
console.log(persona.age)

///////////////////////////////////////////////////////////////////////////////////////////

//ejercicio 1//

const nombre  = "angeline"
const subscribers = 200


function createObject(name, subs) {
    const object = {
        hash: (name.length) * subs,
        name : name ,
        subscribers : subs,
        getStatus : function(){
            return `el canal de ${name} tiene ${subs} subscriptores` 
        }

    }
    return object 
  
}

const objeto = createObject(nombre, subscribers)
console.log(createObject(nombre, subscribers))
console.log(objeto.getStatus())