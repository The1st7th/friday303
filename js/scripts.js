var numberlist= [];
var check;
var check2;


function beepboop(n, name) {
numberlist = n.split(",");
var output=[];


for (i = 0; i < numberlist.length; i++){
  check = false;
  check1= false;
  check0=false;
  if ((Number(numberlist[i]))%3==0){
     output.push("sorry " +name +" can't do that");
     check = true; 
  }
  else if( check == false){
  for (j=0; j < numberlist[i].length; j++){
 
    if (numberlist[i][j]== "1"){
     
      check1 = true;
    }
      else if (numberlist[i][j]== "0" && check1== false){
      
          check0 = true;
        }

        } 
        if(check1 == true){
          output.push("beep");
        }else if (check0 == true){
          output.push("boop");
        }
        if (check1 !=true && check0 !=true){
          output.push(numberlist[i]);
  }
  
}
}

return output;
}
 function sort(n) {
   var numbers = n.split(",").map(Number);
   var counter = numbers.length;
   console.log(numbers);
  

   while(counter > 0){
     
     var copy = numbers.slice();
    
     var i = 0;
     for (i=i; i < (numbers.length); i++){
       
       if ( numbers[i] < numbers[i+1]){
         
         numbers[i] = copy[i+1];
         numbers[i+1]=copy[i];
         i = i+1;
       }
     }
     counter = counter - 1; 
   }
   console.log(numbers);
   return numbers;
 }




$(document).ready(function(){
  $("#validation").click(function(){
var n = $("textarea").val();
var name= $("#name").val();
$("#beepboop").text(beepboop(n,name).join(" "));
});

$("#sort").click(function(){
  var n = $("textarea").val();
  $("#sorted").text(sort(n).join(" "));
  });
});
