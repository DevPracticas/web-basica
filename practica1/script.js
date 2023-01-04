
//VARIABLES

var num1 = 5
var num2 = 2
//alert (num1 < num2)

//var dato = prompt("ingrese su nombre")

function fun1() {
    document.getElementById("respuesta").innerHTML = 
    `Hola mi nombre es ${nombre.value} ${apellido.value}, 
    mi correo es ${correo.value}, 
    mi dirección es ${direccion.value} 
    y mi teléfono es ${telefono.value}`
}

function calculaArea() {
    let _radio = radio.value
    var resp = Math.PI * Math.pow(_radio, 2)
    document.getElementById("area").innerHTML = "El área es: "+ resp
}