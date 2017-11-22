var el = document.getElementById('content');
chrome.tabs.getSelected(function (tab) { 
  
  var url = tab.url; 
  
  var mappingRequest = new XMLHttpRequest();
  mappingRequest.onreadystatechange = function() {
      if (mappingRequest.readyState === 4) {
          var mappingResponse = mappingRequest.responseText;
          var mappings = JSON.parse(mappingResponse).mapping;
          for (i in mappings) {

              if (url == mappings[i].replace) {
                  var htmlRequest = new XMLHttpRequest();
                  htmlRequest.onreadystatechange = function() {
                      if (mappingRequest.readyState === 4) {
                          var htmlResponse = htmlRequest.responseText;
                          
                          chrome.tabs.executeScript({
                            code: 'var config = `' + escape(htmlResponse) + '`;'
                          }, function() {
                            chrome.tabs.executeScript({file: './embedded.js'});
                          });
                          
                      }
                  }

                  htmlRequest.open('GET', 'file:///Users/dkolovos/git/fenaki/htdocs/' + mappings[i].with);
                  htmlRequest.send(null);
              }
          }
      }
  };

  mappingRequest.open('GET', 'file:///Users/dkolovos/git/fenaki/htdocs/mapping.json');
  mappingRequest.send(null);
  
});