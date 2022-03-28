// I HATE JAVASCRIPT!
// FUCK IT!

// Search
function searchScroll() {
  let scrollYPos = document.documentElement.scrollTop; //= document.body.scrollTop = 1000;
  // document.body.innerHTML = scrollDemo.scrollTop;

  let search = document.querySelector(".search");

  // $ is a short way of referencing JQuery!
  if(scrollYPos > 100) {
  // IT'S FIXED NOW!
    $(".search").css({
      position: 'fixed',
      margin: '-100px 0px',
      width: '100vw'
    });
  } else {
    // Not fixed :(
    $(".search").css({
      margin: '0px',
      position: 'relative',
      width: 'auto'
    });
  }
}
document.addEventListener("scroll", searchScroll);

