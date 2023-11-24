var myChart;

function graficar() {
    var expresionUsuario = document.getElementById('expresion').value;

    if (myChart) {
        myChart.destroy(); //Elimina el grafico anterior de existir
    }

    var canvas = document.getElementById('myChart');
    var ctx = canvas.getContext('2d');
    //valores en x
    var data = {
        labels: [],
        datasets: [{
            label: 'Función',
            borderColor: 'rgb(75, 192, 192)',
            data: [],
            fill: false
        }]
    };
    //Evaluacion en funcion de x
    for (var x = -10; x <= 10; x += 0.1) { //Cubre de -10 a 10
        data.labels.push(x.toFixed(2));
        var y = math.evaluate(expresionUsuario, { x: x });
        data.datasets[0].data.push(y.toFixed(2));
    }
    //Configuracion del grafico
    var options = {
        responsive: true,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            },
            y: {
                type: 'linear',
                position: 'left'
            }
        }
    };
    //Crea un nuevo grafico
    myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
}