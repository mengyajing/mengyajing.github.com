/**
 * Created by Administrator on 2016/9/30.
 */

window.onload = function () {

    //头部内容
    var lvp = document.getElementById('play_place');
    lvp.onclick = function () {
        lvp.value = '';
    }
    lvp.onblur = function () {
        lvp.value = '马尔代夫';
    }
    var product = document.getElementById('product');
    var xmProduct = document.getElementById('xm_product');
    var jj = document.getElementById('jj');
    product.onmouseover = function () {
        xmProduct.style.display = "block";
        jj.style.transform = "rotateX(180deg)";
    }
    product.onmouseout = function () {
        jj.style.transform = "rotateX(45deg)";
        xmProduct.style.display = "none";
    }
    xmProduct.onmouseover = function () {
        xmProduct.style.display = "block";
    }
    xmProduct.onmouseout = function () {
        //jj.style.transform = "rotateX(180deg)";
        xmProduct.style.display = "none";
    }

//背景轮播
    var facade = document.getElementById("facade");
    var aLink = document.getElementById("aLink");
    var rotation = document.getElementById("rotation");
    var arrowL = document.getElementById("arrow_l");
    var arrowR = document.getElementById("arrow_r");

    //定时器方法
    var flag = 1;
    var t1 = function () {
        if(flag < 7&&flag > 1){
            //console.log(flag);
            facade.style.backgroundImage = "url(images/"+flag+".jpeg)";
            flag++;
        }else{
            flag = 1;
            facade.style.backgroundImage = "url(images/"+flag+".jpeg)";
            flag++;
        }
    }
    //鼠标移到图上停止  移开时开始
    rotation.onmouseover = function () {
        clearInterval(time1);
        arrowL.style.display = "block";
        arrowR.style.display = "block";
    }
    rotation.onmouseout = function () {
        time1 = setInterval(t1,2000);
        arrowL.style.display = "none";
        arrowR.style.display = "none";
    }

    //开始时调用定时器
    var time1 = setInterval(t1,2000);

    //鼠标点击
    arrowL.onmousedown = function () {
        clearInterval(time1);
        if(flag > 1){
            flag--;
        }else{
            flag = 6;
        }
        facade.style.backgroundImage = "url(images/"+flag+".jpeg)";
    }
    arrowR.onmousedown = function () {
        clearInterval(time1);
        if(flag < 6){
            flag++;
        }else{
            flag = 1;
        }
        facade.style.backgroundImage = "url(images/"+flag+".jpeg)";
    }

    /*
     arrowL.onmouseup = function () {
     time1 = setInterval(t1,2000);
     }
     arrowR.onmouseup = function () {
     time1 = setInterval(t1,2000);
     }
     */


    //左侧导航点击
    var icon = document.getElementById('icon');
    var sprite = icon.getElementsByClassName('sprite');
    var iconli = icon.getElementsByTagName('li');
    var contshow = document.getElementById('contshow');
    var divshow = contshow.getElementsByTagName('div');
    //console.log(divshow);
    for(i = 0;i < 7;i++){
        sprite[i].style.backgroundPositionX = -20 * i + "px";
        iconli[i].index = i;
        iconli[i].onmouseover = function(){
            this.style.backgroundColor = "white";
            this.style.color = "green";
            sprite[this.index].style.backgroundPositionY = -23 + "px";
        }
        iconli[i].onmouseout = function(){
            this.style.backgroundColor = "#616368";
            this.style.color = "white";
            sprite[this.index].style.backgroundPositionY = 0;

        }
        iconli[i].onclick = function (event) {
            for(i = 0; i < 7; i++){
                divshow[i].style.display = "none";
            }
            divshow[this.index].style.display = "block";
            if(event && event.stopPropagation){// 一般浏览器

                event.stopPropagation();
            }else { // ie 678

                event.cancelBubble = true;
            }

        }
        //document.onclick = function(){
        //    for(i = 0; i < 7; i++){
        //        divshow[i].style.display = "none";
        //    }
        //}
    }

    //中下部图片导航变化
    var imgSrcs = document.getElementsByClassName("img_src");
    console.log(imgSrcs);
    var imgSrcLength = imgSrcs.length;
    for(var i = 0; i < imgSrcLength;i++){
        imgSrcs[i].onmouseover = function () {
            //console.log(this.parentNode.childNodes);
            var mama = this.parentNode.childNodes;
            for(var j = 0; j < mama.length;j++){
                if(mama[j].nodeType == 1){
                    mama[j].className = "img_src";
                    mama[j].firstChild.style.backgroundPosition = "0, 0";
                }
            }
            this.className = "img_src special";
            //console.log(this.firstChild);
            this.firstChild.style.backgroundPosition = "-100px, 0";
        }
    }


    //banner
    var modMesAll = document.getElementById('mod_mes_all');
    var modMesLis = modMesAll.getElementsByClassName('lis');
    var modHdAll = document.getElementById('mod_hd_all');
    var modHdLis = modHdAll.getElementsByTagName('li');

    for(var i = 0; i < modHdLis.length; i++){
        modHdLis[i].index = i;
        modHdLis[i].onmouseover = function () {
            this.style.color= "#22c231";
            this.style.borderBottom= "3px solid #22c231";
            this.style.fontSize= "18px";
            this.style.fontWeight= "border";
            for(var j = 0; j < modHdLis.length; j++){
                modMesLis[j].style.display = "none";
            }
            console.log(this.index);
            console.log(modMesLis[this.index]);
            modMesLis[this.index].style.display = "block";
        }
        modHdLis[i].onmouseout = function () {
            this.style.color= "black";
            this.style.borderBottom= "3px solid #eceef4";
            this.style.fontSize= "16px";
            this.style.fontWeight= "normal";
        }
    }
    //尾部部分
    var tail = document.getElementById('tail');
    var tailli = tail.getElementsByClassName('ooo');
    for(i = 0; i < 9; i++){
        if(i % 2 == 1){
            tailli[i].style.width = 1 + "px";
            tailli[i].style.height = 200 + "px";
            tailli[i].style.marginTop = 25 + "px";
            tailli[i].style.borderLeftStyle = "dotted";
            tailli[i].style.borderLeftWidth = 1 + "px";
            tailli[i].style.borderLeftColor = "black";
        }else{
            tailli[i].style.width = 200 + "px";
        }
        tailli[0].style.width = 330 + "px";
    }
}
