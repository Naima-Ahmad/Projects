function typing(a){
  document.getElementById("inpt").value += a
}

function equl(){
 var a =  document.getElementById("inpt");
 a.value = eval(a.value);
}