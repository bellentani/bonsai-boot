$(function () {

});
//zoom na imagem - Plugin elevateZoom
function zoomImage(e){
  $(e).elevateZoom({
    cursor: 'crosshair',
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 750,
    zoomWindowPosition: 1,
    zoomWindowOffetx: 4,
    scrollZoom : true,
    easing : true,
    lensColour: '#b10061', //colour of the lens background
    lensOpacity: 0.4, //opacity of the lens
    borderColour: '#b10061',
    lensBorderSize: 0
  });
};
