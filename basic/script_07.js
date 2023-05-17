let day = prompt("ingresa un dia").toLowerCase(); //Martes - MARTES - (martes)

if (day == "sabado" || day == "domingo") {
  alert("es un fin de semana");
} else {
  if (
    day == "lunes" ||
    day == "martes" ||
    day == "miercoles" ||
    day == "jueves" ||
    day == "viernes"
  ) {
    alert("es un dia entre semana");
  } else {
    alert("favor ingrese es un dia entre semana");
  }
}
