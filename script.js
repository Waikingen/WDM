//-------------------------------------
// WDM MAIN SCRIPT - V2.0
//-------------------------------------
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
