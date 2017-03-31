// JavaScript Document
function change_bg(obj){    //导航条背景色块固定
    var a=document.getElementById("Menu").getElementsByTagName("a");
    for(var i=0;i<a.length;i++){
        a[i].className="";
    }
    obj.className="current";
}


function visible(thisimg,i){  //鼠标悬停图片改变透明度
    if(i==0){
        thisimg.style.opacity="1";
    }
    else{
        thisimg.style.opacity="0.7";
    }
}


function ClearValue() {    //清空文本
    var txt = document.getElementById("txtinput");
    if (txt.value == "在结果中查找") {
        document.getElementById("txtinput").value = "";
        txt.style.color = "";
    }
}
function WriteValue() {   //设置默认值
    var txt = document.getElementById("txtinput");
    if (txt.value == "") {
        txt.value = "在结果中查找";
        txt.style.color = "gray";
    }
}