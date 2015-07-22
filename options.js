// Save options using chrome.storage
function save_options() {
  var footer_html = document.getElementById("footer").value;

  chrome.storage.local.set({
    "footer_html": footer_html
  }, function() {});
}

// Restores saved options using the preferences stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get({
    "footer_html": "Please enter footer text in extension options..."
  }, function(items) {
    document.getElementById("footer").value = items.footer_html;
  });
}

document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
