function Search() {
    var hb = document.getElementById("hb");
    var hb_2 = document.getElementById("hb_2");
    var btn_color =document.getElementById("btn_color");
    
    if (hb.style.opacity == "1") {
        hb.style.opacity = "0";
        btn_color.style.color = "#666666"
        hb_2.style.opacity = "1";
    }else{
        hb.style.opacity = "1";
        btn_color.style.color = "#0056c1"

        hb_2.style.opacity = "0";
    }
    if(hb_2.style.opacity =="0"){
        hb_2.style.display = "none";

    }else{
        hb_2.style.display = "inline";

    }
}
function Language() {
    var lg = document.querySelector(".language");
    var down = document.getElementById("Down")
    if (lg.style.opacity == 0) {
        lg.style.opacity = "1";
        down.style.transform = "rotate(180deg)";
        lg.style.display = "block"
        
    }else{
        lg.style.opacity = "0";
        down.style.transform = "rotate(0deg)";
        lg.style.display = "none"
    }
}