$(document).ready(function () {
  $(".txt2").hover(
    function () {
      $(this).addClass("act");
    },
    function () {
      $(this).removeClass("act");
    }
  );
});
