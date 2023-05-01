let BGmusic=new Audio("BGmusic.mp3") 
let Csound=new Audio("ClickSound.mp3")
let turn ="X"
let gameover=false
let sound=false;
// fuction to change the turn
const change=()=>
{
  return turn=="X"?"0":"X"
}
// check the winner
const CheckWin=()=>{
  let textBox= document.getElementsByClassName('boxtext');
  let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  win.forEach(e=>{
    if(textBox[e[0]].innerText===textBox[e[1]].innerText && textBox[e[2]].innerText===textBox[e[1]].innerText && textBox[e[0]].innerText!=='' ){
      document.querySelector('.info').innerText=" The Winer of the game is " + textBox[e[0]].innerText;
      gameover=true;
      document.querySelector('.image').getElementsByTagName('img')[0].style.width="200px"
    }
  })
} 
//Game logic
// BGmusic.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>  {
    let textBox=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
      Csound.play();//sound of click
      //if the element is emplty
      if(textBox.innerText===''){
        textBox.innerText=turn;
        turn =change();
        // BGmusic.play(); 
        CheckWin();
        if(!gameover){
          document.getElementsByClassName("info")[0].innerText="Now the turn of " + turn;
        }
      }
    })
})

//adding reset 
reset.addEventListener('click',()=>{
  let boxText=document.querySelectorAll('.boxtext');
  Array.from(boxText ).forEach(e=>{
    e.innerText='';
    turn="X"
    gameover=false;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width="0px"
    document.getElementsByClassName("info")[0].innerText="Now the turn of " + turn;
  })
})
//play BGmusic
playBG.addEventListener('click',()=>{
      if(sound==false){
        BGmusic.play();
        sound=true;
        document.getElementsByClassName("BG")[0].innerText="Stop the music"
      }else{
        BGmusic.pause();
        sound=false;
        document.getElementsByClassName("BG")[0].innerText="Start the music"
      }
})