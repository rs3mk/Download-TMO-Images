// ==UserScript==
// @name        Download-TMO-Images
// @version     1
// @namespace   zack0zack
// @description tmofans.com descarga todas las imagenes del capitulo en cascada
// @icon	
// @include     https://tmofans.com/viewer/*/cascade
// @require     https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/jszip-utils/0.0.2/jszip-utils.min.js
// @require     https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js
// @run-at      document-end
// @grant       unsafeWindow
// @grant       GM_xmlhttpRequest
// @grant       GM_download
// @grant       GM_addStyle
// @connect     self
// @connect     *
// @nocompat    Chrome
// @noframes
// ==/UserScript==

var images = document.getElementsByTagName('img');
var links = [];
var i = 0;
var fileName = "";

setInterval(function(){
    if(images.length > i){
        filename = i + getExtension(images[i].src);
        GM_download(images[i].src, filename);
        i++;
    }
},200);

function getExtension(url) {
    return url.split('?')[0].match(/\.\w+$/)[0];
}
