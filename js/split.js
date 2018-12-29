//codepen
//$(document).ready(function() {
//    $('#multiscroll').multiscroll();
//});

$('#multiscroll').multiscroll({
    sectionsColor: ['#2980b9', '#2ecc71', '#e74c3c',],
});

//$(document).ready(function() {
//	$('#multiscroll').multiscroll();
//});
function loadingBM(){
  setTimeout('$("#besideMouse").html("Scroll to see my next project,<br> click anywhere to see this one!")', 100);
//  setTimeout('$("#besideMouse").html("Loading..")', 1000);
//  setTimeout('$("#besideMouse").html("Loading...")', 2000);
}
var loadingBMint;
function startLoadingBM(){
  loadingBMint = setInterval(loadingBM, 0);
}
function stopLoadingBM(){
  loadingBMint = clearInterval(loadingBMint);
}

$(document).ready(function(){
  $(document).mousemove(function(e){
     var cpos = { top: e.pageY + 10, left: e.pageX + 10 };
     $('#besideMouse').offset(cpos);
  });
    $('#start').mouseout(startLoadingBM);
});

