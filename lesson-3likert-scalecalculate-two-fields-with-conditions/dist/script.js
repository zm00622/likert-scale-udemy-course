function calculate() {

var field1=document.getElementById("num1").value;
var field2=document.getElementById("num2").value;
  
  
 if (field1 < 5.1 && field2 < 5.1 && field1 > 0 && field2 > 0) {
  var result=parseFloat(field1)+parseFloat(field2);
 }

 if(!isNaN(result)) {
  document.getElementById("answer").innerHTML="My score is "+result;
 } else {
  document.getElementById("answer").innerHTML="Something went wrong. Please fill in each text box with a number value ranging from 1 to                                                         5.";
 }
}