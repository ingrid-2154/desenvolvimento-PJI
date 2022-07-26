$('#myCarousel').on('slide.bs.carousel', function () {
  // Faça algo...
})
$('.carousel').carousel({
  interval: 9500
})
.carousel('cycle')

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myDIV").filter(function() {
  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});