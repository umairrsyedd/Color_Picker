var colors= generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor= randomColors();
var display=document.getElementById("colordisplay");
var message= document.getElementById("message");
var topColorChange=document.getElementById("colorGame")


colordisplay.textContent=pickedColor;
for(var i=0; i<squares.length;i++){
squares[i].style.backgroundColor=colors[i];
squares[i].addEventListener("click",function(){
    var clickedcolor = this.style.backgroundColor;
    console.log(clickedcolor+ "  " + pickedColor)
    if(clickedcolor===pickedColor)
    {
        message.textContent="Correct";
        changecolors(pickedColor)
        topColorChange.style.background=pickedColor;
    }
    else{
        this.style.backgroundColor= "grey";
        message.textContent="Try Again";
    }
})
}

function changecolors(color){
    for(var i=0 ; i<colors.length; i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function randomColors(){
var number =Math.floor(Math.random() * colors.length) 
return colors[number];
}

function generateRandomColors(num){
var array=[];
for(var i=0; i< num ; i++){
array.push(picker())
}
return array;
}

function picker(){
    let red =Math.floor(Math.random() * 256)
    let green= Math.floor(Math.random() * 256)
    let blue=Math.floor(Math.random() * 256)
    return "rgb(" + red + ", " + green + ", "+ blue + ")"
}