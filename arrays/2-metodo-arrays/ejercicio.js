//ejercicio2

// bebidas, pizza, empanada, federico villace
const array = ["Federico Villace", "pizza", "empanada"];

function procesarPedido(pedidos) {
   const nombreCliente = pedidos.shift()
   pedidos.unshift("bebidas")
   pedidos.push(nombreCliente)
   return pedidos;
}


