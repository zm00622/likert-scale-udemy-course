function calculate() {
  var field1=document.getElementById("num1").value;
  var field2=document.getElementById("num2").value;
  
  var result=parseFloat(field1)+parseFloat(field2);
  
  if(!isNaN(result)){
    document.getElementById("answer").innerHTML="The answer is "+result;
  } else {
    document.getElementById("answer").innerHTML="Something went wrong.";
  } 
} 


