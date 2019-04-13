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
                    <li>￥<p class="price">${va.price}</p></li>
                    <li>￥<p class="A-price">9999</p></li>
                </ul>
                    `
                })
                $('#center-car').html(html);
                this.bind();
            }
            bind(){
                var num = $(".car-input").val();
                var price = $(".price").html();
                console.log(num,price);
                var AllPrice = num*price;
                console.log(AllPrice)
            }
        }

        new Cart();
    })
})