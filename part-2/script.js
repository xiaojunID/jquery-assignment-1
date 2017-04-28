// Do your work in this file.
for(var i=0; i< 196; i++){
    if(i%2){//even number
        $("body").append("<div class='box type-1'></div>");
    }else{//odd number
        $("body").append("<div class='box type-2'></div>");
    }
}

var box = $('.box');

function boxClicked(){
    //toggle class to clicked
   console.log(this);
   $(this).toggleClass("clicked");
}

box.click(boxClicked);
