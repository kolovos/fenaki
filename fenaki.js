// window.alert("Enabled!");

window.onload = function() {
    // window.alert("Enabled!");
    var mappingRequest = new XMLHttpRequest();
    mappingRequest.onreadystatechange = function() {
        if (mappingRequest.readyState === 4) {
            var mappingResponse = mappingRequest.responseText;
            var mappings = JSON.parse(mappingResponse).mapping;
            for (i in mappings) {

                if (window.location == mappings[i].replace) {
                    window.alert("Replacing!");
                    var htmlRequest = new XMLHttpRequest();
                    htmlRequest.onreadystatechange = function() {
                        if (mappingRequest.readyState === 4) {
                            var htmlResponse = htmlRequest.responseText;
                            document.open();
                            document.write(htmlResponse);
                            document.close();
                        }
                    }

                    htmlRequest.open('GET', mappings[i].with);
                    htmlRequest.send(null);
                }

                //window.alert(mappings[i].replace);
                //window.alert(mappings[i].with);
                //window.alert(window.location);
            }
        }
    };

    mappingRequest.open('GET', 'http://localhost/mapping.json');
    mappingRequest.send(null);

}