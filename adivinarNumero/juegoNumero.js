class Game {
    constructor() {
        this.numeroAleatorio = this.numeroAlea();
        this.numeroIntroducido = 0;
        this.nombreFinJuego = "Jugar de nuevo";
    }

    obtenerNumero() {
        this.numeroIntroducido = document.getElementById('numeroIntroducido').value;
    }

    compararNumero() {
        if (this.numeroIntroducido > this.numeroAleatorio) {
            document.getElementById("respuesta").innerHTML = "El numero a adivinar es menor";
        } else {
            if (this.numeroIntroducido < this.numeroAleatorio) {
                document.getElementById("respuesta").innerHTML = "El numero a adivinar es mayor";
            } else {
                document.getElementById("respuesta").innerHTML = "Has acertado!!";
                document.getElementById("respuesta").style.color = 'green';
                document.getElementById("botonComparar").innerHTML = this.nombreFinJuego;
            }
        }
    }
    
    numeroAlea(){
        this.numeroAleatorio = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    }

    reiniciar(){
        this.numeroAlea();
        document.getElementById("botonComparar").innerHTML = "Prueba este número";
        document.getElementById("respuesta").style.color = 'MidnightBlue';
        document.getElementById("respuesta").innerHTML = "Prueba sin miedo";
        this.numeroIntroducido = document.getElementById('numeroIntroducido').value = "";
    }
}

const juego1 = new Game();

document.getElementById("botonComparar").addEventListener("click", () => {
    if (document.getElementById("botonComparar").textContent == juego1.nombreFinJuego) {
        juego1.reiniciar();
    } else {
        juego1.obtenerNumero();
        juego1.compararNumero();
    }
});