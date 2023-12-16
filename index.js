function player1(){
    var p1=Math.floor(Math.random()*5) + 1;
    return p1;
    }
    function player2(){
        var p2=Math.floor(Math.random()*5)+ 1;
        return p2;
    }
    for(let i=1;;i++){
        if((player1()==1) && (player2()==1)){
        document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
        document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
        document.querySelector("h1").innerHTML="DRAW !";
        
        }
        else if(player1()==1 && player2()==2){
            document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
       
           else if(player1()==1 && player2()==3){
            document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==1 && player2()==4){
            document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==1 && player2()==5){
            document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==1 && player2()==6){
            document.querySelector("img.img1").setAttribute("src","./images/dice1.png");
        document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
        document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==2 && player2()==1){
            document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==2 && player2()==2){
            document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
        document.querySelector("h1").innerHTML="DRAW !";
    }
        else if(player1()==2 && player2()==3){
            document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==2 && player2()==4){
            document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==2 && player2()==5){
            document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==2 && player2()==6){
            document.querySelector("img.img1").setAttribute("src","./images/dice2.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==3 && player2()==1){
            document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==3 && player2()==2){
            document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==3 && player2()==3){
            document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
            document.querySelector("h1").innerHTML="DRAW !";
        }
        else if(player1()==3 && player2()==4){
            document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==3 && player2()==5){
            document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==3 && player2()==6){
            document.querySelector("img.img1").setAttribute("src","./images/dice3.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==4 && player2()==1){
            document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
        }document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        else if(player1()==4 && player2()==2){
            document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==4 && player2()==3){
            document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==4 && player2()==4){
            document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
            document.querySelector("h1").innerHTML="DRAW !";
        }
        else if(player1()==4 && player2()==5){
            document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==4 && player2()==6){
            document.querySelector("img.img1").setAttribute("src","./images/dice4.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==5 && player2()==1){
            document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==5 && player2()==2){
            document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==5 && player2()==3){
            document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==5 && player2()==4){
            document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==5 && player2()==5){
            document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
            document.querySelector("h1").innerHTML="DRAW !";
        }
        else if(player1()==5 && player2()==6){
            document.querySelector("img.img1").setAttribute("src","./images/dice5.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
            document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
        }
        else if(player1()==6 && player2()==1){
            document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice1.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==6 && player2()==2){
            document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice2.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==6 && player2()==3){
            document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice3.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==6 && player2()==4){
            document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice4.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==6 && player2()==5){
            document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice5.png");
            document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
        }
        else if(player1()==6 && player2()==6){
            document.querySelector("img.img1").setAttribute("src","./images/dice6.png");
            document.querySelector("img.img2").setAttribute("src","./images/dice6.png");
            document.querySelector("h1").innerHTML="DRAW !";
        }
        
    
    
    }