// I HATE JAVASCRIPT!
// FUCK IT!
document.addEventListener("scroll", function() {
  let scrollYPos = document.documentElement.scrollTop; //= document.body.scrollTop = 1000;
  // document.body.innerHTML = scrollDemo.scrollTop;

  let search = document.querySelector(".search");

  if(scrollYPos > 100) {
    console.log("fixed!");
    $(".search").css({
      position: 'fixed',
      margin: '-100px 0px',
      width: '100%',
      transition: 'all 0.3s'
    });
  } else {
    $(".search").css({
      position: 'relative',
      margin: '0px 0px'
    });
  }
});