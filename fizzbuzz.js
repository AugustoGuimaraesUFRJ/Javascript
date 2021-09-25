// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Não divisivel por 3 ou 5 => entrada
// Não é um numero => 'Não é um numero'
const resultado = fizzbuzz('Augusto');
console.log(resultado);

function fizzbuzz(entrada){
    if(typeof entrada !== 'number'){
        return 'Não é um numero';
    }
    if(entrada%3===0 && entrada%5===0 ){
        return 'É divisivel por 3 e 5';
    }
    if(entrada%3===0){
        return 'É divisivel por 3';
    }
    if(entrada%5===0){
        return 'É divisivel por 5';
    }
    else{
        return 'Não é divisivel por 3 nem 5';
    }
}
