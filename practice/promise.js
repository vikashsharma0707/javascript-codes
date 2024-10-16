 
 /*let complete =true;
 
 let prom= new Promise(function(resolve,reject){
    if(complete){
        resolve("it is working");
    }

    else{
        reject("it is not wokring");
    }
 });

 console.log(prom);*/



 /*function prom(complete){
     return new Promise(function(resolve,reject){
            if(complete){
                resolve("it is working");
            }

            else{
                reject("it is not working");
            }
     });
 }

 console.log(prom(true));*/





 function prom(complete){
    return new Promise(function(resolve,reject){
        console.log("data is fetching please wait")
        setTimeout (() =>{

       
    if(complete){
        resolve("promise is working");
    }
    else{
        reject("promise is not working");
    }
} ,3000)
});
}

let onfullment = (result) =>{
 console.log(result);
}

let onrejection = (error) =>{
console.log(error);
}


prom(true).then(onfullment);
prom(true).catch(onfullment);