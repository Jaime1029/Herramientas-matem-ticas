//Cuando el contenido es cargado pone la pestania de temperatura
document.addEventListener('DOMContentLoaded', function() {
    cambiarPestaña('temperatura');
});

//Le muestra al usuario la pestania que escoge
function cambiarPestaña(tipo) {
    var pestañas = document.querySelectorAll('.tab-pane');
    pestañas.forEach(function(pestaña) {
        pestaña.classList.remove('show', 'active');
    });

    document.getElementById(tipo).classList.add('show', 'active');
}

function convertirTemperatura() {
    //obtiene los valores requeridos que son ingresados
    var inputValor = document.getElementById("inputValor").value;
    var inputUnidad = document.getElementById("inputUnidad").value;
    var outputUnidad = document.getElementById("outputUnidad").value;

    inputValor = parseFloat(inputValor);
    //Realiza una operacion en funcion de lo que escoge el usuario
    if (!isNaN(inputValor)) {
        var resultado;
        if (inputUnidad === "celsius" && outputUnidad === "fahrenheit") {
            resultado = (inputValor * 9/5) + 32;
        } else if (inputUnidad === "fahrenheit" && outputUnidad === "celsius") {
            resultado = (inputValor - 32) * 5/9;
        } else if (inputUnidad === "celsius" && outputUnidad === "kelvin") {
            resultado = inputValor + 273.15;
        } else if (inputUnidad === "kelvin" && outputUnidad === "celsius") {
            resultado = inputValor - 273.15;
        } else if (inputUnidad === "fahrenheit" && outputUnidad === "kelvin") {
            resultado = (inputValor - 32) * 5/9 + 273.15;
        } else if (inputUnidad === "kelvin" && outputUnidad === "fahrenheit") {
            resultado = (inputValor - 273.15) * 9/5 + 32;
        } else if (inputUnidad === "fahrenheit" && outputUnidad === "kelvin") {
            resultado = (inputValor - 32) * 5/9 + 273.15;
        } else if (inputUnidad === "kelvin" && outputUnidad === "fahrenheit") {
            resultado = (inputValor - 273.15) * 9/5 + 32;
        } else {
            // Si las unidades son iguales, muestra el valor original
            resultado = inputValor;
        }

        document.getElementById("outputValor").value = resultado.toFixed(3);
    } else {
        document.getElementById("outputValor").value = "";
    }
}

function convertirMasa() {
    var inputValor = document.getElementById("inputValorMasa").value;
    var inputUnidad = document.getElementById("inputUnidadMasa").value;
    var outputUnidad = document.getElementById("outputUnidadMasa").value;

    inputValor = parseFloat(inputValor);

    if (!isNaN(inputValor)) {
        var resultado;
        if (inputUnidad === "kilogramos" && outputUnidad === "libras") {
            resultado = inputValor * 2.20462;
        } else if (inputUnidad === "libras" && outputUnidad === "kilogramos") {
            resultado = inputValor / 2.20462;
        } else if (inputUnidad === "kilogramos" && outputUnidad === "gramos") {
            resultado = inputValor * 1000;
        } else if (inputUnidad === "gramos" && outputUnidad === "kilogramos") {
            resultado = inputValor / 1000;
        } else if (inputUnidad === "libras" && outputUnidad === "gramos") {
            resultado = inputValor * 453.592;
        } else if (inputUnidad === "gramos" && outputUnidad === "libras") {
            resultado = inputValor / 453.592;
        } else if (inputUnidad === "kilogramos" && outputUnidad === "onzas") {
            resultado = inputValor * 35.274;
        } else if (inputUnidad === "onzas" && outputUnidad === "kilogramos") {
            resultado = inputValor / 35.274;
        } else if (inputUnidad === "libras" && outputUnidad === "onzas") {
            resultado = inputValor * 16;
        } else if (inputUnidad === "onzas" && outputUnidad === "libras") {
            resultado = inputValor / 16;
        } else if (inputUnidad === "gramos" && outputUnidad === "onzas") {
            resultado = inputValor / 28.3495;
        } else if (inputUnidad === "onzas" && outputUnidad === "gramos") {
            resultado = inputValor * 28.3495;
        } else {
            // Si las unidades son iguales, muestra el valor original
            resultado = inputValor;
        }
        document.getElementById("outputValorMasa").value = resultado.toFixed(3);
    } else {
        document.getElementById("outputValorMasa").value = "";
    }
}

