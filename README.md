# fenaki

Fenaki is a Chrome extension that can replace remote HTML content in Chrome.

# Installation

1. Download a [zip copy of this repository](https://github.com/kolovos/fenaki/archive/master.zip)
1. Extract the zip file into a folder
1. In Chrome, navigate to [chrome://extensions/](chrome://extensions/)
1. Check the "Developer mode" check-box on the top-right of the page
1. Click "Load unpacked extension" and select the folder where you extracted the zip file in step 2. A new extension called Fenaki should have appeared at the top of your extensions list
1. Install the [Web Server fom Chrome extension](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en)
1. Go to [chrome://apps/](chrome://apps/) and start the Web Server for Chrome. To verify that Web Server for Chrome has been started, go to http://127.0.0.1:8887/ in Chrome. If the server is running you should get a response reading `Unhandled request. Did you select a folder to serve?`
1. In Web Server from Chrome, select the directory where you wish to store your local HTML page copies
1. In this directory, beyond the copies of your HTML, you should create a file called `mapping.json` where you can store your URL mappings. Go to the `mapping.json` section below for a discussion on the file's format and contents. Once you've created the file, you can return here
1. Now navigate to one of the URLs you defined in your `mapping.json` file. Fenaki should replace its contents with those in the mapped URL.

# mapping.json

This is a text file that defines how Fenaki should map URLs. In the example below, when you navigate to http://www.in.gr/, Fenaki will load the HTML content of the page from http://localhost:8887/in.html instead (i.e. from the in.html file in the directory you selected in step 8 above.

```
{
"mapping": [
    {
      "replace": "http://www.in.gr/",
      "with": "http://localhost:8887/in.html"
    },
    {
    	"replace": "http://news247.gr/",
    	"with": "http://localhost:8887/news247.html"
    }
  ]
}
```
