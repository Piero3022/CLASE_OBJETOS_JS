//const person = {
// name: 'Piero',
// lasName: 'Freundt',
//  saudar: function () {
//  return `Hola $(this.name)`;
// },
//};

//console.log(person.name);
//console.log(person.saludar());

//class Person {
// constructor(name, lastName) {
//console.log('Hola desde clase Person');
//  this.name = name;
// this.lastName = lastName;
// }

//saludar() {
//return `Hola $(this.name) $(this.lastName)`;
//}
//}

//const person1 = new Person('Diego', 'Cueva');
//console.log(person1.lastName);
//console.log(person1.saludar());

//EJERCICIO _______________________________________________________________________
class Vehiculo {
    constructor(marca, modelo, color, velocidadMaxima, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidadMaxima = velocidadMaxima;
        this.precio = precio;
    }

    acelerar() {
        console.log(`El vehículo ${this.marca} ${this.modelo} está acelerando.`);
    }

    frenar() {
        console.log(`El vehículo ${this.marca} ${this.modelo} está frenando.`);
    }

    obtenerInformacion() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Velocidad Máxima: ${this.velocidadMaxima} km/h`);
        console.log(`Precio: ${this.precio} USD`);
    }
}

// Creando instancia 
const vehiculo1 = new Vehiculo("Toyota", "Corolla", "Rojo", 200, 25000);

// propiedades
console.log(vehiculo1.marca);
console.log(vehiculo1.color);

// metodos 
console.log(vehiculo1.acelerar());
console.log(vehiculo1.obtenerInformacion());







