var colors= generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor= randomColors();
var display=document.getElementById("colordisplay");
var message= document.getElementById("message");
var topColorChange=document.getElementById("colorGame")
var resetButton=document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var numberOfSquares=6;
easyButton.addEventListener("click",function(){
    easyButton.classList.add("selected")
    hardButton.classList.remove("selected")
    numberOfSquares=3;
    colors=generateRandomColors(numberOfSquares);
    pickedColor=randomColors();
    colordisplay.textContent= pickedColor;
    for(var i=0 ;i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }

});
hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected")
    easyButton.classList.remove("selected")
    numberOfSquares=6;
    colors=generateRandomColors(numberOfSquares);
    pickedColor=randomColors();
    colordisplay.textContent= pickedColor;
    for(var i=0 ;i<squares.length; i++){
        
            squares[i].style.background = colors[i];
            squares[i].style.display="block"
    }
})
resetButton.addEventListener("click",function(){
    colors=generateRandomColors(numberOfSquares);
    pickedColor= randomColors();
    display.textContent= pickedColor;
    for(var i=0;i <squares.length ;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
    document.querySelector("#colorGame").style.backgroundColor="grey";
} )

colordisplay.textContent=pickedColor;
for(var i=0; i<squares.length;i++){
squares[i].style.backgroundColor=colors[i];
squares[i].addEventListener("click",function(){
    var clickedcolor = this.style.backgroundColor;
    if(clickedcolor===pickedColor)
    {
        message.textContent="Correct";
        changecolors(pickedColor)
        topColorChange.style.background=pickedColor;
        resetButton.textContent= "Play Again ?"
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