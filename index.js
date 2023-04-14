const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// 🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

console.log("---------------A--------------------");
//a)  Las pizzas que tengan un id impar.
console.log(`Las pizzas que tienen id impar son:`);
pizzas.forEach(pizza => {
  if(pizza.id % 2 !== 0) console.log(`id: ${pizza.id} (${pizza.nombre})`);
});

console.log("---------------B--------------------");
// b) Responder: ¿Hay alguna pizza que valga menos de $600?
const menos600 = pizzas.find((pizza) => {
  return pizza.precio < 600;
});
if (menos600 !== undefined) console.log(`Una pizza que valga menos de $600 es la ${menos600.nombre}, vale $${menos600.precio}`);
else console.log(`No hay pizzas que valgan menos de $600`);

console.log("---------------C--------------------");
// c) El nombre de cada pizza con su respectivo precio.
console.log(`Las pizzas que tenemos actualmente son:`)
pizzas.forEach(pizza => {
  console.log(`${pizza.nombre}, a $${pizza.precio}`);
});

console.log("---------------D--------------------");
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
pizzas.forEach(pizza => {
  console.log(`La ${pizza.nombre} tiene:`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log(`- ${ingrediente}`);
  })
});