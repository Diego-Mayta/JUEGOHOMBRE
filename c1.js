function calcular(){
    var nvf=document.getElementById("a").value;
    var np=document.getElementById("b").value;
    var nv=nvf/np
    var p1=0
    var p2=0
    var p3=0
    var v=[]
    var vv=[]
    var vm=[]
    for(i=0;i<nv;i++){
        if (i%3==1){
            p1=p1+1
        }
        if (i%3==2){
            p2=p2+1
        }
        if (i%3==0){
            p3=p3+1
        }
    }
    for(j=0;j<np;j++){ 
        if (j%3==1){
         v[j]=(p1)
        }
        if (j%3==2){
         v[j]=(p2)
        }
        if (j%3==0){
         v[j]=(p3)
        }
    }
    vv=v
    for (x=0;x<np;x++){
        t=(v[x])+(vv[x])
        vm[x]=(7-t)
    }
    document.getElementById("calcular").innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;socio1 - socio2 - socio3"
    document.getElementById("calcular1").innerHTML="vasos llenos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+v
    document.getElementById("calcular2").innerHTML="vasos medio llenos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+vm
    document.getElementById("calcular3").innerHTML="vasos vacios&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+vv
}