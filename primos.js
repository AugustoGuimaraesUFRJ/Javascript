//Criar uma função para mostrar os numeros primos
const entrada = 60;
let controle = 0;
primos(entrada);
function primos(entrada){
    for (let i =2;i<=entrada;i++){
        for (let j =2;j<=entrada;j++){
            if(i%j===0){
                controle++;
            }
        }
        if(controle===1){
            console.log(i);  
        }
        controle=0;
    }
}
