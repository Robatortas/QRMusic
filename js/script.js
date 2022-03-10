// I HATE JAVASCRIPT!
// FUCK IT!

document.addEventListener("scroll", () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

$(".section").scroll(function() {
    if ($(this).scrollTop() > 50) {
      $(".generalHeading").css("display", "none").fadeOut("slow");
    } else {
      // do something else
    }
  });