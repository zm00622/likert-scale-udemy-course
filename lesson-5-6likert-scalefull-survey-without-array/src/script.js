function calculate() {
  
  var field1=document.getElementById("num1").value;
  var field2=document.getElementById("num2").value;
  var field3=document.getElementById("num3").value;
  var field4=document.getElementById("num4").value;
  var field5=document.getElementById("num5").value;
  var field6=document.getElementById("num6").value;
  var field7=document.getElementById("num7").value;
  var field8=document.getElementById("num8").value;
  var field9=document.getElementById("num9").value;
  var field10=document.getElementById("num10").value;
  var field11=document.getElementById("num11").value;
  var field12=document.getElementById("num12").value;
  var field13=document.getElementById("num13").value;
  var field14=document.getElementById("num14").value;
  var field15=document.getElementById("num15").value;
  var field16=document.getElementById("num16").value;
  var field17=document.getElementById("num17").value;
  var field18=document.getElementById("num18").value;
  var field19=document.getElementById("num19").value;
  var field20=document.getElementById("num20").value;
  
  if (field1 < 5.1 && field2 < 5.1 && field3 < 5.1 && field4 < 5.1 && field5 < 5.1 && field6 < 5.1 && field7 < 5.1 && field8 < 5.1 && field9 < 5.1 && field10 < 5.1 && field11 < 5.1 && field12 < 5.1 && field13 < 5.1 && field14 < 5.1 && field15 < 5.1 && field16 < 5.1 && field17 < 5.1 && field18 < 5.1 && field19 < 5.1 && field20 < 5.1) {
 
    if (field1 != 0 && field2 != 0 && field3 != 0 && field4 != 0 && field5 != 0 && field6 != 0 && field7 != 0 && field8 != 0 && field9 != 0 && field10 != 0 && field11 != 0 && field12 != 0 && field13 != 0 && field14 != 0 && field15 != 0 && field16 != 0 && field17 != 0 && field18 != 0 && field19 != 0 && field20 != 0) {
    
     var   result=parseFloat(field1)+parseFloat(field2)+parseFloat(field3)+parseFloat(field4)+parseFloat(field5)+parseFloat(field6)+parseFloat(field7)+parseFloat(field8)+parseFloat(field9)+parseFloat(field10)+parseFloat(field11)+parseFloat(field12)+parseFloat(field13)+parseFloat(field14)+parseFloat(field15)+parseFloat(field16)+parseFloat(field17)+parseFloat(field18)+parseFloat(field19)+parseFloat(field20);
    }
  }
  
  if(!isNaN(result)) {
    document.getElementById("answer").innerHTML="My score is "+result;
  } else {     
      document.getElementById("answer").innerHTML="Something went wrong. Please fill in each text box with a number value ranging from 1 to 5.";
  } 
}
    
