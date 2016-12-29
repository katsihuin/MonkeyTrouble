// Codigo para consultar si estas en problemas o no 
function consultar()
{
    var monkeyA = document.getElementById("monkeyA").checked;
    var monkeyB = document.getElementById("monkeyB").checked;
    var aSmile = document.getElementById("si");
    var bSmile = document.getElementById("no");
    var salida = document.getElementById("salida");

    if (monkeyA == "" && monkeyB == ""){
        document.getElementById("salida").innerHTML = "<div class='alert'>Seleccione un Mono</div>";
    }
    else if (monkeyA && monkeyB && aSmile.checked){
        //Estas en problemas
        salida.innerHTML = "Si";
    } 
    else if (monkeyA && monkeyB && bSmile.checked){
        //Estas en problemas
        salida.innerHTML = "Si";
    } 
    else {
       //No estas en problemas
       salida.innerHTML = "No";
    }
}

