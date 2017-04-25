$(document).ready(function(){
  $("p#special").removeClass();
  $("#special").click(function(){
    $("p#special").addClass("highlight");
  });
});
