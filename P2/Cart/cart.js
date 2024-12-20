var myproducts = JSON.parse(localStorage.getItem('userCartItems'));
draw(myproducts)
function draw(arr) {
    productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    console.log(arr.length)
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].id)
            
            var Pid = document.createElement('input');
            Pid.type = 'hidden';
            Pid.value = arr[i].id;
            
            var card = document.createElement('div');
            card.classList.add('card')
            var card_image = document.createElement('div');
            card_image.classList.add('card-image');
            var image = document.createElement('img');
            image.src = arr[i].thumbnail;
            card_image.appendChild(image);
            var cardTitle = document.createElement('div');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = arr[i].title;
            var priceRate = document.createElement('div');
            priceRate.classList.add('price-rate');
            var price = document.createElement('div');
            price.classList.add('price');
            priceRate.appendChild(price);
            var h1 = document.createElement("h1");
            h1.textContent = arr[i].price;
            var remove = document.createElement("button");
            remove.classList.add('removefromcart');
            remove.textContent = "Remove From Cart";
            remove.value = arr[i].id;
            remove.addEventListener("click", function(){
                removeFromCart(this);
            });
            var h2 = document.createElement("h2");
            h2.textContent = Math.round(arr[i].price *(1+arr[i].discountPercentage/100)*100)/100;
            var h3 = document.createElement('h3')
            h3.textContent = "FREE Shopping";
            price.append(h1,h2,h3);
            card.append(card_image, cardTitle, priceRate, Pid, remove);
            products.appendChild(card);
            var rating = Math.ceil(arr[i].rating *2)/2;
            rate = document.createElement('div');
            rate.classList.add('rate');
            for(var j=1; j<=5; j++){
                if(rating == 0.5){
                    var x = document.createElement('i');
                    x.classList.add('fa-regular','fa-star-half-stroke');
                    rate.appendChild(x);
                }
                else if(rating >=1){
                    var x = document.createElement('i');
                    x.classList.add('fa-solid', 'fa-star');
                    rate.appendChild(x);
                    
                }
                else{
                    var x = document.createElement('i');
                    x.classList.add('fa-regular', 'fa-star');
                    rate.appendChild(x);
                }
                rating--;

            }
            priceRate.appendChild(rate);
        }
    
    }
    function removeFromCart(el){
        console.log(el.value)
        userCart = JSON.parse(localStorage.getItem('userCartItems')) || [];
        var req = new XMLHttpRequest();
            req.open('GET', 'https://dummyjson.com/products/'+el.value);
            req.send();
            req.onreadystatechange = function get() {
                if (req.readyState == 4 && req.status == 200) {
                    product = JSON.parse(req.responseText);
                    for(var i=0;i<userCart.length; i++)
                    {
                        if(userCart[i].id == product.id){
                            userCart = userCart.filter(item => item.id !== product.id);
                    localStorage.setItem('userCartItems', JSON.stringify(userCart));
                    draw(userCart);
                            break;
                        }
                    }
                    
                    }
                }
                
    }