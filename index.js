for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      
      // Reset all buttons to red before setting the clicked one to white
      document.querySelectorAll(".drum").forEach(btn => btn.style.color = "red");
  
      this.style.color = "white"; // Change clicked button to white
  
      var buttonInnerHtml = this.innerHTML;
  
      switch (buttonInnerHtml) {
        case "w":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
  
        case "a":
          var kickBass = new Audio("sounds/kick-bass.mp3");
          kickBass.play();
          break;
  
        case "s":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
  
        case "d":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "j":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
  
        case "k":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
  
        case "l":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
  
        default:
          console.log("Invalid button pressed: " + buttonInnerHtml);
          break;
      }
    });
  }
  