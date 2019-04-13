require(['require.config'],()=>{
    require(['jquery','url','bootstrap','footer','header'],($,url)=>{
       class List{
            constructor(){
                this.pull();
                this.caty();
                this.priceup();
            }
            pull(){
                // let a = 0;
                $("#left").delegate('.span',"click",function(){
                    // console.log($(this).attr('class'));
                    if($(this).next().css('display')=='none'){
                        $(this).next().css('display','block');
                        $(this).css('background','url(/images/shang.jpg) no-repeat');
                        // a=1;
                    }else{
                        $(this).next().css('display','none');
                        $(this).css('background','url(/images/xia.jpg) no-repeat');
                        // a=0;
                    }
                  });
            }
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

            //按价格升序排列
            priceup(){
                $('.priceup').on('click',()=>{
                    new Promise(resolve=>{
                        //请求原始数据
                        $.get(url.baseUrl+"caty",res=>{
                            if(res.res_code===1){
                                //请求成功之后返回所需数据
                                resolve(res.res_body.data.list);
                            }
                        })
                    }).then(list=>{
                        list=list.sort((a,b)=>{
                            return a.price-b.price;
                        })
                    console.log(list);
                    this.render(list);
                    });
                    
                })
            }
            //拼接及渲染列表
			render(res){
				let html = '<ul>';
				$.each(res,function(a,b){
					 console.log(a,b);
					html+=`<li>
								<a href="/html/detail.html?id=${b.id}"><img src="${b.imgs[0].img1}" class="img-i"></a>
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
                $('#shop-items').html(html);
                localStorage.setItem('res',JSON.stringify(res));
            }
       } 
       new List();
    })
})