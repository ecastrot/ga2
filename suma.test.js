const suma = require("./suma")

test('La suma entre 5 y 8 debe dar 13', () => {
    expect(suma(5,8)).toBe(13);
})

test('La suma econ una letra debe dar NaN', () => {
    expect(suma(5,'a')).toBe(NaN);
})