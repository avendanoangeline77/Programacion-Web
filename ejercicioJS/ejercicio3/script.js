function agregarElementos(){
    let lista = document.getElementById("lista");
    let input = document.getElementById("textarea").value;
    const elementoLista = document.createElement("li")
    const button = document.createElement("button")
     
    elementoLista.textContent  = input;
    button.textContent = 'delate' 
    
    elementoLista.append(button)
    lista.appendChild(elementoLista);
    
  
    button.onclick = function () {
      elementoLista.remove(button)    
    } 

     
}