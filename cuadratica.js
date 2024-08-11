document.getElementById('calcularCuadratica').onclick = function () {
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let c = document.getElementById("c").value

    let raiz = b * b - 4 * a * c
    if (raiz < 0) {
        document.getElementById('rta').textContent = 'No hay soluciones reales'
    } else if (raiz === 0) {
        let x = -b / (2 * a)
        document.getElementById('rta').textContent = `Una solucion en x =${x}`
    } else {
        let x1 = (-b + Math.sqrt(raiz)) / (2 * a)
        let x2 = (-b - Math.sqrt(raiz)) / (2 * a)
        document.getElementById('rta').textContent = `Dos soluciones en x =${x1} y x = ${x2}`
    }
}
