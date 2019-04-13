require(['require.config'],()=>{
    require(['jquery','footer','header'],($)=>{
        class Detail{
            constructor(){
                this.init();
            }
            init(){
                //取出进入详情页商品的ID
                let id =location.search.slice(4),
                    //取出缓存的数据
                    detail=JSON.parse(localStorage.getItem('res'));
                // console.log(id);  
                this.render(detail,id)
            }
            render(res,id){
                var d;
				let html = '';
				$.each(res,function(a,b){
					if(b.id==id){
                        html+=` <a href="javascript:;" class="big-img"><img src="${b.imgs[0].img1}" alt=""></a>
                        <div class="small">
                        ${b.imgs.map(c=>`
                        <img src="${c.img1}" >
                        `).join('')}
                        </div>
                        <div class="introduce">
                            <ul>
                                <li><p>DK215465454</p><p>青春阳光</p></li>
                                <li><p>￥${b.price}</p></li>
                                <li><p>已选颜色：黑色</p><span>青春阳光</span></li>
                                <li><p>已选尺寸：xl</p><span>ml</span><span>l</span><span>xl</span><span>xxl</span></li>
                            </ul>
                            <div class="shopping">
                                <div class="number">
                                    <p>数量：</p><span clss='add-number'>-</span><input class='input-number' type="text" value="1"><span class='sub-number'>+</span>
                                </div>
                                <div class="car">
                                    <button class='shop-car'>加入购物车</button><button class="buy">立即购买</button>
                                </div>
                                <img src="/images/d-bottom.jpg" class="border">
                                <div class="links">
                                    <span>分享：</span>
                                    <a href="https://www.qq.com/?fromdefault" target="blank"><img src="/images/d-xinlang.jpg" alt=""></a>
                                    <a href="https://www.qq.com/?fromdefault" target="blank"><img src="/images/d-weixin.jpg" alt=""></a>
                                    <a href="https://www.qq.com/?fromdefault" target="blank"><img src="/images/d-xinlang2.jpg" alt=""></a>
                                    <a href="https://www.qq.com/?fromdefault" target="blank"><img src="/images/d-dou.jpg" alt=""></a>
                                </div>
                            </div>
                        </div>`
                        d=b;
                    }
                })
                $('#d-top').html(html);
                //加载完成调用页面的绑定事件
                this.bind(d,id);
            }
            //页面的事件
            bind(d,id){
                //详情页面点击小图片 显示到大图片
                //给小图片绑定点击事件
                $('.small').on('click','img',function(){
                    let img=$(this).attr('src');
                    $(this).parent().prev().children().attr('src',img);
                })
                //详情页商品数量事件
                $('.number').on('click','span',function(){
                   let number = $('.input-number').val();
                    if($(this).html()==='-'){
                        number--;
                        if(number<0){
                            number=0;
                        }
                        $('.input-number').val(number);
                    }
                    if($(this).html()==='+'){
                        number++;
                        $('.input-number').val(number);
                    }
                })
                //购物车事件
                $('.car').on('click','button',function(){
                    // $(this).
                    //如果点击的加入购车就要存入购物车里面
                    if($(this).attr('class')==='shop-car'){
                        let cart = JSON.parse(localStorage.getItem('cart'));
                        let car = [];
                        //判断购物车是否已有数据
                        if(cart){
                            //已有数据进行遍历
                            // console.log(cart);
                            //
                            var id_number=false;
                            cart.d.forEach(function(shops,i){
                                //判断商品是否已存在
                                if(shops.id===parseInt(id)){
                                    let input_m =parseInt($('.input-number').val());
                                    cart.num=parseInt(cart.num)+input_m;
                                    // cart.splice(i,1);
                                    // cart.push({d,num:shops.num});
                                    // console.log(i);
                                    // console.log(cart);
                                    localStorage.setItem('cart',JSON.stringify(cart));
                                    id_number=true;
                                }
                            })
                            if(!id_number){
                                //对没有的商品进行存储
                                let input_x=$('.input-number').val();
                                cart.d.push(d);
                                // console.log(cart);
                                localStorage.setItem('cart',JSON.stringify(cart));
                                id_number=false;
                            }
                            // cart.some(function(shops,i){
                            //         console.log(i);
                            //         console.log(shops);

                            // })
                            // console.log(d);
                            
                        }else{//没有数据添加数据
                            let input_n=$('.input-number').val();
                            car.push(d);
                            localStorage.setItem('cart',JSON.stringify({d:car,num:input_n}))
                        }
                        $('.shop-cart').children().html(cart.num);
                    }
                    //如果点击的是立即购买进入结算页面
                    if($(this).attr('class')==='buy'){
                        window.location.href='/html/cart.html';
                    }
                    // $('.xxxxx').html(cart.num);
                })
            }
        }
        new Detail();
    })
})