$(function () {

  $('.gallery').exists(function() {
    var owlGallery = $('.gallery').children('.carousel-multiple-items');
    var owlIndicators = $('.gallery').find('.gallery--controls').children('.carousel-multiple-items');

    //console.log(owlGallery, owlIndicators);

    owlGallery.bind({
      'dragged.owl.carousel': function(e) {
        changeItems(e, owlIndicators);
      },
      'changed.owl.carousel': function(e) {
        changeItems(e, owlIndicators);
      }
    });

    //paginação do carousel (thumbs)
    owlIndicators.find('.item').click(function (e) {
        e.preventDefault();
        var owlTarget = $(this).attr('data-target');
        var owlCarEle = $(owlTarget).children('.owl-carousel:first');
        $(this).closest('.owl-stage').find('.owl-item').removeClass('active').children().removeClass('active');
        $(this).addClass('active');

        var owlGoTo = $(this).parent().index();

        owlGallery.trigger('to.owl.carousel', [owlGoTo]);
        //return false;
    });


    //Carousel Galleria com video
    owlGallery.on('changed.owl.carousel', function (e) {
        var pathVideo = $('.gallery').find('.owl-carousel:first .video-gallery');
        pathVideo.each(function (index, el) {
            var video = $(this).data('youtube');
            $(this).attr('src', '');
            $(this).attr('src', video);
        });
    });
  });

});


function changeItems(e, owlIndicators) {
  //active nos thumbs
  var owlCar = e.target;
  var owlItem = e.item.index;
  var owlParent = $(owlCar).parent();
  //console.log(owlCar, owlItem, owlParent);
  owlParent.find('.carousel-indicators .item').removeClass('active').promise().done(function () {
    owlParent.closest('.gallery').find('.gallery--controls .item').removeClass('active');
    owlParent.closest('.gallery').find('.gallery--controls .owl-item').eq(owlItem).children().addClass('active');
  });
  owlIndicators.trigger('to.owl.carousel', [owlItem]);
}
