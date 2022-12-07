var intentos = 0;
function random(){
    var k1 = parseInt( document.getElementById("k").value);
    if(k1>0){
    intentos++;
    if (intentos == (k1+1)) 
    {
        alert("Se acabaron los intentos.");
        //document.getElementById('calcular').innerHTML="intentos terminados <br>"
        document.getElementById('btn1').disabled = true;
        return;
    }
        var a=Math.floor((Math.random()*7)+1);
        document.getElementById('random').innerHTML=a;
        var b=Math.floor((Math.random()*7)+1);
        document.getElementById('random1').innerHTML=b;
        var c=Math.floor((Math.random()*7)+1);
        document.getElementById('random2').innerHTML=c
        if (a==b && b==c){
            document.getElementById('calcular').innerHTML=" Felicidades Ganaste"
            document.getElementById('btn1').disabled = true;
        }
        else{
            document.getElementById('calcular').innerHTML="siga intentando"
        }
    }
    else{
        document.getElementById('calcular').innerHTML="introduzca la cantidad de tiros"
    }

}

function restar(){
    intentos = 0;
    document.getElementById('btn1').disabled = false;
    document.getElementById('k').value = "";
    document.getElementById('random1').innerHTML = "0";
    document.getElementById('random').innerHTML = "0";
    document.getElementById('random2').innerHTML = "0";

}