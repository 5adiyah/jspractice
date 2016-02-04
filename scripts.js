$(document).ready(function(){
  $(".effect1").click(function(){
    $(".hide").show();
  });

  $(".effect2").click(function(){
    $(".showing").toggle();
    $(".hidden").toggle();
  });

  $(".efclick3").click(function(){
    $(".fadein").fadeIn(1000);
  });

  $(".efclick4").click(function(){
    $(".fadeout").fadeToggle(1000);
  });

  $(".card").click(function(){
    $(".question").toggle();
    $(".answer").toggle();
  });
});
