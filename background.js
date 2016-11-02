var element = function() {
  originalsPane = $('.originals-panels-row')
  if(originalsPane != null) {
    originalsPane.hide()
  }
};

setInterval(element, 1000);
