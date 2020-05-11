//GLOBAL VARIABLES
tds=document.querySelectorAll("td")
var ele="O";
var finished=false;


//Clear All Blocks
function cleared(){
    var tds=document.querySelectorAll("td")
    for(var i of tds){
        i.textContent="";
        i.style.fontWeight='normal';
        finished=false;
    }
}


//Change Marker
function changeMarker(){
    if(this.textContent!="" || finished){
        return;
    }
    else if(ele=="O"){
        this.textContent='X';
        ele="X";
    }
    else{
        this.textContent='O';
        ele="O";
    }
    winner_check(tds);
    draw_check(tds);
}

function draw_check(tds){
    var flg=0;
    for(var i of tds){
        if(i.textContent==='')
            flg=1;
    }
    if(flg===0){
        finished=true;
    }
}

function winner_check(tds){
    var horWin=true;
    var vertWin=true;
    var diagWin=true;
    var diagWin2=true;
    for(var i=0;i<3;i++){
        horWin=true;
        vertWin=true;
        for(var j=0;j<3;j++){
            if(tds[3*i].textContent!=tds[3*i+j].textContent || tds[3*i+j].textContent==""){
                horWin=false;
            }
            if(tds[i%3].textContent!=tds[3*j+i].textContent || tds[3*j+i].textContent==""){
                vertWin=false;
            }
        }
        if(horWin===true){
            for(var j=0;j<3;j++){
                tds[3*i+j].style.fontWeight='bold';
            }
            finished=true;
            return;
        }
        if(vertWin===true){
            for(var j=0;j<3;j++){
                tds[3*j+i].style.fontWeight='bold';
            }
            finished=true;
            return;
        }
    }
    for(var i=1;i<3;i++)
    {   
        if(tds[4*i].textContent!=tds[4*i-4].textContent || tds[4*i].textContent=='' || tds[4*i-4].textContent==''){
            diagWin=false;
        }
        if(tds[2*i+2].textContent!=tds[2*i].textContent || tds[2*i+2].textContent=='' || tds[2*i].textContent==''){
            diagWin2=false;
        }
    }
    if(diagWin){
        for(var j=0;j<3;j++){
            tds[4*j].style.fontWeight='bold';
        } 
        finished=true;
    }
    else if(diagWin2){
        for(var j=0;j<3;j++){
            tds[2*j+2].style.fontWeight='bold';
        } 
        finished=true;
    }
}


//MAIN
var but=document.getElementById('b');
but.addEventListener("click",cleared);
for(var i=0;i<tds.length;i++){
        tds[i].addEventListener("click",changeMarker);
}