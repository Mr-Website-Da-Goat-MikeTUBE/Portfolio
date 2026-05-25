function myFunction() {
      var x = document.getElementById("testid");

      if (x.style.display === "none") {
        x.style.display = "block";
        x.style.animation = "1s slide-right";
        x.style.transform = "translateX(40%)";
      } else {
        ;
     }
    }

function myFunction2() {
  var x = document.getElementById("testid");

        x.style.animation = "1s slide-left";
        if (x.style.transform = "translateX(100%)"){x.style.display = "none"}
        
   }