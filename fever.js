//-------------------------------------
// WDM MAIN SCRIPT - V1.3
// CLIENT CASE - FEVER
//-------------------------------------

console.log("connected");

/* START STOP SCROLL TIMEOUT */

document.addEventListener("DOMContentLoaded", function () {
  window.SScroll.call.stop();
});

ScrollTrigger.addEventListener("scrollStart", () => {
    
  const trigger = document.getElementById("trigger-hero");
  trigger.click();

  setTimeout(function () {
    window.SScroll.call.start();
  }, 1500); //delay is in milliseconds
});

/* END STOP SCROLL TIMEOUT */
