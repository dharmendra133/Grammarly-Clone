const charValue=document.getElementById("textarea");
let totalCount=document.getElementById("total-counter");
let remainingCount=document.getElementById("remaining-counter");
let userChar=0;
const updateCounter=()=>{
    // alert("hello");
    userChar=charValue.value.length;
    totalCount.innerText=userChar;
    remainingCount.innerText=150-userChar;
    alert(char);
};

charValue.addEventListener("keyup",()=>updateCounter());

//copying text function code
const copyText=()=>{
    charValue.select();
    charValue.setSelectionRange(0,999);  //for mobile version
    navigator.clipboard.writeText(charValue.value);

};