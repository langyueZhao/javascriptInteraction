var numberInput = document.getElementById("inputNum");
var colorList =["blue","red","yellow","green","gray","white"]



function myF(){
  var inputValue = document.getElementById("txt2").value
  nameInput.innerHTML = inputValue+ "! let me show you your luck color for today"

  console.log(10)
}

function showResult(){
  var index = Math.floor(Math.random()*colorList.length);
  result.innerHTML = "omo it is " + colorList[index];
  reStyle(index);
}

function reStyle(index){
  var elem = document.getElementById('result');
  elem.style.color = colorList[index];
  var main = document.getElementById('title');
  main.style.background = colorList[index];
  var elem1 = document.getElementById('introQuestion');
  elem1.style.color = colorList[index];
}
