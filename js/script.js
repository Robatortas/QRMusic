// I HATE JAVASCRIPT!
// FUCK IT!
document.addEventListener("scroll", searchScroll);

function searchScroll() {
  let scrollYPos = document.documentElement.scrollTop; //= document.body.scrollTop = 1000;
  // document.body.innerHTML = scrollDemo.scrollTop;

  let search = document.querySelector(".search");

  if(scrollYPos > 100) {
    console.log("fixed!");
    $(".search").css({
      position: 'fixed',
      margin: '-100px 0px',
      width: '100%'
    });
  } else {
    $(".search").css({
      position: 'relative',
      margin: '0px 0px'
    });
  }
}