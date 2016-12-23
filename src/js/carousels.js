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
        var jsonRespon = {
          "responsive": []
        };
        var soEu = [];
        //jsonObj = JSON.parse(jsonRespon);
        splitResp = owlResponsive.split(',');
        for (var i = 0; i < splitResp.length; i++) {
          splitArray = splitResp[i].split(':');
          //addMenuItem(splitArray[0], jsonRespon.responsive, splitArray[1]);
          //jsonObj.responsive[i].splitArray[0] = splitArray[1];
          soEu.push(splitArray[0]);
          //spliting = soEu[0];
          splited = {items: splitArray[1]};
          spliting = jsonRespon.responsive.children[1].push(splited);
          //console.log('spl', splited);

          //soEu = splited;


          //addItem(splitArray[1], soEu, i);

          var pushA = splitArray[0];
          var pushB = splitArray[1];

          //jsonRespon.push({pushA: { items: pushB} });

          console.log(splitResp[i], splitArray);
        }
        function addItem(title, arr, i) {
          arr.push({
              items: title
          });
        }
        jsonRespon = JSON.stringify(soEu);
        console.log(jsonRespon, soEu);

        console.log(splitResp);
        owlResponsive = soEu;

        // owlResponsive = {
        //   0:{
        //     items: owlItems
        //   },
        //   600:{
        //     items: owlItems
        //   },
        //   1000:{
        //     items: owlItems
        //   }
        // }
      }


      $(this).addClass('owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: owlResponsive,
        autoWidth: owlWid
      })
    });

  });

});
