playGame();



function createPlayer(name, choice) {

    var obj = {

        playerName: name,
        playerChoice: choice,
        playerArray: [],
        win: 0,

        addPlay: function (i, j) {

            const play = round(i, j);

            this.playerArray.push(play);

        }

    };

    return obj;
}

function round(i, j) {
    return {

        i,
        j,
        geto : ()=>{
            let o;
            if(this.i===this.j ){
                o=1;

            }else{
                if(this.i ===1 &&this.j===3 || this.i===3 && this.j===1 ){

                    o= -1;
                }
            }
            return o;
        }
    };
}


function playGame() {

    const player1 = createPlayer("BOB", "O");
    const player2 = createPlayer("JHON", "X");

    let i = 0;

    do {

        let i1 = prompt("donner i1");
        let j1 = prompt("donner j1");
        let i2 = prompt("donner i2");
        let j2 = prompt("donner j2");
        

        playRound(player1, player2, i1, j1, i2, j2);

    } while (player1.win != 1 && player2.win != 1 && i++ < 3)

    if (player1.win === 1) {

        console.log("Player1 wins ");
    } else {
        if (player2.win === 1) {

            console.log("player2 wins");

        } else {
            console.log("its a draw");
        }
    }



}

function playRound(player1, player2, i1, j1, i2, j2) {



    const { getcptcolunm: getcptcolunm1, getcptrow: getcptrow1, getcpto:getcpto1 } = verifyPlayer(player1, i1, j1);




    if (getcptcolunm1 === 2 || getcptrow1 === 2||getcpto1==3 || getcpto1 ===7) {



        player1.win++;


    } else {

        const { getcptcolunm: getcptcolunm2, getcptrow: getcptrow2,getcpto:getcpto2 } = verifyPlayer(player2, i2, j2);



        if (getcptcolunm2 === 2 || getcptrow2 === 2 ||getcpto2==3 || getcpto2===7) {

            player2.win++;


        } else  {
           
            player1.addPlay(i1, j1);

            player2.addPlay(i2, j2);
        }

        console.log("player 2");
        console.log(getcptcolunm2);
        console.log(getcptrow2);
        console.log(getcpto2);

    }

    console.log("player 1");
    console.log(getcptcolunm1);
    console.log(getcptrow1);
    console.log(getcpto1);
   

}

function verifyPlayer(playern, i, j) {



    let getcptcolunm = 0,
        getcptrow = 0,
        getcpto=0;

    if (playern.playerArray.length != 0) {


        for (let k = 0; k < playern.playerArray.length; k++) {





            if (i === playern.playerArray[k].i) {

                getcptcolunm++;

            } else {
                if (j === playern.playerArray[k].j) {

                    getcptrow++;

                }else {

                    if(playern.playerArray[k].geto()===1){

                        getcpto++;

                    }else{

                        if(playern.playerArray[k].geto()===-1){

                            getcpto = getcpto+3;
                        }

                    }
                }
            }

        }

    }

    return { getcptcolunm, getcptrow,getcpto };


}