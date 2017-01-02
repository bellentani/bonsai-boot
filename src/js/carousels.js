$(function () {
  $('.carousel-multiple-items').exists(function() {
    var owlTheme; //adiciona o thema
    var owlItems; //number 0,1,2... //adiciona a quantidade de itens
    var owlWid; //feito // true ou false, determina se é automatico ou não o tamanho da div relacionada ao conteudo
    var owlMargin; //feito //number, define o tamanho da margin entre os itens
    var owlLoop; //feito //true ou false, se tem loop ou não
    var owlNav; //feito //true ou false, se tem navegação por elementos
    var owlResponsive; //feito //string que é transformada em objeto json, usa o modelo "{resolucao maxima}:{items},"
    var owlNavText; //feito //string que é transformada em objeto json, usa o modelo "{prev}, {next}"
    var owlDots; //feito //true ou false, mostra a navegação com contadores em bolinhas (dots)
    var owlCenter;
    var mouseDrag;
    var touchDrag;
    var pullDrag;
    var lazyLoad;
    var autoplay;
    var autoplayTimeout;
    var animateOut;
    var animateInClass;

    this.each(function(index, el) {
      owlTheme = $(this).data('theme');
      owlItems = $(this).data('items');
      owlWid = $(this).data('width');
      owlMargin = $(this).data('margin');
      owlLoop = $(this).data('loop');
      owlResponsive = $(this).data('responsive');
      owlNav = $(this).data('nav');
      owlNavText = $(this).data('nav-text');
      owlDots = $(this).data('dots');

      if (!owlTheme) {
        owlTheme = 'owl-theme';
      }
      if (!owlItems) {
        owlItems = 1;
      }
      if (!owlWid) {
        owlWid = false;
      }
      if (owlLoop === true) {
        owlLoop = true;
      } else {
        owlLoop = false;
      }
      if (owlMargin === null || owlMargin === '' || owlMargin === undefined) {
        owlMargin = 10;
      } else if (owlMargin === '0') {
        owlMargin = 0;
      }
      if (!owlResponsive) {
        responsiveConfig = {
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
      if (owlNav === undefined) {
        owlNav = true;
      }
      if (owlDots === undefined) {
        owlDots = true;
      }
      if (!owlNavText) {
        owlNavText = [
          'Anterior',
          'Próximo  '
        ];
      } else if (owlNavText == 'chevron') {
        owlNavText = [
          '<div class="icon icon-chevron-left"></div>',
          '<div class="icon icon-chevron-right"></div>'
        ];
      } else {
        var splitNavs = owlNavText.split(',');
        var obj = [];
        for (var i = 0; i < splitNavs.length; i++) {
          obj.push(splitNavs[i]);
        }
        owlNavText = obj;
      }
      //Monta o carrossel
      var itemsInter = $(this).children('.item').length;
      if (itemsInter > owlItems) {
        $(this).addClass('owl-carousel ' +owlTheme).owlCarousel({
          loop: owlLoop,
          margin: owlMargin,
          nav: owlNav,
          dots: owlDots,
          responsive: responsiveConfig,
          autoWidth: owlWid,
          navText: owlNavText
        })
      } else {
        divideWid = 100/owlItems;
        $(this).addClass('owl-carosel-static').children('.item').width(divideWid+'%');
      }
    });
  });
});
