document.getElementById('start-btn').addEventListener('click', () => {
    let nmi = parseInt(document.getElementById('nmi').value);
    if (isNaN(nmi) || nmi < 1) {
        alert("Por favor, ingrese un número válido de iteraciones.");
        return;
    }

    let cit = 0, z = 0, x1 = 0, x2 = 0, x3 = 0;

    while (cit < nmi) {
        cit++;

        // Generar el número aleatorio para rx1C entre 0 y 10
        let rx1C = Math.random();
        let x1c = 0 + (10 - 0) * rx1C;

        // Generar número aleatorio entre 0 y 1, luego redondearlo para obtener 0 o 1
        let rx2C = Math.random();
        let x2c = Math.round(20 * rx2C); // Modificación para asegurar que x2c esté entre [0 - 20]

        // If: x1 + x2 <= 20
        if (x1c + x2c <= 20) {
            // Generar el número aleatorio para rx3C
            let rx3C = Math.random();
            let x3c = 1 + 1 * rx3C;

            // Calcular zc
            let zc = 2 * x1c + 3 * x2c - x3c;

            // If: zc > z
            if (zc > z) {
                z = zc;
                x1 = x1c;
                x2 = x2c;
                x3 = x3c;
            }
        }

        // Verificar si se ha alcanzado el número de iteraciones
        if (cit >= nmi) {
            // Mostrar resultados en HTML
            document.getElementById('z-value').textContent = z.toFixed(2);
            document.getElementById('x1-value').textContent = x1.toFixed(2);
            document.getElementById('x2-value').textContent = x2.toFixed(2);
            document.getElementById('x3-value').textContent = x3.toFixed(2);
            document.getElementById('resultados').style.display = 'block';
        }
    }
});
