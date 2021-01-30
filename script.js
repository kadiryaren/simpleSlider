

var image = document.getElementById("image");
var imageArray = ["https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg","https://static.toiimg.com/photo/msid-73070532/73070532.jpg","https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg"];
var index = 0;
/*
if(text == "goBackImage"){
    console.log("1");
    index =  goBackImage(index,imageArray)
    image.src = imageArray[index % imageArray.length];
}
else if(text == "goForwardImage"){
    console.log("2");
    index = goForwardImage(index,imageArray);
    image.src = imageArray[index % imageArray.length];
}
console.log("her index :" + index);
*/
    


function goBackImage(){
    console.log("goback 1 :" + index);
    index = index + imageArray.length - 1;
    console.log("goback2 :" + index);
    image.src = imageArray[index % imageArray.length]
}

function goForwardImage(){
    console.log("forward1 :" + index);
    index = index + 1;
    console.log("forward 2 :" + index);
    image.src = imageArray[index % imageArray.length]
}