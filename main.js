// Codigo para consultar si estas en problemas o no 
function consultar()
{
    var monkeyA = document.getElementById("monkeyA");
    var monkeyB = document.getElementById("monkeyB");
    var aSmile = document.getElementById("si");
    var bSmile = document.getElementById("no");
    var salida = document.getElementById("salida");

    if (monkeyA.checked && monkeyB.checked && aSmile.checked){
        //Estas en problemas
        salida.innerHTML = "Si";
    } 
    else if (monkeyA.checked && monkeyB.checked && bSmile.checked){
        //Estas en problemas
        salida.innerHTML = "Si";
    } 
    else {
       //No estas en problemas
       salida.innerHTML = "No";
    }
}


