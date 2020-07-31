var exp='',number,decimal,equal,operator,allowSR=true;
var result=document.forms['cf']['result'];

function insertNum(num) {
   if(equal) {
       exp=num;
       result.value=exp;
       number=true;
       equal= false;
   }
    else{
        exp=result.value+num;
       result.value=exp;
       number=true;
    }
    if(operator)decimal=false;
}
function operate(op) {
    result.value=exp+op;
    operator=true;
    equal=false;
    allowSR=false;
}
function insertDec() {
    if(number && !decimal){
    result.value=exp+'.';
    decimal=true;    
    operator=false;
    }
    
    
}
function equalOp(){
    if(exp){
        exp=eval(exp);
        result.value=exp;
        equal=true;
        decimal=false;    
        number=false;
        allowSR=true;
    }
}
function clean() {
    exp=' ';
    result.value=exp;
    decimal=false;
}
function back(){
  exp = result.value;
 exp=exp.substring(0,exp.length -1);
 result.value=exp;    
}
function s2$(){
  result.value=exp*3.5;  
}
function $2s(){
  result.value=exp/ 3.5;  
}
function s2u(){
  result.value=exp*0.25;  
}
function u2s(){
  result.value=exp/ 0.25;  
}