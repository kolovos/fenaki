var htdocs = "file:///Users/dkolovos/git/fenaki/htdocs/";

var el = document.getElementById('content');
chrome.tabs.getSelected(function (tab) { 
  
  var url = tab.url;
  
  var mappingRequest = new XMLHttpRequest();
  mappingRequest.onreadystatechange = function() {
      if (mappingRequest.readyState === 4) {
          var mappingResponse = mappingRequest.responseText;
          var mappings = JSON.parse(mappingResponse).mapping;
          var foundReplacement = false;        
          for (i in mappings) {
              if (url == mappings[i].replace) {
                  var htmlRequest = new XMLHttpRequest();
                  htmlRequest.onreadystatechange = function() {
                      if (mappingRequest.readyState === 4) {
                          var htmlResponse = htmlRequest.responseText;
                          
                          chrome.tabs.executeScript({
                            code: 'var html = `' + escape(htmlResponse) + '`;'
                          }, function() {
                            chrome.tabs.executeScript({file: './embedded.js'});
                          });
                          
                      }
                  }

                  htmlRequest.open('GET', htdocs + mappings[i].with);
                  htmlRequest.send(null);
                  setStatus("Replaced with " + mappings[i].with);
                  foundReplacement = true;
                  break;
              }
          }
          if (!foundReplacement) {
            setStatus("Could not find a mapping for " + url);
          }
      }
  };
  
  setStatus("Could not find mapping.json");
  mappingRequest.open('GET', htdocs + 'mapping.json');
  mappingRequest.send(null);
  
});

function setStatus(status) {
  document.getElementById("status").textContent = status;
}