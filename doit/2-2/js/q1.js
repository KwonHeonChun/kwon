const  num1 = parseInt(prompt('숫자를 입력해주세요'));
const  num2 = parseInt(prompt('숫자를 입력해주세요'));

// function cmpNumber(num){
//     if(num%2==1) 
//         document.write("홀");
//     else
//         document.write('짝');
// }

// cmpNumber(num1);
// cmpNumber(num2);

switch(num1%2){
    case 0: document.write("짝");
    case 1: document.write("홀");   
    default: document.write();
}
switch(num2%2){
    case 0: document.write("짝");
    case 1: document.write("홀");   
    default: document.write();
}

// if(num1%2==1){
//     document.write('홀');
//     if(num2%2==1) 
//     document.write("홀");
//     else
//     document.write('짝');
// }
// else 
// {
//     document.write('홀');
//     if(num2%2==1) 
//         document.write("홀");
//     else
//         document.write('짝');
// }