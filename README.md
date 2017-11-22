# Fenaki

Fenaki is a Chrome extension that can replace remote HTML content with content coming from a local file.

# Installation

1. Download a [zip copy of this repository](https://github.com/kolovos/fenaki/archive/master.zip)
1. Extract the zip file into a folder
1. In Chrome, navigate to [chrome://extensions/](chrome://extensions/)
1. Check the "Developer mode" check-box on the top-right of the page
1. Click "Load unpacked extension" and select the folder where you extracted the zip file in step 2. A new extension called Fenaki should have appeared at the top of your extensions list
1. Clock on the "Options" link under the new extension and type in the path of the directory where you wish to store your local HTML page copies
1. In this directory, beyond the copies of your HTML pages, you must also create a file called `mapping.json` where you can store your URL mappings. Go to the `mapping.json` section below for a discussion on the file's format and contents. Once you've created the file, you can return here
1. Now navigate to one of the URLs you defined in your `mapping.json` file and click the Fenaki ("F") button on Chrome's toolbar. Fenaki should replace its contents with those in the mapped local file.

# mapping.json

This is a text (JSON) file that defines how Fenaki should map URLs to local files. In the example below, when you navigate to http://www.in.gr/, Fenaki will load the HTML content of the page from in.html instead (i.e. from the in.html file in the directory you selected in step 6 above.

```
{
"mapping": [
    {
      "replace": "http://www.in.gr/",
      "with": "in.html"
    },
    {
    	"replace": "http://news247.gr/",
    	"with": "news247.html"
    }
  ]
}
```
