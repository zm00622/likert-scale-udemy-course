var myArr = [];

function spliceData() {
  // get value from the input text
  
  var inputText = document.getElementById('inputText').value;
  var inputText2 = document.getElementById('inputText2').value;
  var inputText3 = document.getElementById('inputText3').value;
  
 // append data to the array
  

  
  myArr.splice(0, 3, inputText, inputText2, inputText3);
  
  
  var sum=0;
  var i = 0;
 
  for (var i=0; i < myArr.length; i++) {
    sum += parseFloat(myArr[i]);
     if (myArr[i] >= 1 && myArr[i]<=5.1) {
       document.getElementById("answer").innerHTML="My score is "+sum;
     } else {    
       document.getElementById("answer").innerHTML="Something went wrong. Please fill in each text box with a number value ranging from 1 to                                                         5.";
       break;        
     }
  }  
} 