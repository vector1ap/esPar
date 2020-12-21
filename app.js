let paresImpares= function (numero){
    switch(true){
        case numero%2==0:
            return "es par";
            break;
        case numero%2==1:
            return "es impar";
            break;
        case numero === 0:
            return "Error";
            break;

}
}

console.log(paresImpares(3));