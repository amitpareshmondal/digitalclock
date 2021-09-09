function show(){
var d=new Date();
h=d.getHours();
m=d.getMinutes();
s=d.getSeconds();
var x=document.getElementsByClassName('clock');
x[0].innerHTML=h+":"+m+":"+s;
setTimeout(show,1000);
}
show();
