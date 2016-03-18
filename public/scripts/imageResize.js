/**
 * Created by holland on 3/16/16.
 */


var img = null;


document.getElementById("upload").onchange = function (e){
    console.log("upload event");

    var canvas = document.getElementById("imageCanvas");
    var ctx = canvas.getContext("2d");
    var reader = new FileReader();
    reader.onload = function(event){
        img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
};

document.getElementById("resize").onclick=function(){

    var canvas = document.getElementById("imageCanvas");
    var ctx = canvas.getContext("2d");
    var percent = document.getElementById("percentInput").value;
    //if(isNumber(percent) && !isNull(img)){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        canvas.width = canvas.width * (percent/100);
        canvas.height = canvas.height * (percent/100);
        ctx.drawImage(img,0,0, canvas.width, canvas.height);
    //}

};







