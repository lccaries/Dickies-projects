require(['require.config'],()=>{
    require(['jquery','footer','header'],($)=>{
        class Cart{
            constructor(){
                this.init();
            }
            init(){
                //取出ocalStorage中的cart
                let car_shop=JSON.parse(localStorage.getItem('cart'));
                //把存的值取出来 交给render
                this.render(car_shop);   
            }
            render(x){
                console.log(x);
                let html ='';
                x.d.forEach(function(va){
                    html+=`
                    <ul>
                    <li><img src="${va.img}" alt=""><span>${va.title}</span><span>颜色：黑色</span><span>尺码：xl</span></li>
                    <li><span class="sub">-</span><input class="car-input" type="text" value="${va.sale}"><span class="add">+</span></li>
                    <li><p class="price">￥${va.price}</p></li>
                    <li><p class="A-price">￥9999</p></li>
                </ul>
                    `
                })
                $('#center-car').html(html);
                this.cal();
                this.binds();
            }
            cal(){
                var All_price =0;
                $(".car-input").each(function(i){      
                    $('.price').each(function(j){
                        if(i==j){
                            var aLLP = $(".car-input")[i].value*$(".price")[j].innerHTML.slice(1);
                            $('.A-price')[i].innerHTML="￥"+aLLP;
                            All_price+=aLLP;
                        }
                    })
                })
                $('.s-sub').html(All_price);
                $('.b-sub').html($('.s-sub').html()-$('.y-sub').html().slice(1));
                // var AllPrice = num*price;
                // console.log($('.A-price').html())
                // $('.A-price').html("￥"+AllPrice);
            }
            binds(){
                //给模板的父级盒子做事件委托
                console.log(11514);
                var _this =this;
                $('#center-car').on("click",'span',function(){
                    let input_val =parseInt($(this).next().val());
                    let input_prev = parseInt($(this).prev().val());
                    if($(this).attr('class')==='sub'){
                        input_val--;
                        if(input_val<1){
                            input_val =1;
                        }
                        $(this).next().val(input_val);
                    }
                    if($(this).attr('class')==='add'){
                        console.log(input_prev);
                        input_prev++;
                        $(this).prev().val(input_prev);
                    }
                    _this.cal();
                })
                $(".cal-button").on("click",function(){
                    window.location.href='https://www.dickies.com.cn/cart?dwcont=C1202443123';
                })
                
            }
        }

        new Cart();
    })
})