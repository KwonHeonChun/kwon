const oriPrice = document.querySelector('#price'); //입력박스
const disCount = document.querySelector('#discount'); //입력박스
const caleResult = document.querySelector('#cale'); //버튼
const Result = document.querySelector('#result'); //div


const caleCu= () =>{
     let a = parseFloat(oriPrice.value * disCount.value*0.01);
     let b = parseFloat(oriPrice.value - a); 
     Result.innerHTML= `상품의 원래 가격은 ${oriPrice.value}원 이고 할인율은 ${disCount.value}%입니다. ${a}원을 절약한 ${b}원에 살수 있습니다.`;
}
cale.addEventListener('click', caleCu);