function  createPlayer (name, choice){

    var obj = {

         playerName : name,
         playerChoice : choice ,
         playerArray : [],
         win :0 ,
         
         addPlay : function(i,j){

            const play = round(i,j);
            this.playerArray.push(play);

         }

    };
     
    return obj;
}

function round(i,j){
    return{

        i,
        j
    };
}


function playGame(){

    const player1 = createPlayer("BOB","O");
    const player2= createPlayer("JHON","X");
    let i=0;

    do{
        
        playRound(player1,player2,i1,j1,i2,j2);
    }while (player1.win!=1 && player2.win!=1 && i++<9)
    




}

function playRound( player1,player2,i1,j1,i2,j2 ) {

 
    const {getcptcolunm1,getcptrow1} = verifyPlayer(player1,i1,j1);
    const {getcptcolunm2,getcptrow2} = verifyPlayer(player2,i2,j2);
    
    if(getcptcolunm1 === 2 || getcptrow1 === 2){

         player1.win ++;


    }else{
        if(getcptcolunm2 === 2 || getcptrow2 === 2){

            player2.win++;


        }else{

            player1.addPlay(i1,j1);
            player2.addPlay(i2,j2);
        }

    }

}

function verifyPlayer( playern,i,j){


    let cptcolunm =0,
    cptrow=0;

    if(playern.playerArray!= null){


    for (let k=0; k<playern.playerArray.length ;k++){

        if (i=== playern.playerArray[k].i){

            cptrow++;
        }else{
            if(j===playern.playerArray[k].i){

                cptcolunm++;

            } 
        }

    }

    }
    return{cptcolunm,cptrow};


}