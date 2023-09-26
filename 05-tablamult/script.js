const numero=prompt("Dime un número: ");
if (isNaN(numero)) {
    console.log("El valor introducido no es un número");
}
else if (numero < 0) {
    console.warn("El número introducido debe ser mayor de 0 o igual");
}
else {
    for(let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(numero + "x" + i + "=" + resultado);
    }
}