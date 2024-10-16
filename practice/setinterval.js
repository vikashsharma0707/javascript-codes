


/*setInterval(display,1000);

function display(){
    console.log("hello");
}*/


/*let id=setInterval(display,1000);

function display(){
    console.log("hello");
    clearInterval(id);
}*/


/*let id=setInterval(hello,1000);

function hello(){
    let a=0;
    a=a+10;
    if(a==5){
        
        clearInterval(id)
    }
    else{
        console.log(a);
    }
}*/



const myinterval = setInterval(display,500);

function display(){
    document.getElementById("demo").innerHTML += "Hello";
}

function stop(){
    clearInterval(myinterval);
}


