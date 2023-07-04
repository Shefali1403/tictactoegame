console.log("hello");
let turn="X";
let gameover=false;
const changeturn=()=>{
    return turn=== "X"?"0":"X";
}
//win logic
const checkWin=()=>{
    let insidetext=document.getElementsByClassName("insidetext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        
    ]
    wins.forEach(e=>{
        if((insidetext[e[0]].innerText===insidetext[e[1]].innerText) && (insidetext[e[2]].innerText===insidetext[e[1]].innerText) && (insidetext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText= insidetext[e[0]].innerText + " Won";
            gameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="120px";
        }
    })

}
//click logic
let item= document.getElementsByClassName("box");
Array.from(item).forEach((element)=>{
    let insidetext=element.querySelector('.insidetext');
     element.addEventListener('click',()=>{
        if(insidetext.innerText===''){
       insidetext.innerText=turn;
       turn=changeturn();
       checkWin();
       if(!gameover){
       document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
       }
        }

    })
})
let button=document.getElementById('but');
button.addEventListener('click',()=>{
    let insidetext=document.querySelectorAll('.insidetext');
       Array.from(insidetext).forEach(elem=>{
           elem.innerText="";
       });
       turn="X";
       gameover=false;
       document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
       document.getElementsByClassName("info")[0].innerText="Turn for " + turn;


})