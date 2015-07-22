var footer = document.createElement("div");
footer.setAttribute("id", "chrome-footer-extension-footer");

var footer_html = chrome.storage.local.get({
  "footer_html": "Please enter footer text in extension options..."
}, function(items) {
  footer.innerHTML = items.footer_html;
  document.body.appendChild(footer);
});
