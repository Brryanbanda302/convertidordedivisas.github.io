class Convertidor {
    constructor(cantidad, moneda) {
        this.cantidad = cantidad;
        this.moneda = moneda;
    }

    convertir() {
        let resultado = 0;
        let simbolo = "";

        if (this.moneda === "usd") {
            resultado = this.cantidad * 0.055;
            simbolo = "$";
        } else if (this.moneda === "eur") {
            resultado = this.cantidad * 0.051;
            simbolo = "€";
        } else if (this.moneda === "gbp") {
            resultado = this.cantidad * 0.044;
            simbolo = "£";
        } else if (this.moneda === "jpy") {
            resultado = this.cantidad * 8.52;
            simbolo = "¥";
        }

        return {
            cantidadConvertida: resultado.toFixed(2),
            simbolo: simbolo
        };
    }

    generarResumen() {
        const datos = this.convertir();
        return `
            CANTIDAD INGRESADA: $${this.cantidad} MXN <br>
            CANTIDAD CONVERTIDA: ${datos.simbolo}${datos.cantidadConvertida} ${this.moneda.toUpperCase()}
        `;
    }
}

document.getElementById('forma').addEventListener("submit", function (e) {
    e.preventDefault();
    const cantidad = document.getElementById('cantidad').value;
    const moneda = document.getElementById('moneda').value;

    const objConvertidor = new Convertidor(cantidad, moneda);

    document.getElementById('res').innerHTML = objConvertidor.generarResumen();
});