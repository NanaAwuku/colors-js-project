const colors = ['green', 'red', 'rgba(133, 122, 200', '#f15025'];
const clickButton = document.querySelector('.btn');
const color = document.querySelector('.color');


const changeColors =()=>{
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
    // return Math.floor(Math.random()*colors.length);
}



//eventListners
clickButton.addEventListener('click', changeColors);
