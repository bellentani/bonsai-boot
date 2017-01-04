$(function () {

  $('.gallery').exists(function() {
    var owlGallery = $('.gallery').children('.carousel-multiple-items');
    var owlIndicators = $('.gallery').find('.gallery--controls').children('.carousel-multiple-items');

    //console.log(owlGallery, owlIndicators);

    owlGallery.bind({
      'dragged.owl.carousel': function(e) {
        var eleTar = e.target;
        changeItems(e, eleTar);
      },
      'changed.owl.carousel': function(e) {
        var eleTar = e.target;
        changeItems(e, eleTar);
      }
    });

    //paginação do carousel (thumbs)
    owlIndicators.find('.item').click(function (e) {
        e.preventDefault();
        var owlTarget = $(this).closest('.gallery').children('.carousel-multiple-items:first');
        var owlCarEle = $(owlTarget).children('.owl-carousel:first');
        var owlCarToChange = $(this).closest('.owl-carousel');
        var owlGoTo;

        if (owlCarToChange.hasClass('owl-carousel')) {
          owlCarToChange.find('.owl-item').removeClass('active').children().removeClass('active');
          owlGoTo = $(this).parent().index();
        } else {
          $(this).removeClass('active');
          owlGoTo = $(this).index();
        }
        $(this).addClass('active');

        owlTarget.trigger('to.owl.carousel', [owlGoTo]);
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

function changeItems(e, eleTar) {
  //active nos thumbs
  var owlCar = e.target;
  var owlItem = e.item.index;
  var owlParent = $(owlCar).parent();
  //console.log(owlCar, owlItem, owlParent);
  owlParent.find('.carousel-indicators .item').removeClass('active').promise().done(function () {
    owlParent.closest('.gallery').find('.gallery--controls .item').removeClass('active');
    if (owlParent.hasClass('.owl-carousel')) {
      owlParent.closest('.gallery').find('.gallery--controls .owl-item').eq(owlItem).children().addClass('active');
    } else {
      owlParent.closest('.gallery').find('.gallery--controls .item').eq(owlItem).addClass('active');
    }
  });
  $(eleTar).trigger('to.owl.carousel', [owlItem]);
  //console.log(eleTar);
}
