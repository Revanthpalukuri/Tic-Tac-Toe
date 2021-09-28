// all html elements
const status1=document.querySelector('.status');
const reset=document.querySelector('.action');
const cellDivs=document.querySelectorAll('.game__cell')

//all game variables
let gameIsAlive=true;
let xIsNext=true;
let winner=null;

//functions
const CheckGameStatus=()=>{
    const top__left=cellDivs[0].classList[2];
    const top__middle=cellDivs[1].classList[2];
    const top__right=cellDivs[2].classList[2];
    const middle__left=cellDivs[3].classList[2];
    const middle__middle=cellDivs[4].classList[2];
    const middle__right=cellDivs[5].classList[2];
    const bottom__left=cellDivs[6].classList[2];
    const bottom__middle=cellDivs[7].classList[2];
    const bottom__right=cellDivs[8].classList[2];
    if(top__left && top__left===top__middle && top__middle===top__right)
    {
        gameIsAlive=false;
        winner=top__left;
        if(top__left==='o') status1.innerHTML=`<span>${top__left} has won </span>`;
        else status1.innerHTML=`${top__left} has won`;
    }
    else if(middle__left && middle__left===middle__middle && middle__middle===middle__right)
    {
        gameIsAlive=false;
        winner=middle__left;
        if(middle__left==='o') status1.innerHTML=`<span>${middle__left} has won </span>`;
        else status1.innerHTML=`${middle__left} has won`;
    }
    else if(bottom__left && bottom__left===bottom__middle && bottom__middle===bottom__right)
    {
        gameIsAlive=false;
        winner=bottom__left;
        if(bottom__left==='o') status1.innerHTML=`<span>${bottom__left} has won </span>`;
        else status1.innerHTML=`${bottom__left} has won`;
    }
    else if(top__left===middle__left && middle__left===bottom__left && top__left )
    {
        gameIsAlive=false;
        winner=top__left;
        if(top__left==='o') status1.innerHTML=`<span>${top__left} has won </span>`;
        else status1.innerHTML=`${top__left} has won`;
    }
    else if(top__middle===middle__middle && middle__middle===bottom__middle && top__middle )
    {
        gameIsAlive=false;
        winner=top__middle;
        if(top__middle==='o') status1.innerHTML=`<span>${top__middle} has won </span>`;
        else status1.innerHTML=`${top__middle} has won`;
    }
    else if(top__right===middle__right && middle__right===bottom__right && top__right )
    {
        gameIsAlive=false;
        winner=top__right;
        if(top__right==='o') status1.innerHTML=`<span>${top__right} has won </span>`;
        else status1.innerHTML=`${top__right} has won`;
    }
    else if(top__left && top__left===middle__middle && middle__middle===bottom__right)
    {
        gameIsAlive=false;
        winner=top__left;
        if(top__left==='o') status1.innerHTML=`<span>${top__left} has won </span>`;
        else status1.innerHTML=`${top__left} has won`;
    }
    else if(top__right && top__right===middle__middle && middle__middle===bottom__left)
    {
        gameIsAlive=false;
        winner=top__right;
        if(top__right==='o') status1.innerHTML=`<span>${top__right} has won </span>`;
        else status1.innerHTML=`${top__right} has won`;
    }
    else if(top__left && top__middle && top__right && middle__middle && middle__right && middle__left && bottom__left && bottom__middle && bottom__right)
    {
        gameIsAlive=false;
        winner=top__right;
        console.log(top__right);
        status1.innerHTML=`Game is a tie`;
    }
    else 
    {
        xIsNext=!xIsNext;
        if(xIsNext===true) status1.innerHTML=`x is next`;
        else status1.innerHTML=`<span> o is next </span>`;
    }
}

//event handlers
const handleReset=(e)=>{
    gameIsAlive=true;
    xIsNext=true;
    status1.innerHTML=`x is next`;
    for(const cellDiv of cellDivs)
    {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
    }
};
const handleClick=(e)=>{
    const location=e.target.classList[1];
    console.log(location);
    if(!gameIsAlive || e.target.classList[2]==='x' || e.target.classList[2]==='o') return;
    if(gameIsAlive){
    if(xIsNext===true)
    {
        e.target.classList.add('x');
        CheckGameStatus();
        xIsNext=false;
    }
    else 
    {
        e.target.classList.add('o');
        CheckGameStatus();
        xIsNext=true;
    }}
}
//event listeners
reset.addEventListener('click',handleReset);
for(const cellDiv of cellDivs){
    cellDiv.addEventListener('click',handleClick);
}