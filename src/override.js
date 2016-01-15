/*
  function lockList(){
    console.log('lockList')

		var params = "m=listByJson&id=hangame-playgame-images";

		new Ajax.Request('exclude.nhn', {
			parameters: params,
			onSuccess: function(res) {
				lockInject(res.responseText.evalJSON());
			},
			onFailure: function(res){
			}
		});
	}

	function lockInject(data){
		$(lockId).update();
    console.log('lockInject');
    console.log(data);

		for(var i=0;i<data.length;i++){
			var el = createLockItem(data[i].userid, data[i].usernm, data[i].uri, data[i].comment);
			$(lockId).appendChild(el);
		}

		ajaxOnLoad(false, lockId, loadId3, 90, 60);
	}

  function createLockItem(userid, usernm, uri, comment){
    console.log(userid);
		var el = new Element('div');
    var title = comment + ' - ' + usernm + '(' + userid + ')';
		var el2 = new Element('div', {'title': title, 'alt': title});
		el2.onmouseover = Function("over(this,'#eea')");
		el2.onmouseout = Function("over(this,'')");
		if (uri.lastIndexOf("/") == (uri.length - 1)){
			var el4 = new Element('img', {'src': imgFolder});
			el2.appendChild(el4);
		}

		var el3 = document.createTextNode(uri + '[' + title + ']');
		el2.appendChild(el3);

		var el3 = new Element('img', {'src': imgMinus,
			'style': 'cursor:pointer;padding-left:2px'
		});
		el3.onclick = Function("delLock('" + uri + "')");
		el2.appendChild(el3);
		el.appendChild(el2);

		return el;
	}	

	function createFileItem(targetId, isFile , path, name){
		var el = new Element('div');

		if (path != "/") {
			var el5 = new Element('img', {'id': targetId + 's' ,
				'src': imgPlus,
				'style': 'cursor:pointer;padding-left:5px'
			});

			el5.onclick = Function("getFileList('" + escape(path) + "','" + targetId + "');")

			if (isFile == true) {
				el5.style.visibility = "hidden";
			}

			el.appendChild(el5);
		}

		var el4 = new Element('input', { 'id': targetId + 'c' ,
			'type': 'checkbox',
			'value': escape(path)
		});

		if (onlyFolder && isFile){
			el4.disabled = true;
		} else {
			el4.onclick  = Function("procDeployTemp(this.value," + isFile + ",this.checked)");
		}
		el.appendChild(el4);

		if (isFile == false){
			var el2 = new Element('img', {'src': imgFolder});
			el.appendChild(el2);
		}

    var filepath = path.replace('/env/project/release/hangame-playgame-images', '');

    var typeName = isFile ? 'file' : 'folder'
		var el3 = new Element('span', {'class': typeName}).update(name);
		el.appendChild(el3);
    if (!isFile) {
			var el3_btn = new Element('span').update('CHECK');
      var $el3_btn = jQuery(el3_btn).css({
        'cursor': 'pointer',
        'background-color': 'white',
        'padding': '1px',
        'margin': '3px',
        'border': '1px solid gray',
        'font-size': 'smaller'});
      $el3_btn.attr('data-filepath', filepath);
      $el3_btn.click((function(filepath){ return function(){
          var loadFileEvent = document.createEvent('CustomEvent');
          loadFileEvent.initCustomEvent('loadFileStatus', true, true, {filepath: filepath});
          document.dispatchEvent(loadFileEvent);
        }})(filepath));
      el.appendChild(el3_btn);
    }


    if (isFile) {
		  var el3_alpha = new Element('a', {'class': 'alpha'}).update('--')
		  var el3_release = new Element('a', {'class': 'release'}).update('--')
      jQuery(el3_release).css({
        'background-color': 'white',
        'padding': '1px',
        'margin': '3px',
        'border': '1px solid gray',
        'color': 'gray',
        'font-size': 'smaller'});
      jQuery(el3_alpha).css({
        'background-color': 'white',
        'padding': '1px',
        'margin': '3px',
        'border': '1px solid gray',
        'color': 'gray',
        'font-size': 'smaller'});
      el3.appendChild(el3_alpha);
      el3.appendChild(el3_release);

      jQuery(el3).attr('data-filepath', filepath);
    }
 

		if (isFile == false){
			var el6 = new Element('div', {'id': targetId ,
				'style': 'display:;padding-left:15px'
			});
			el.appendChild(el6);
		}

		return el;
	}
*/

function addDownloadButton() {
  var $btnBox = jQuery('.mdCMN08Ul');
  var $btnDownload = jQuery('<a class = "MdBtn01 mdBtn02"><span class="mdBtn01Inner"><span class="mdBtn01Txt">Download</span></span></a>');
  $btnBox.append($btnDownload);
}

console.log('test ');

jQuery(function(){
  addDownloadButton();
})
