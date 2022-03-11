// I HATE JAVASCRIPT!
// FUCK IT!
document.addEventListener("scroll", function() {
  let scrollYPos = document.documentElement.scrollTop; //= document.body.scrollTop = 1000;
  // document.body.innerHTML = scrollDemo.scrollTop;
  console.log(scrollYPos);

  if(scrollYPos > 100) {
    document.getElementById(".search").css({
      position: fixed
    });
  }
});