define(["jquery"],function(jquery){
	class Header {
		constructor() {
		  this.init();  
		}
		init () {
			return new Promise((resolve, reject) => {
				// 可以在加载路径后面写上空格加选择器，只加载一部分html
				$("#header-container").load("/html/module/header.html",() => {
					// 回调函数，指的是load加载结束以后执行的代码
					resolve();
					this.hover();
					this.car_bind();
					let carshop =JSON.parse(localStorage.getItem('cart'));
					$('.shop-cart').children().html(carshop.num);
				});
			})
		}
		car_bind(){
			$('.shop-cart').on('click',function(){
				window.location.href='/html/cart.html';
			})
		}
		hover(){
			var html =`<div id="shops">
				<dl>
					<dt>上装</dt>
						<dd>短袖</dd>
						<dd>长袖</dd>
						<dd>衬衫</dd>
						<dd>外套</dd>
						<dd>卫衣</dd>
						<dd>夹克</dd>
						<dd>风衣</dd>
				</dl>
				<dl>
					<dt>下装</dt>
						<dd>短袖</dd>
						<dd>长袖</dd>
						<dd>衬衫</dd>
						<dd>外套</dd>
						<dd>卫衣</dd>
						<dd>夹克</dd>
				</dl>
				<a href=""><img src="/images/cross_category.jpg" alt=""></a>
			</div>
			`
			$('header #bottom-container ul li').append(html);
		}

	}
	return new Header();
})