const calificacion = require('./calificacion');

test ('Generar calificacion del alumno', () => {
    expect(calificacion.revisarCalificaciones(10,10,10)).toBe(10)
})