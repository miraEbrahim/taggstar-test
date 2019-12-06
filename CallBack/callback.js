/* Please write a function which accepts 2 paramters (a number and a callback function). 

If
 - 1st paramter is an odd number then 2nd parameter (callback function) will paint the odd rows with 'yellow' colour
 - 1st parameter is an even number then the function itself calculate the number to the power of 2 and replace it with "Power me" text
 
 Example: 
 
 play(2);  // Updates table by replacing 'Power me' with 4
 play(3, myCalback); // Updates table by setting backgroud colour of 'Paint me' rows to 'yellow' 

*/


let table = document.getElementById('thetable')
let rows = table.getElementsByTagName('tr');



function play (num, myCalback) {
  
  if ( num % 2 === 0 ){
    for(i = 0; i < rows.length; i++){           
    if(i % 2 != 0){ 
      let powerOfTwo = 2;
       let result = num / ( 1 / powerOfTwo ); 
       rows[i].innerText = result;
      } 
    }
  }
} 
function myCalback(){ 
  
  for(i = 0; i < rows.length; i++){           
      if(i % 2 == 0){ 
        rows[i].className = "odd"; 
      }       
    } 
  } 
play(2);
play(3, myCalback());
