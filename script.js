// Page Transitions

// $("a").click(function (e) {
//   e.preventDefault(); // prevent default anchor behavior
//   var goTo = this.getAttribute("href"); // store anchor href

//   setTimeout(function () {
//     window.location = goTo;
//   }, 600); // 1200 ms duration
// });

document.addEventListener("DOMContentLoaded", function () {
  $(".page-wrapper").addClass("loading");

  setTimeout(function () {
    $(".page-wrapper").removeClass("loading");
  }, 2000); //delay is in milliseconds
});

let transitionTrigger = $(".transition-trigger");
let introDurationMS = 0;
let exitDurationMS = 300;
let excludedClass = "no-transition";

// On Page Load
if (transitionTrigger.length > 0) {
  transitionTrigger.click();
}
// On Link Click
$("a").on("click", function (e) {
  if (
    $(this).prop("hostname") == window.location.host &&
    $(this).attr("href").indexOf("#") === -1 &&
    !$(this).hasClass(excludedClass) &&
    $(this).attr("target") !== "_blank" &&
    transitionTrigger.length > 0
  ) {
    e.preventDefault();
    let transitionURL = $(this).attr("href");
    transitionTrigger.click();
    setTimeout(function () {
      window.location = transitionURL;
    }, exitDurationMS);
  }
});
// On Back Button Tap
window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload();
  }
};
// Hide Transition on Window Width Resize
setTimeout(() => {
  $(window).on("resize", function () {
    setTimeout(() => {
      $(".transition").css("display", "none");
    }, 50);
  });
}, introDurationMS);

// Homepage Interactions
$(".parallax-image").each(function (index) {
  // Parallax Image Interaction
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        scrub: true,
      },
      defaults: {
        ease: "none",
      },
    })
    .fromTo(
      $(this),
      { y: "-10%" },
      { y: "10%" },
      // )
      // .fromTo(
      //   $(this).find(".projects_content-wrap"),
      //   { yPercent: 30 },
      //   { yPercent: -30 },
      //   0,
    );
});

// Homepage Interactions
$(".parallax-wrap").each(function (index) {
  // Parallax Image Interaction
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        scrub: true,
      },
      defaults: {
        ease: "none",
      },
    })
    .fromTo(
      $(this).find(".parallax"),
      { backgroundPosition: "50% 100%" },
      { backgroundPosition: "50% 0%" },
      // )
      // .fromTo(
      //   $(this).find(".projects_content-wrap"),
      //   { yPercent: 30 },
      //   { yPercent: -30 },
      //   0,
    );
});

// Zoom Hero Image Interaction
$(".case_hero-img_wrap").each(function (index) {
  gsap
    .timeline({
      scrollTrigger: {
        start: "top top",
        trigger: $(this),
        scrub: true,
      },
      defaults: {
        ease: "none",
      },
    })
    .fromTo(
      $(this).find(".case_hero-img"),
      { backgroundSize: "100% auto" },
      { backgroundSize: "110% auto" },
    );
});
