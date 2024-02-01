function createCart(){
    let cartitems=[]
    return {
        getCartItems: function (){
            console.log(cartitems);
        },
        addToCart: function(obj){
            let isAdded=cartitems.find((o)=>{
                return o.orderId===obj.orderId && o.product===obj.product;
            })
            if(isAdded){
                isAdded.quantity++;
                //console.log(isAdded)
            }else{
                obj.quantity=1;
                cartitems.push(obj);
            }
        },
        remove: function(id){
            let findidx = cartitems.findIndex((obj)=>{
                return obj.orderId===id;
            })
            cartitems.splice(findidx,1);
        }
    }
}
cart=createCart();
order1={
    orderId: 1,
    product: "iphone",
    price: 50
}
order2={
    orderId: 2,
    product: "android",
    price: 40
}
order3={
    orderId: 1,
    product: "iphone",
    price: 50
}
order4={
    orderId: 3,
    product: "tv",
    price: 150
}
cart.addToCart(order1);
cart.addToCart(order2);
cart.addToCart(order3);
cart.addToCart(order4);
cart.remove(2);
cart.getCartItems();