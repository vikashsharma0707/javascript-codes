
let id=setTimeout(display,1000);

function display(){
    console.log("hello");
}

function hello(){
    clearTimeout(id);
}

