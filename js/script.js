// I HATE JAVASCRIPT!
// FUCK IT!

// $(window).scroll(function() {
//   var a = 1;
//   var pos = $(window).scrollTop();
//   if(pos > a) {
//         $("search").css({
//               position: 'fixed'
//         });
//   } else {
//     $("search").css({
//             position: 'absolute',
//             top:'600px'
//     });
//   }
// });

document.addEventListener("scroll", function() {
  let scrollDemo = document.querySelector("body");
  // document.body.innerHTML = scrollDemo.scrollTop;
  console.log(scrollDemo.scrollTop);
});

function scrollDetect() {
  var a = 1;
  var pos = $(window).scrollTop();
  if(pos > a) {
        $("search").css({
              position: 'fixed'
        });
  } else {
    $("search").css({
            position: 'absolute',
            top:'600px'
    });
  }
}