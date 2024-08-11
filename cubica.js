document.getElementById('calcularCubica').onclick = function () {
    let a = document.getElementById("a3").value
    let b = document.getElementById("b3").value
    let c = document.getElementById("c3").value
    let d = document.getElementById("d3").value



    let p = (3 * a * c - b * b) / (3 * a * a)
    let q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a)

    let delta = q * q + (4 * p * p * p) / 27

    if (delta > 0) {
        let u = Math.cbrt((-q + Math.sqrt(delta)) / 2)
        let v = Math.cbrt((-q - Math.sqrt(delta)) / 2)

        let x = (u + v - b / (3 * a)).toFixed(2)

        document.getElementById('rta3').textContent = `hay una solución real en x = ${x}`
    } else if (delta = 0) {
        let x1 = (2 * Math.cbrt(-q / 2) - b / (3 * a)).toFixed(2)
        let x2 = (-1 * Math.cbrt(-q / 2) - b / (3 * a)).toFixed(2)
        document.getElementById('rta3').textContent = `hay 3 soluciones reales en x = ${x1}, ${x2}, y ${x2}`
    } else {
        let theta = Math.acos(((3 * q) / (2 * p)) * Math.sqrt(-3 / p))

        let x1 = (2 * Math.sqrt(-p / 3) * Math.cos(theta / 3) - b / (3 * a)).toFixed(2)
        let x2 = (2 * Math.sqrt(-p / 3) * Math.cos((theta + 2 * Math.PI) / 3) - b / (3 * a)).toFixed(2)
        let x3 = (2 * Math.sqrt(-p / 3) * Math.cos((theta + 4 * Math.PI) / 3) - b / (3 * a)).toFixed(2)

        document.getElementById('rta3').textContent = `hay 3 soluciones reales en x = ${x1}, ${x2}, y ${x3}`
    }
}