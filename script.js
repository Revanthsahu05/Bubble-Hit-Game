function makebubble(){
    var clutter="";
for(var i=1;i<=1000;i++){
    var rn=Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter

}
var score=0;
function scoreinc(){
    score+=10;
    document.querySelector("#scoreval").innerHTML=score;
}
makebubble()
var rn;
function newhit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=rn;
}
newhit();
var timer=60;
function runtimer(){
    var t=setInterval(() => {
        timer--;
        if(timer>=0)
       document.querySelector("#timerval").innerHTML=timer 
        else{
            clearInterval(t);
            document.querySelector("#pbtm").innerHTML=`<pre><h1>GAME OVER</h1>
                                                        <h1> SCORE: ${score}</h1></pre>                 </pre>`
        }
    }, 1000);
}
runtimer()
// jispeclick kroge woh particular element pe event raise hoga na milne par uske parents tab bhi nhi toh go on parent
document.querySelector("#pbtm").addEventListener("click",function(dets){
        var click=(Number(dets.target.textContent))
        if(rn==click && timer>0){
            scoreinc();
            newhit();
            makebubble();
        }
})