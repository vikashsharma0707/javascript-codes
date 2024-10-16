// $(document).ready(function(){
//     $('#bars').click(
//         function(){
//         $('#largeview').toggle()
//     }    
//     )    
// })


// function bars(){
//     document.getElementById('largeview').style.display = "block";
//     document.getElementById('bars').style.display = "none";
//     document.getElementById('closebar').style.display = "block";
// }

// function closebar(){
//     document.getElementById('largeview').style.display = "none";
//     document.getElementById('bars').style.display = "block";
//     document.getElementById('closebar').style.display = "none";
// }

function bars() {
    // Show the large sidebar and the close icon, hide the menu bar icon
    document.getElementById('largeview').style.display = "block";
    document.getElementById('bars').style.display = "none";
    document.getElementById('closebar').style.display = "block";
}

function closebar() {
    // Hide the large sidebar and the close icon, show the menu bar icon
    document.getElementById('largeview').style.display = "none";
    document.getElementById('bars').style.display = "block";
    document.getElementById('closebar').style.display = "none";
}
