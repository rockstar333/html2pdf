var page = require('webpage').create();
    page.viewportSize = {
        width : 1000,
        height : 700
    };

page.open('https://almsaeedstudio.com/AdminLTE', function() {
  	console.log("render");
		
	page.evaluate(function() {
         var stylee = window.frames['preview-iframe'].document.getElementsByTagName("style")[0];
		 stylee.appendChild(document.createTextNode("@media print {.main-sidebar .main-header{margin-left:-500px;} .no-print, .main-sidebar, .left-side, .main-header, .content-header {display: block !important;} .content-wrapper,.right-side, .main-footer {margin-left: 230px !important; min-height: 0 !important; -webkit-transform: none !important; -ms-transform: none !important; -o-transform: none !important; transform: none !important;}*,:after,:before{text-shadow:none!important;background: 100%; -webkit-box-shadow:none!important;box-shadow:none!important}}"));
		 
		 var boot = document.querySelector('link[href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"]');
		 boot.href = 'https://dl-web.dropbox.com/get/css/bootstrap.min_fix.css?w=AACyds-kJXNsaXYFn56QBPjPHBJWDuIVlpiNv6Olt9pqxQ&dl=1&_subject_uid=3399761';
		 boot.setAttribute("media", "all");

    	 var fr = window.frames['preview-iframe'].document.querySelector('link[href="bootstrap/css/bootstrap.min.css"]');		 
		 fr.setAttribute("media", "all");
    });
	
	page.paperSize = {
		width: '800px',
		height: '1200px',
		margin: '0px'
	};

    page.render("page.pdf");
	phantom.exit();
    });