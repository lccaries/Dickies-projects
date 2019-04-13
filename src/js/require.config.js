require.config({
	baseUrl:"/",
	paths:{
		"jquery" : "libs/jquery/jquery-3.2.1",
		"header":"js/module/header",
		"footer":"js/module/footer",
		"url":"js/module/url",
		'bootstrap':'libs/bootstrap/js/bootstrap.min'
	},
	shim:{'bootstrap':{deps:['jquery']}}
})