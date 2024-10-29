const player1 = createPlayer("BOB", "X");
const player2 = createPlayer("JHON", "o");

const boxes = document.querySelectorAll(".box");
let i = 0;
let turn = 0;


boxes.forEach(function (box) {


    box.addEventListener("click", function () {


        if (i + 1 < 6 && player1.win != 1 && player2.win != 1) {


            const pic = document.createElement("img");
            var value = this.dataset.value;


            if (!this.querySelector('img')) {

                this.appendChild(pic);
            }

            if (turn % 2 === 0) {



                player1.roundplay = parseInt(value);



                pic.src = player1.addPic();


            } else {

                pic.src = player2.addPic();

                player2.roundplay = parseInt(value);



                playRound(player1, player2);

                playGame();




            }


            turn++;

           

        }

    });
});





function createPlayer(name, choice) {

    var obj = {

        playerName: name,
        playerChoice: choice,
        playerArray: [],
        roundplay: 0,
        win: 0,

        addPlay: function (i, j) {

            const play = round(i, j);

            this.playerArray.push(play);

        },

        addPic: function () {
            let pic;

            if (this.playerChoice === "X") {

                pic = "images/cross (2).png"

            } else {
                pic = "images/moon-hand-drawn-circle.png"
            }
            return pic;
        }

    };

    return obj;
}

function round(i, j) {
    return {

        i,
        j
    };
}


function playGame() {

    if (player1.win === 1) {

        alert("Player1 wins ");
    } else {
        if (player2.win === 1) {

            alert("player2 wins");

        } else {

            if (i + 1 > 5) { alert("it's a draw"); } else {
                return 0;
            }

        }


    }

}

function playRound(player1, player2) {


    i++;

    let i1 = parseInt(player1.roundplay / 10);
    let j1 = player1.roundplay % 10;



    let i2 = parseInt(player2.roundplay / 10);
    let j2 = player2.roundplay % 10;


    const { getcptcolunm: getcptcolunm1, getcptrow: getcptrow1, o: geto1 } = verifyPlayer(player1, i1, j1);
    const { getcptcolunm: getcptcolunm2, getcptrow: getcptrow2, o: geto2 } = verifyPlayer(player2, i2, j2);


    console.log("player 1");
    console.log(getcptcolunm1);
    console.log(getcptrow1);
    console.log(geto1);



    if (getcptcolunm1 === 2 || getcptrow1 === 2 || geto1 === 2 || geto1 === 3) {



        player1.win++;

        console.log("win1")

        console.log(player1.win);


    } else {


        if (getcptcolunm2 === 2 || getcptrow2 === 2 || geto2 === 2 || geto2 === 3) {

            player2.win++;
            console.log("win2")
            console.log(player2.win);


        } else {

            player1.addPlay(i1, j1);

            player2.addPlay(i2, j2);
        }


        console.log("player 2");
        console.log(getcptcolunm2);
        console.log(getcptrow2);
        console.log(geto2);

    }

}

function verifyPlayer(playern, i, j) {

    let getcptcolunm = 0, getcptrow = 0, o = 0;

    if (playern.playerArray.length != 0) {


        for (let k = 0; k < playern.playerArray.length; k++) {

            if ((i === j) && (playern.playerArray[k].i === playern.playerArray[k].j)) {

                o++;

            }



            if ((i + j === 4) && (parseInt(playern.playerArray[k].i) + parseInt(playern.playerArray[k].j) === 4)) {

                o++;
            }


            if (i === playern.playerArray[k].i) {

                getcptcolunm++;



            }

            if (j === playern.playerArray[k].j) {

                getcptrow++;


            }


        }

    }

    return { getcptcolunm, getcptrow, o };


}