const flowerBtn = document.querySelector("#btn1");
const resultContent = document.querySelector("#content");


function contentgo() {
    let newP = document.createElement("p");
    let textNode=document.createTextNode(`
    장미꽃 

    장미는 꽃말에서 사랑과 열정을 상징하는 꽃으로 알려져 있습니다. 다양한
    색상의 장미가 있지만, 일반적으로 빨간색 장미는 가장 많이 알려져
    있습니다. 빨간색 장미는 진심과 열정, 사랑의 메시지를 전달하는데
    사용됩니다. 또한 장미의 향기는 로맨틱한 분위기를 연상시키며, 아름다움과
    우아함을 상징하기도 합니다.
    `);
    newP.append(textNode);
    document.querySelector("#all").appendChild(newP);
    // resultContent.innerHTML="";
    let newInput = document.createElement("input");
    // let idNode = document.createAttribute("id");
    // idNode.value="btn2";
    // let valueNode = document.createAttribute("value");
    // valueNode="상세 보기 닫기";
    let typeNode = document.createAttribute("type");
    typeNode.value="button";
    newInput.setAttributeNode("typeNode");
    // newInput.setAttributeNode("idNode");
    // newInput.setAttributeNode("valueNode");
    document.querySelector("#all").appendChild(newInput);
}


// function contentgo2() {
//     resultContent.innerHTML="";
// }


flowerBtn.addEventListener('click', contentgo)
// flowerBtn.addEventListener('click', contentgo2)