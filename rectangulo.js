//Programa para calcular perimetro y area de un triangulo


//Se definen los parametros para clacular el perimetro
const calcularPerimetro = (L1,L2,L3,L4) => {
    return L1+L2+L3+L4;
}

//Se definen los parametros para calcular el area
const calcularArea = (b,h) => {
    return b*h;
}


//Se crea la constante tipo objeto para almacenar nuestras variables
const dimensionesRectangulares = {
    calcularPerimetro,
    calcularArea,
}


//Exportamos el objeto
module.exports = dimensionesRectangulares;