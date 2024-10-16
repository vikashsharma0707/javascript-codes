function toggleSidenav() {
    var sidenav = document.getElementById("sidenav");
    var mainContent = document.getElementById("main-content");
    
    if (sidenav.style.width === "200px") {
      sidenav.style.width = "0";
      sidenav.style.left = "-200px";
      mainContent.style.marginLeft = "0";
    } else {
      sidenav.style.width = "200px";
      sidenav.style.left = "0";
      mainContent.style.marginLeft = "200px";
    }
  }
  
  // Optional: Close sidenav when clicking outside
  document.addEventListener("click", function(event) {
    var sidenav = document.getElementById("sidenav");
    if (!sidenav.contains(event.target) && event.target !== document.querySelector(".menu-icon")) {
      sidenav.style.width = "0";
      sidenav.style.left = "-200px";
      document.getElementById("main-content").style.marginLeft = "0";
    }
  });
  
  