function getDocHeight(doc) {
  doc = doc || document;
  // stackoverflow.com/questions/1145850/
  var body = doc.body, html = doc.documentElement;
  var height = Math.max( body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight );
  return height;
}

function setIframeHeight(id) {
  var ifrm = document.getElementById(id);
  var doc = ifrm.contentDocument? ifrm.contentDocument:
    ifrm.contentWindow.document;
  ifrm.style.visibility = 'hidden';
  ifrm.style.height = "10px"; // reset to minimal height ...
  // IE opt. for bing/msn needs a bit added or scrollbar appears
  ifrm.style.height = getDocHeight( doc ) + 4 + "px";
  ifrm.style.visibility = 'visible';
}

// <iframe id="sample" src="./index.html" onload="setIframeHeight(this.id)" width="100%" style="border: none;"></iframe>

var container = document.getElementsByClassName('votd-container');
if (container) {
  container[0].innerHTML = '<iframe id="sample" src="./index.html" onload="setIframeHeight(this.id)" width="100%" style="border: none;"></iframe>';
}
