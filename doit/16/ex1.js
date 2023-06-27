// let nums = [1,2,3];
// let chars = ["a", "b","c","d"];

// let numsChars = nums.concat(chars);
// let charsNums = chars.concat(nums);
// document.write("nums에 chars 합치면:" , numsChars, "<br> chars에 nums를 합치면", charsNums);


// let nums =[1,2,3];
// let ret1 = nums.push(4,5);
// document.write("length : ", ret1, "| 배열", nums);
// document.write("<br>");
// let ret2 =  nums.unshift(0);
// document.write("length : ", ret2, "| 배열", nums);


// let nums =[1,2,3,4,5];
// let nnums = nums.splice(2);
// document.write(nums);
// document.write("<br>");
// document.write(nnums);

const addItem = document.querySelector('#items'); //버튼
const tripResult = document.querySelector('#trip'); //입력박스
const addDiv = document.querySelector('#trip2'); //div
let arrItems = new Array();
let i = 0;
// let btnRemove = "#remove_" + i;
// const removeItem_ = document.querySelector(#i);

const onaddItem = () =>{
    arrItems.push(tripResult.value);
    console.log(arrItems, i);
    addDiv.innerHTML += tripResult.value + "<input type=button id=remove_" + i + " value=x> <br>";
    tripResult.focus();
    tripResult.value = "";
    i++;
}
// tripResult.innerHTML = "a";
// tripResult.innerHTML = `추가한 준비물<input type="button" value="삭제" id="rmItem_" ${i} <br>`;
// const onRemoveItem =(i)=>{
    
// }
// removeItem_.addEventListener('click',onRemoveItem);
addItem.addEventListener('click', onaddItem);