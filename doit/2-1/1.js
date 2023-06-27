const P_1 = document.querySelector("#p1");
const P_2 = document.querySelector("#p2");
const Btn1 = document.querySelector("#btn1");
const Div1 = document.querySelector("#div1");



Btn1.addEventListener("click", () => {
    let newP1 = document.createElement("p");
    let newP2 = document.createElement("p");
      
    let newContent1 = document.createTextNode(`장미꽃`);
    let newContent2 = document.createTextNode(`장미꽃은 빨강색이다.`);

    newP1.appendChild(newContent1);


    newP2.appendChild(newContent2);

    Div1.appendChild(newP1);
    Div1.appendChild(newP2);
    P_1.remove();
    P_2.remove();

});