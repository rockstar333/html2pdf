# html2pdf

<strong>Task:</strong><br>
Print https://almsaeedstudio.com/AdminLTE page as pdf file.

<strong>Description:</strong><br>
Task was implemented with help of the following technologies:
- Javascript and PhantomJS framework
- HTML, CSS

<strong>HowTo instructions:</strong><br>
- Download the latest distributive of PhantomJS from the official web-site http://phantomjs.org/download.html
- Download script file from the repository
- Go to the bin folder where launcher phantomjs is located 
- Start script with cmd line by typing in the following command - phantomjs.exe PATH_TO_SCRIPT. Variable <PATH_TO_SCRIPT> should be the path to the main.js.
- Pdf file will be created in the folder where launcher is located.

<strong>Difficulties of implementation:</strong><br>
During the implementation of this task I faced several difficulties. The main flow of my solution is the absence of some background-color styles. It is caused by incomplete PhantomsJS Pdf render algorithm and Bootstrap CSS files (Bootstrap is used for AdminLTE CSS styling). 

PhantomJS strives to render page in @media print mode and there is no open instruments to revise its behavoiur. I have tried to revise links and to make them refer to  my own fixed bootstrap CSS files, but this solution is failed due to the undefined security issues (operation was canceled without reasonable explanation). 

And Bootstrap @media print styles make background-color styles transparent and font color styles black for almost all elements (except those that have greater style priority (for example, "!important" keyword)). Also there were some structure changes on the page - several elements become hidden. Due to this both issues pdf file is rendered without some background colors, mostly black font colors and hidden elements. I managed to fix last problem by overriding some of @media print styles. Unfortunately, the first problem still exists.
