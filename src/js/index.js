require(["require.config"],function(){
	require(["jquery",'url','header','footer'],function($,url){
		class Index{
			constructor(){
				this.caty();
			}
			//请求数据
			caty(){
				$.ajax({
					url:url.baseUrl+'caty'
				}).done(res=>{
					// 判断是否请求成功
					if(res.res_code===1){
						//成功之后交给render进行渲染
						this.render(res.res_body.data.list);
					}
				})
			}
			render(res){
				
				let html = '<ul>';
				$.each(res,function(a,b){
					// console.log(a,b);
					html+=`<li>
								<a href="/html/detail.html?id=${b.id}"><img src="${b.img}" class="img-i"></a>
								<div class="d-img">
									${b.imgs.map(c=>`
									<img src="${c.img1}" width='20px' height='20px'>
									`).join('')}
								</div>
								<div class="d-title"><span>Dickies</span><span>${b.title}</span></div>
								<div class="d-sale"><p>DK${b.sale}</p><span>￥${b.price}</span></div>
							</li>`
				})
				html +='</ul>';
				$('#shop-item').html(html);
			}
		}
		new Index();
	})
})