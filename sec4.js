let round = prompt("กี่รอบจัดไป");
let res = "";
var value = 0
    for (let index = 0; index < round; index++) {
        var answer = prompt("หัวหรือก้อยดี");
        if(Math.floor(Math.random()*10)<=4){
            res ="หัว"
        }else{
            res ="ก้อย"
        }
        if(res == answer){
            alert("ตอบถูกยินดีด้วย")
            value++
        }else{
            alert("ตอบผิดเสียใจด้วย")
        }

    }
document.getElementById("result").innerHTML="คุณเล่นไปทั้งหมด "+round+" รอบ <br> คะแนนที่คุณทำได้ " + value