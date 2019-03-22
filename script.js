var a;
var b;
var c;
var d;


$(".btn").click(function(){
    a = $(".question1").val();
     c = $(".question2").val();
      d = parseInt($(".question3").val());
      d= d * 365 * 15;
    alert(a + " in the year 2025, you will become " + c + " in " + d + " days ");
});