//Set products name
function setProductName(count, productName) {
    const boughtProductContainer = document.querySelector("#boughtProductList");
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "font-medium text-xl mb-3");
    listItem.innerHTML = `${count}. ${productName}`;
    boughtProductContainer.append(listItem);
}


//Set product price
function setProductPrice(productPrice) {
    const priceInFloat = productPrice.toFixed(2);
    document.querySelector("#totalPriceDisplay").innerText = priceInFloat + " TK";
    document.querySelector("#totalDisplay").innerText = priceInFloat + " TK";
}




//Product onclick handler
let count = 0;
let price = 0;

function calculatePriceAndDiscount(clickedElement) {
    count++;
    const productName = clickedElement.childNodes[3].childNodes[7].innerText;

    //Set product name
    setProductName(count, productName);

    // Calculate productPrice
    const productPrice = parseFloat(clickedElement.childNodes[3].childNodes[11].innerText.split(" ")[0]);
    price += productPrice;

    if (price > 0) {
        document.querySelector("#purchaseButton").removeAttribute("disabled");
    }

    //Set product price
    setProductPrice(price);

    if (price >= 200) {
        document.querySelector("#couponApplyButton").removeAttribute("disabled");
    }



    //Calculate discount and apply coupon
    document.querySelector("#couponApplyButton").addEventListener("click", function () {
        const coupon = document.querySelector("#couponField").value;
        if (coupon !== "SELL20") {
            alert("Invalid or expired coupon code!");
        } else {
            const discountedAmount = price * 0.2;
            const discountedAmountInFloat = discountedAmount.toFixed(2);
            document.querySelector("#discountDisplay").innerText = discountedAmountInFloat + " TK";
            const priceAfterDiscount = price - discountedAmount;
            const priceAfterDiscountInFloat = priceAfterDiscount.toFixed(2);
            document.querySelector("#totalDisplay").innerText = priceAfterDiscountInFloat + " TK";
        }
    })
}



//Redirect to home
document.querySelector("#homeButton").addEventListener("click", function () {
    window.location.reload();
});













