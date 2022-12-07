function calcular(){
    var mm=document.getElementById("b").value;
    var med=document.getElementById("c").value;
    var mno=document.getElementById("d").value;
    var cont=1
    var h=49/7
    if(mm==50 && med==30 && mno==10){
    s1=0
    s2=0
    s3=0
    while (mm>7){
        mm=mm-7
        s1=s1+1
    } 
    while(med>7){
        med=med-7
        s2=s2+1
    }
    while(mno>7){
        mno=mno-7
        s3=s3+1
    }
    while (s1!=s2 && s2!=s3){
        s1=s1+(mm*cont)
        s2=s2+(med*cont)
        s3=s3+(mno*cont)
        cont=cont+1
    }
    document.getElementById("calcularf").innerHTML=""
    document.getElementById("calcular").innerHTML=h+" manzanas por un 1 dinar"
    document.getElementById("calcular1").innerHTML=cont+" dinares por manzana"
}
else{
    document.getElementById("calcularf").innerHTML="valores incorrectos"
}
}