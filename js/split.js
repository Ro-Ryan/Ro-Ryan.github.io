$(".move-area").mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});


//$('#multiscroll').multiscroll({
//    sectionsColor: ['#2980b9', '#2ecc71', '#e74c3c',],
//});
//
//function loadingBM(){
//  setTimeout('$("#besideMouse").html("Scroll to see my next project,<br> click anywhere to see this one!")', 100);
//
//}
//var loadingBMint;
//function startLoadingBM(){
//  loadingBMint = setInterval(loadingBM, 0);
//}
//function stopLoadingBM(){
//  loadingBMint = clearInterval(loadingBMint);
//}
//
//$(document).ready(function(){
//  $(document).mousemove(function(e){
//     var cpos = { top: e.pageY + 10, left: e.pageX + 10 };
//     $('#besideMouse').offset(cpos);
//  });
//    $('#start').mouseout(startLoadingBM);
//});
//
