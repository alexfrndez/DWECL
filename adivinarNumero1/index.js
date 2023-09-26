import { GAME } from "./modules/game.js";

let juego1 = new GAME.game();
document.getElementById("check").onclick = function () {
    let result = juego1.checkNumber(document.getElementById('introducedNumber').value);
    document.getElementById("informationText").innerHTML = result;
}
