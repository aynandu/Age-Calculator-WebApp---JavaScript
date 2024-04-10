const userInputDate=document.getElementById("dateip");
const btnCal=document.getElementById("btncal");
const values=document.getElementById("value");

userInputDate.max= new Date().toISOString().split("T")[0];
function calculateAge(){
    values.innerHTML="";
   let birthDate=new Date(userInputDate.value);
   let d1=birthDate.getDate();
   let m1=birthDate.getMonth()+1;
   let y1=birthDate.getFullYear();

   let currentDate= new Date();
   let d2=currentDate.getDate();
   let m2=currentDate.getMonth()+1;
   let y2=currentDate.getFullYear();

   let d3,m3,y3;
   y3=y2-y1;

   if(m1>m2){
    y3--;
    m3=12+m2-m1;
   }else{
    m3=m2-m1;
   }
   if(d1>d2){
    m3--;
    d3=d1-d2;
   }else{
    d3=d2-d1;
   }
  
   let  totalDaysInMonth=getDaysInMonth(y3,m3);

   const display=document.createElement("h4");
   display.innerHTML=`You are ${y3} Years, ${m3} Months, ${d3} days old`;
   display.classList.add("result");
   values.appendChild(display);
   
}

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate(); 
}
btnCal.addEventListener("click",calculateAge);

