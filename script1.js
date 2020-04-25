
function myFunc() {


  document.getElementById("pm1").onclick= function myFunc1(){
  document.getElementById("pm1").innerHTML= "21";
  document.getElementById("pm1").disabled = true;
  
  document.getElementById("pm2").onclick= function myFunc2(){
  document.getElementById("pm2").innerHTML= "22";
  document.getElementById("pm2").disabled = true;

  document.getElementById("pm3").onclick = function myFunc3(){
  document.getElementById('pm3').innerHTML= "23";
  document.getElementById("pm3").disabled = true;

  document.getElementById("pm4").onclick = function myFunc4(){
  document.getElementById('pm4').innerHTML= "24";
  document.getElementById("pm4").disabled = true;

  document.getElementById("pm5").onclick = function myFunc5(){
  document.getElementById("pm5").innerHTML= "25";
  document.getElementById("pm5").disabled = true;

  document.getElementById("pm6").onclick = function myFunc6(){     
  document.getElementById("pm6").innerHTML= "26";
  document.getElementById("pm6").disabled = true;

  document.getElementById("pm7").onclick = function myFunc7(){
  document.getElementById("pm7").innerHTML= "27"; 
  document.getElementById("pm7").disabled = true;

  document.getElementById("pm8").onclick = function myFunc8(){
  document.getElementById("pm8").innerHTML= "28";
  document.getElementById("pm8").disabled = true;

  document.getElementById("pm9").onclick = function myFunc9(){     
  document.getElementById("pm9").innerHTML= "29";
  document.getElementById("pm9").disabled = true;

  document.getElementById("pm10").onclick = function myFunc10(){
  document.getElementById("pm10").innerHTML= "30"; 
  document.getElementById("pm10").disabled = true;

  document.getElementById("pm11").onclick = function myFunc11(){
  document.getElementById("pm11").innerHTML= "31";
  document.getElementById("pm11").disabled = true;
  
  document.getElementById("pm12").onclick= function myFunc12(){
  document.getElementById("pm12").innerHTML= "32";
  document.getElementById("pm12").disabled = true;

  document.getElementById("pm13").onclick = function myFunc13(){
  document.getElementById('pm13').innerHTML= "33";
  document.getElementById("pm13").disabled = true;

  document.getElementById("pm14").onclick = function myFunc14(){
  document.getElementById('pm14').innerHTML= "34";
  document.getElementById("pm14").disabled = true;

  document.getElementById("pm15").onclick = function myFunc15(){
  document.getElementById("pm15").innerHTML= "35";
  document.getElementById("pm15").disabled = true;

  document.getElementById("pm16").onclick = function myFunc16(){     
  document.getElementById("pm16").innerHTML= "36";
  document.getElementById("pm16").disabled = true;

  document.getElementById("pm17").onclick = function myFunc17(){
  document.getElementById("pm17").innerHTML= "37"; 
  document.getElementById("pm17").disabled = true;

  document.getElementById("pm18").onclick = function myFunc18(){
  document.getElementById("pm18").innerHTML= "38";
  document.getElementById("pm18").disabled = true;

  document.getElementById("pm19").onclick = function myFunc19(){     
  document.getElementById("pm19").innerHTML= "39";
  document.getElementById("pm19").disabled = true;

  document.getElementById("pm20").onclick = function myFunc20(){
  document.getElementById("pm20").innerHTML= "40"; 
  document.getElementById("pm20").disabled = true;
  
  document.getElementById("pm1").disabled= false;
  document.getElementById("pm1").onclick = function myFunc21(){
  document.getElementById("pm1").innerHTML = " ";

  document.getElementById("pm2").disabled= false;
  document.getElementById("pm2").onclick = function myFunc22(){
  document.getElementById("pm2").innerHTML= " ";

  document.getElementById("pm3").disabled= false;
  document.getElementById("pm3").onclick = function myFunc23(){
  document.getElementById("pm3").innerHTML= " ";
 
  document.getElementById("pm4").disabled= false;
  document.getElementById("pm4").onclick = function myFunc24(){
  document.getElementById("pm4").innerHTML= " ";

  document.getElementById("pm5").disabled= false;
  document.getElementById("pm5").onclick = function myFunc25(){
  document.getElementById("pm5").innerHTML= " ";

  document.getElementById("pm6").disabled= false;
  document.getElementById("pm6").onclick = function myFunc26(){
  document.getElementById("pm6").innerHTML= " ";

  document.getElementById("pm7").disabled= false;
  document.getElementById("pm7").onclick = function myFunc27(){
  document.getElementById("pm7").innerHTML= " ";

  document.getElementById("pm8").disabled= false;
  document.getElementById("pm8").onclick = function myFunc28(){
  document.getElementById("pm8").innerHTML= " ";

  document.getElementById("pm9").disabled= false;
  document.getElementById("pm9").onclick = function myFunc29(){
  document.getElementById("pm9").innerHTML= " ";

  document.getElementById("pm10").disabled= false;
  document.getElementById("pm10").onclick = function myFunc30(){
  document.getElementById("pm10").innerHTML= " ";

  document.getElementById("pm11").disabled= false;
  document.getElementById("pm11").onclick = function myFunc31(){
  document.getElementById("pm11").innerHTML= " ";

  document.getElementById("pm12").disabled= false;
  document.getElementById("pm12").onclick = function myFunc32(){
  document.getElementById("pm12").innerHTML= " ";

  document.getElementById("pm13").disabled= false;
  document.getElementById("pm13").onclick = function myFunc33(){
  document.getElementById("pm13").innerHTML= " ";

  document.getElementById("pm14").disabled= false;
  document.getElementById("pm14").onclick = function myFunc34(){
  document.getElementById("pm14").innerHTML= " ";

  document.getElementById("pm15").disabled= false;
  document.getElementById("pm15").onclick = function myFunc35(){
  document.getElementById("pm15").innerHTML= " ";

  document.getElementById("pm16").disabled= false;
  document.getElementById("pm16").onclick = function myFunc36(){
  document.getElementById("pm16").innerHTML= " ";
  
  document.getElementById("pm17").disabled= false;
  document.getElementById("pm17").onclick = function myFunc37(){
  document.getElementById("pm17").innerHTML= " ";

  document.getElementById("pm18").disabled= false;
  document.getElementById("pm18").onclick = function myFunc38(){
  document.getElementById("pm18").innerHTML= " ";

  document.getElementById("pm19").disabled= false;
  document.getElementById("pm19").onclick = function myFunc39(){
  document.getElementById("pm19").innerHTML= " ";

  document.getElementById("pm20").disabled= false;
  document.getElementById("pm20").onclick = function myFunc40(){
  document.getElementById("pm20").innerHTML= " ";
  clearTimeout(t);
  if(ms<0){
    document.getElementById('best').innerHTML= "Best Score:" + s+ ":"+ "0" + ms;}
  else{
    document.getElementById('best').innerHTML= "Best Score:" + s+ ":"+ ms;}

  localStorage.setItem('testObject', JSON.stringify(t));

  var retrievedObject = localStorage.getItem('testObject');

  console.log('High Score: ', JSON.parse(retrievedObject));

}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}


var stopWatch;
var s =0;
  var ms =0;
  var t;
  let count = 0;
        function startTime() {
      if(ms>98){
        ms=0  
	s++                   
      }else{
          ms+=1}
 
  if(ms<10){
    document.getElementById('display').innerHTML=  "Time:" + s + ":" + "0" + ms;}
  else{
    document.getElementById('display').innerHTML=  "Time:"+s+":"+  ms;}

    t = setTimeout(startTime, 7); 

}



  

  
