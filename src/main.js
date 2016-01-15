/*
function randomBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var ajaxFunc = function(filepath) {
  var alpha_path = 'http://alpha-playgame-images.hangame.co.jp' + filepath; 
  var release_path = 'http://playgame-images.hangame.co.jp' + filepath; 
  try {
    jQuery.ajax({
      filepath: filepath,
      url: alpha_path,
      crossDomain: true,
      success: function(data) {
        var $el = jQuery('span[data-filepath="' + this.filepath + '"]');
        jQuery('a.alpha', $el).text('Alpha-OK').attr('href', this.url).attr('target', '_blank').css('background-color', 'green').css('color', 'white');
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        var $el = jQuery('span[data-filepath="' + this.filepath + '"]');
        jQuery('a.alpha', $el).text('Alpha-ERROR').css('background-color', 'red').css('color', 'white');
      }
    });
    jQuery.ajax({
      filepath: filepath,
      url: release_path,
      crossDomain: true,
      success: function(data) {
        var $el = jQuery('span[data-filepath="' + this.filepath + '"]');
        jQuery('a.release', $el).text('Real-OK').attr('href', this.url).attr('target', '_blank').css('background-color', 'green').css('color', 'white');
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        var $el = jQuery('span[data-filepath="' + this.filepath + '"]');
        jQuery('a.release', $el).text('Real-ERROR').css('background-color', 'red').css('color', 'white');
      }
    });
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("loadFileStatus", function (e) {
  var dirpath = e.detail.filepath;
  var $el = jQuery('span[data-filepath="' + dirpath + '"]');
  var pathList = $el.next().find('div > span.file').map(function(){
    return jQuery(this).data('filepath');
  });
  for (var i = 0; i < pathList.length; i++) {
    var filepath = pathList[i];
    setTimeout((function(filepath){ return function() {
      ajaxFunc(filepath);
    }})(filepath), i);
  }
}, false);

jQuery(function(){
  var s = document.createElement("script");
  s.src = chrome.extension.getURL("override.js");
  (document.head||document.documentElement).appendChild(s);

  jQuery('table[width=1000]').attr('width', '100%');
  jQuery('table[height=400]').attr('height', '1000');
  jQuery('#from').css('height', '990px');
  jQuery('#to').css('height', '990px');

  jQuery('#lockinfo > div > div').each(function(){var $self = jQuery(this); $self.text($self.text() + '[' + $self.attr('alt') + ']')});

  console.log('FGStudio Image Server Extension Loaded');
});
*/

document.addEventListener("downloadAll", function (e) {
  console.log(e);
  var urlList = e.detail.urlList;
  console.log(urlList);
}, false);

jQuery(function(){
  var s = document.createElement("script");
  s.src = chrome.extension.getURL("override.js");
  (document.head||document.documentElement).appendChild(s);

  console.log('Sticker Transportation');
});
