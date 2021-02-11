let gacha = prompt("กรุณากรอกตัวเลขที่จะซื้อ");
let corret = Math.floor(Math.random()*1000)
document.getElementById("point").innerHTML = corret;
if(gacha == corret){
    document.getElementById("random").innerHTML = "คุณถูกรางวัลเลข 3 ตัว";
}else{
    document.getElementById("random").innerHTML = "คุณไม่ถูกรางวัลเลข 3 ตัว";
}