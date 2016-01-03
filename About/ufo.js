$(document).ready(function() {
   $('.extend').mouseenter(function() {
       $(this).animate({
           width: '+=20px'
       });
   });
   $('.extend').mouseleave(function() {
       $(this).animate({
           width: '-=20px'
       }); 
   });
});