const container = document.querySelector("#container");
const pics = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
container.style.backgroundImage = `url(img/${pics[0]})`;


const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach(arrow => {
    arrow.addEventListener("click", (e) =>{
        if(e.target.id ==="left"){
            i--;
            if(i<0){
                i = pics.length -1;
            }
        }
        else if(e.target.id ==="right"){
            i++;
            if(i>=pics.length){
                i=0;
            }
        }
        container.style.backgroundImage = `url(img/${pics[i]})`;
    });

});