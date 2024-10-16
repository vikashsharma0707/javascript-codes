


function hello(somethingh){
    document.getElementById("display").innerHTML= somethingh;
}


function hello1(a ,b, xyz){
    let sum=a+b;
    xyz(sum);
}

hello(2,3,hello());