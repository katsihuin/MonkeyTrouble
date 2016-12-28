// Codigo para consultar si estas en problemas o no 
function monkeyA()
{
    var img = document.getElementById("img_mono_b");
    var monkeyA = document.getElementById("monkeyA");

    if(monkeyA.checked){
        img.innerHTML = '<img src="img/monkeyHappy.jpg">';
    }
    else{
        img.innerHTML = '<img src="img/monkeySad.jpg">';
    }
}
function monkeyB()
{
    var img = document.getElementById("img_mono_a");
    var monkeyB = document.getElementById("monkeyB");

    if(monkeyB.checked)
    {
        img.innerHTML = '<img src="img/monkeyHappy.jpg">';
    }else{
        img.innerHTML = '<img src="img/monkeySad.jpg">';
    }
}
function consultar()
{
    var aSmile = document.getElementById("si").checked;
    var bSmile = document.getElementById("no").checked;
    var salida = document.getElementById("salida");

    if (aSmile && bSmile) {
//Estas en problemas
        salida.innerHTML = "Si";
}
if (!aSmile && !bSmile) {
//Estas en problemas
        salida.innerHTML = "Si";
}
else {

       //NO hay problema
       salida.innerHTML = "No";
}
    /*if (aSmile == bSmile)
        //Estas en problemas
        salida.innerHTML = "1";
    else 
       //NO hay problema
       salida.innerHTML = "0";*/
}

