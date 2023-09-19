const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

function comprobarNumero() {  
    if (document.getElementById('numeroIntroducido').value > numeroAleatorio) {
        document.getElementById("respuesta").innerHTML = "El numero a adivinar es menor";
    } else {
        if (document.getElementById('numeroIntroducido').value < numeroAleatorio) {
            document.getElementById("respuesta").innerHTML = "El numero a adivinar es mayor";
        } else {
            document.getElementById("respuesta").innerHTML = "Has acertado";
        }
    }
}