$('#myCarousel').on('slide.bs.carousel', function () {
  // Faça algo...
})
$('.carousel').carousel({
  interval: 2000
})
.carousel('cycle')

api.setHighlightOptions({
    outlineWidth: 5,
    outlineColor: [1.0, 0.0, 0.0],
    outlineDuration: 200,
    highlightColor: [0.0, 1.0, 0.0],
    highlightDuration: 300
}, function() {
    window.console.log('Set highlight options');
});

api.startAR(function(err) {
    if (!err) {
        window.console.log('Starting AR');
    }
});
api.getCameraLookAt(function(err, camera) {
    window.console.log(camera.position); // [x, y, z]
    window.console.log(camera.target); // [x, y, z]
});