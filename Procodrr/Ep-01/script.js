let leftButton = document.querySelector(".btn-01");
let rightButton = document.querySelector(".btn-02");

const bucket01 = document.querySelector(".box-1 h1 span");
const bucket02 = document.querySelector(".box-2 h1 span");

let left = 100;
let right = 0 ;

leftButton.addEventListener("click",()=>{
  if (right>0){
    right--;
    left++;
    bucket01.innerHTML = left;
    bucket02.innerHTML = right ;
  }
})
rightButton.addEventListener("click",()=>{
  if (left>0){
    right++;
    left--;
    bucket02.innerHTML = right;
    bucket01.innerHTML =left;
  }
})