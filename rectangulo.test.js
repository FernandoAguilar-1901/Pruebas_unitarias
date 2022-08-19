const rectangulo = require('./rectangulo');

test ('Sumar los lados del rectangulo', () => {
    expect (rectangulo.calcularPerimetro(5,2,2,5)).toBe(14);
})

test ('Encontrar el area del rectangulo', () => {
    expect (rectangulo.calcularArea(8,4)).toBe(32)
})