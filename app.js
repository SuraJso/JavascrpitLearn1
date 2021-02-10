let age = prompt("กรุณากรอกอายุ");
if (age > 13) {
    console.log("อนุญาติ");
    document.getElementById("examPle").innerHTML ="<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/nf4w7_dXebg\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
} else {
    console.log("ไม่อนุญาติ")
}