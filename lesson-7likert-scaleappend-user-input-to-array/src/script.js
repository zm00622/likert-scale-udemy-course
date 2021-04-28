// create an array

var myArr = [];

function pushData() {
  
  // get value from the input text
  
  var inputText = document.getElementById('inputText').value;
  var inputText2 = document.getElementById('inputText').value;
  
 // append data to the array
  
  myArr.push(inputText);
  myArr.push(inputText2);
  
  var pval = "";
  
  for(i = 0; i < myArr.length; i++) {
    pval = pval + myArr[i] + "<br/>";
  }
  
  // display array data
  
  document.getElementById('pText').innerHTML = pval;
}