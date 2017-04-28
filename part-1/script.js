// Do your work in this file.
console.log("hello");
 $("body").append("<div class='view'></div>");
 $(".view").append("<div class='grass'></div>");
 $(".view").append("<div class='sun'></div>");

 var n=0;
 var rayNode;
 while(n++ < 5){
    var rayDiv = "<div class='ray-" + n +  "'></div>";
    $(".sun").append(rayDiv);
 }

 $(".view").append("<div class='mountain'></div>");
 $(".mountain").append("<div class='mountain-top'></div>");

 n=0;
 while(n++ < 3){
    var mountainCapDiv = "<div class='mountain-cap-" + n +  "'></div>";
    $(".mountain-top").append(mountainCapDiv);
 }