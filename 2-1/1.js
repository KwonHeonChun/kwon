const number = parseInt(prompt("몇명이 게임을 하실건가요?"));

const $input1 = document.querySelector("#input1");
const $button1 = document.querySelector("#button1");
const $span1 = document.querySelector("#span1");
const $span2 = document.querySelector("#span2");

let word;
let newWord;
let items = new Array();

const cntHuman = () =>{
    if(parseInt($span1.textContent)>=number) {
        $span1.textContent =  1;
    }
    else {
        $span1.textContent = parseInt($span1.textContent) + 1;
    }

};
const arrPush = (word)=> {3
    items.push(word);
    let copyItems = items.slice();
    let temp="";
    copyItems.forEach((element) => {
         temp += element + " -> ";
        console.log(element);            
    });
    $span2.textContent = temp;

}; 
const onClickButton = () => {
    newWord = $input1.value;
    console.log(items.includes(newWord));
    if($input1.value.length !=3 || items.includes(newWord) ){
        alert("올바르지않다.");
    }
    else {
        if(!word){
            word = newWord;
            arrPush(word);        
            cntHuman();
        }
        else{
            if(word[word.length-1]===newWord[0]){
                word = newWord;
                arrPush(word);        
                cntHuman();
            }
            else {
                alert("올바르지않다");
            }
        }
    }
    $input1.value="";
    $input1.focus();
};

const onInput = (event) => {
    console.log('글자입력', event.target.value);
};

$button1.addEventListener("click", onClickButton);
$input1.addEventListener('input', onInput);