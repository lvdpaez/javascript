let transport = prompt("Ingresa método de transporte").toLowerCase();
let tires = prompt("Ingresa número de llantas");

if (
  transport == "terrestre" ||
  transport == "acuatico" ||
  transport == "aereo"
) {
  if (transport == "terrestre") {
    if (tires == 4) {
      alert("Automóvil");
    }

    if (tires >= 4) {
      alert("Camión");
    }
    if (tires == 2) {
      alert("Moto o bicicleta");
    }
    if (tires == 1) {
      alert("Monociclo");
    }
  }
  if (transport == "acuatico") {
    if (tires == 0) {
      alert("Barco");
    }
  }
  if (transport == "aereo") {
    if (tires == 20) {
      alert("Avión");
    }
  }
} else {
  alert("Método de transporte no válido");
}
