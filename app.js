//extra voz a texto

function calcularArea() {
    let _base = base.value
    let _altura = altura.value

    let area = _base*_altura/2
    respuestaArea.innerHTML = area
}

function mayorTresNumeros() {
    let _num1 = parseInt(num1.value)
    let _num2 = parseInt(num2.value)
    let _num3 = parseInt(num3.value)

    mayor = _num1;

    if(_num1>=_num2 && _num1>=_num3)
        mayor = _num1
    else if(_num2>=_num1 && _num2>=_num3)
            mayor = _num2
        else
            mayor = _num3

    respuestaMayor.innerHTML = mayor
}