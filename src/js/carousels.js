$(function () {
  $('.carousel-fullbanner').exists(function() {
    this.addClass('owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items: 1
        }
      }
    });
  });

  $('.carousel-multiple-items').exists(function() {
    var owlItems;
    var owlWid;
    var loop;
    var nav;
    var margin;
    var responsive;

    this.each(function(index, el) {
      owlItems = $(this).data('items');
      owlWid = $(this).data('width');
      owlResponsive = $(this).data('responsive');

      if (!owlItems) {
        owlItems = 1;
      }
      if (!owlWid) {
        owlWid = false;
      }
      if (!owlResponsive) {
        owlResponsive = {
          0:{
            items: owlItems
          },
          600:{
            items: owlItems
          },
          1000:{
            items: owlItems
          }
        }
      } else {
        var itemsJson = [];
        var stringConfig = '';

        //jsonObj = JSON.parse(jsonRespon);
        splitViews = owlResponsive.split(',');
        for (var i = 0; i < splitViews.length; i++) {
          splitArray = splitViews[i].split(':');
          itemsPage = splitArray[1];
          viewportPage = splitArray[0];

          if (i+1 < splitViews.length) {
            stringConfig += viewportPage+':{"items": "'+itemsPage+'"},';
          } else {
            stringConfig += viewportPage+':{"items": "'+itemsPage+'"}';
          }
        }
        stringConfig = '{'+stringConfig+'}';
        var jsonConfig = JSON.stringify(eval("(" + stringConfig + ")"));
        var responsiveConfig = JSON.parse(jsonConfig);
      }

      var itemsInter = $(this).children('.item').length;
      if (itemsInter > owlItems) {
        $(this).addClass('owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          responsive: responsiveConfig,
          autoWidth: owlWid
        })
      } else {
        divideWid = 100/owlItems;
        $(this).children('.item').width(divideWid+'%').css('float', 'left');
      }

    });

  });

});
