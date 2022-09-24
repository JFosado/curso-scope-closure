//variables

var a; //declarando
var b = 'b'; // declaramos y asignamos 
b = 'bb'; //reasignacion
var a = 'aa'; //redeclaracion


//Global Scope
var fruit = 'Apple'; //Global

function bestFruit(){
    console.log(fruit);
}
 bestFruit();


//Segundo Ejemplo
 function countries(){
    country = 'Colombia'; //Global
    console.log(country);
 }
 countries();
 console.log(country);