function convertirLongitud() {
    var inputValor = document.getElementById("inputValorLongitud").value;
    var inputUnidad = document.getElementById("inputUnidadLongitud").value;
    var outputUnidad = document.getElementById("outputUnidadLongitud").value;

    inputValor = parseFloat(inputValor);

    if (!isNaN(inputValor)) {
        var resultado;
        if (inputUnidad === "metros" && outputUnidad === "pies") {
            resultado = inputValor * 3.28084;
        } else if (inputUnidad === "pies" && outputUnidad === "metros") {
            resultado = inputValor / 3.28084;
        } else if (inputUnidad === "metros" && outputUnidad === "kilometros") {
            resultado = inputValor / 1000;
        } else if (inputUnidad === "kilometros" && outputUnidad === "metros") {
            resultado = inputValor * 1000;
        } else if (inputUnidad === "pies" && outputUnidad === "kilometros") {
            resultado = inputValor / 3280.84;
        } else if (inputUnidad === "kilometros" && outputUnidad === "pies") {
            resultado = inputValor * 3280.84;
        } else if (inputUnidad === "millas" && outputUnidad === "kilometros") {
            resultado = inputValor * 1.60934;
        } else if (inputUnidad === "kilometros" && outputUnidad === "millas") {
            resultado = inputValor / 1.60934;
        } else if (inputUnidad === "millas" && outputUnidad === "pies") {
            resultado = inputValor * 5280;
        } else if (inputUnidad === "pies" && outputUnidad === "millas") {
            resultado = inputValor / 5280;
        } else if (inputUnidad === "millas" && outputUnidad === "metros") {
            resultado = inputValor * 1609.34;
        } else if (inputUnidad === "metros" && outputUnidad === "millas") {
            resultado = inputValor / 1609.34;
        } else {
            // Si las unidades son iguales, muestra el valor original
            resultado = inputValor;
        }
        document.getElementById("outputValorLongitud").value = resultado.toFixed(3);
    } else {
        document.getElementById("outputValorLongitud").value = "";
    }
}

function convertirVelocidad() {
    var inputValor = document.getElementById("inputValorVelocidad").value;
    var inputUnidad = document.getElementById("inputUnidadVelocidad").value;
    var outputUnidad = document.getElementById("outputUnidadVelocidad").value;

    inputValor = parseFloat(inputValor);

    if (!isNaN(inputValor)) {
        var resultado;
        if (inputUnidad === "metrosPorSegundo" && outputUnidad === "kilometrosPorHora") {
            resultado = inputValor * 3.6;
        } else if (inputUnidad === "kilometrosPorHora" && outputUnidad === "metrosPorSegundo") {
            resultado = inputValor / 3.6;
        } else if (inputUnidad === "metrosPorSegundo" && outputUnidad === "millasPorHora") {
            resultado = inputValor * 2.23694;
        } else if (inputUnidad === "millasPorHora" && outputUnidad === "metrosPorSegundo") {
            resultado = inputValor / 2.23694;
        } else if (inputUnidad === "metrosPorSegundo" && outputUnidad === "centimetrosPorSegundo") {
            resultado = inputValor * 100;
        } else if (inputUnidad === "centimetrosPorSegundo" && outputUnidad === "metrosPorSegundo") {
            resultado = inputValor / 100;
        } else if (inputUnidad === "millasPorHora" && outputUnidad === "centimetrosPorSegundo") {
            resultado = inputValor * 44.704;
        } else if (inputUnidad === "centimetrosPorSegundo" && outputUnidad === "millasPorHora") {
            resultado = inputValor / 44.704;
        } else if (inputUnidad === "kilometrosPorHora" && outputUnidad === "millasPorHora") {
            resultado = inputValor / 1.60934;
        } else if (inputUnidad === "millasPorHora" && outputUnidad === "kilometrosPorHora") {
            resultado = inputValor * 1.60934;
        } else if (inputUnidad === "kilometrosPorHora" && outputUnidad === "centimetrosPorSegundo") {
            resultado = inputValor * 27.7778;
        } else if (inputUnidad === "centimetrosPorSegundo" && outputUnidad === "kilometrosPorHora") {
            resultado = inputValor / 27.7778;
        }else {
            // Si las unidades son iguales, muestra el valor original
            resultado = inputValor;
        }
        document.getElementById("outputValorVelocidad").value = resultado.toFixed(3);
    } else {
        document.getElementById("outputValorVelocidad").value = "";
    }
}