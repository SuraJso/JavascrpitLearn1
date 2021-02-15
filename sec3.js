let amount = prompt("จำนวนสินค้า");
let sum = 0
    for (let i = 0; i < amount; i++) {
        let item_price = prompt("ราคาสินค้าชิ้นที่ : " + (i+1))
        sum = sum + parseInt(item_price)
        document.getElementById('price-list').innerHTML += "ราคาสินค้า " + item_price + " ชิ้นที่ " + (i+1) + "<br>"
    }
    document.getElementById('sum-price').innerHTML = sum
