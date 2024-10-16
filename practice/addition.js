
function multiply(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("hello").innerHTML="Result"+(num1*num2);
}


function divide(){
    var num1= parseFloat(document.getElementById("num1").value);
    var num2= parseFloat(document.getElementById("num2").value);
    document.getElementById("hello").innerHTML ="Result "+ num1/num2;
    
}

