$(document).ready(function(){
  $("h2").click(function () {
      $(".hide-definition").slideToggle();
      $(".show-definition").slideToggle();
  });

  $("p").click(function () {
      $(".hide-definition").fadeToggle();
      $(".show-definition").fadeToggle();
  });
});

// $(document).ready(function(){
//   $('').click(function() {
// 	$(this).sibling().toggleClass('hide-definition');
// 	return false;
// });
//
//   $("this").click(function () {
//       $(".hide-definition").fadeToggle();
//       $(".show-definition").fadeToggle();
//   });
// });
