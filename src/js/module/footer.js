define(['jquery'],function(jquery){
		class Footer{
			constructor() {
			    this.init();
			}
			init(){
				return new Promise((resolve,reject)=>{
					// 可以在加载路径后面写上空格加选择器，只加载一部分html
					$('#footer-container').load('/html/module/footer.html',()=>{
						// 回调函数，指的是load加载结束以后执行的代码
						resolve();
					})
				})
			}
		}
	return new Footer();
})