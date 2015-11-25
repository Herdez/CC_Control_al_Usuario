// Una manera corta de escribir 'document.ready'
$(function(){
  
  $('#style_editor').on("submit", function(evento){

    evento.preventDefault();
    var dataSelector = $('#selector').val();
    console.log(dataSelector);
    var dataProperty = $('#property').val();
    console.log(dataProperty);
    var dataValue = $('#value').val();
    console.log(dataValue);
    changeCss(dataSelector, dataProperty, dataValue);

  });

}); 

var changeCss = function(val1, val2, val3) {
  $(val1).css(val2, val3);

}