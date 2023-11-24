let display = document.getElementById('display');

//Agrega al display de la calculadora lo que el usuario presiona
function appendToDisplay(value) {
    display.value += value;
}

//Evalua la expresion
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

//Borra todo lo que hay en el display
function clearDisplay() {
    display.value = '';
}

//Elimina de caracter en caracter lo que hay en el display
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}