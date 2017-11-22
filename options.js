// Saves options to chrome.storage.sync.
function save_options() {
  var htdocs = document.getElementById('htdocs').value;
  chrome.storage.sync.set({
    htdocs: htdocs
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores the preferences stored in chrome.storage.
function restore_options() {
  // Use default values.
  chrome.storage.sync.get({
    htdocs: ''
  }, function(items) {
    document.getElementById('htdocs').value = items.htdocs;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);