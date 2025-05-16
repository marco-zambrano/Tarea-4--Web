function realizarOperaciones() {
    // number inputs
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    
    // validate data
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor ingrese dos números válidos');
        return;
    }
    
    // results container
    const resultadoDiv = document.getElementById('resultado');
    const iteracionesDiv = document.getElementById('iteraciones');
    
    // clean last input results 
    iteracionesDiv.innerHTML = '';
    
    // the operations
    for (let i = 1; i <= 5; i++) {
        let operacion = '';
        let resultado = 0;
        
        switch(i) {
            case 1:
                operacion = 'Suma';
                resultado = num1 + num2;
                break;
            case 2:
                operacion = 'Resta';
                resultado = num1 - num2;
                break;
            case 3:
                operacion = 'Multiplicación';
                resultado = num1 * num2;
                break;
            case 4:
                operacion = 'División';
                if (num2 === 0) {
                    resultado = 'No se puede dividir por cero';
                } else {
                    resultado = num1 / num2;
                }
                break;
            case 5:
                operacion = 'Módulo';
                if (num2 === 0) {
                    resultado = 'No se puede calcular módulo con cero';
                } else {
                    resultado = num1 % num2;
                }
                break;
        }
        
        // Create the iterations element
        const iteracionDiv = document.createElement('p');
        iteracionDiv.className = 'iteration';
        iteracionDiv.innerHTML = `<strong>Iteración ${i} (${operacion}):</strong> ${resultado}`;
        
        // add that node to the container
        iteracionesDiv.appendChild(iteracionDiv);
    }
    
    // show the results container when the loops are finished
    resultadoDiv.style.display = 'block';
}

// when the button is clicks, executes the realizarOperaciones function
document.getElementById('btn').addEventListener('click', realizarOperaciones);