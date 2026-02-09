const textBox = document.getElementById("textBox");
const toKM = document.getElementById("toKM");
const toMile = document.getElementById("toMile");
const result = document.getElementById("result");

function Convert() {
    let value = Number(textBox.value);

    if (toKM.checked) {
        let km = value * 1.6;
        result.textContent = km.toFixed(1) + " km";
    }
    else if (toMile.checked) {
        let miles = value / 1.6;
        result.textContent = miles.toFixed(1) + " miles";
    }
    else {
        result.textContent = "Please select a unit";
    }
}
