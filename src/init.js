const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH, //centramos el juego a la mitad de la ventana del navegador.
        width: 1600, //ancho de la pantalla.
        height: 900, //alto de la pantalla.
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false,
        }
    },
    scene:[scene1, MenúPrin, scene2, scene3, scene4, scene5, Nivel2, MenúLvl2, PerdisteP, SelectNivel, Créditos, Doná]
}
var nivdesb; 
var MuteIcon2;
var MuteIcon1;
var mute= false;
var Nivel= 1;
var player;
var tiempoLogo;
var scale;
var initialTime2;
var BombTime;
var stars;
var starsV2;
var starsV3;
var starsV4;
var stars2;
var stars2V2;
var stars2V3;
var stars2V4;
var stars3;
var platforms;
var cursors;
var score = 0;
var score2 = 0;
var score3 = 0;
var scoreC;
var scoreCV2;
var scoreCV3;
var scoreCV4;
var totalscoreC;
var scoreP;
var scorePV2;
var scorePV3;
var scorePV4;
var totalscoreP;
var gameOver = false;
var scoreText;
var scoreText2;
var scoreText3;
var scoreText4;
var collectStar;
var collectStar2;
var collectStar3;
var Win;
var movingPlatform;
var movingPlatform2;
var movingPlatform3;
var movingPlatform4;
var PerdidaOxig;
var oxigenCount;
var Oxig;
var PlsOxig;
var textoxg;
var Oroicon;
var Oroicon2;
var Oroicon3;
var FondInter1;
var timpoOxg;
var Rectangle;
var group;
var startButton;
var vadiasIcon;
var vadiasIcon2;
var vidas;
var pinchos;
var pinchosF;
var pinchcollider;
var visits;
var oro;
var Niv2Unl;
var bombs;





window.onload = function(){
    game = new Phaser.Game(config)
    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame());
}
var resizeGame = function(){
    let canvas = document.querySelector("canvas");
    const {innerWidth,innerHeight} = window;
    const ratio = innerWidth / innerHeight;
    const gameRatio = game.config.width / game.config.height;
    
    if(ratio < gameRatio){
        canvas.style.width = innerWidth + "px";
        canvas.style.height = innerHeight / gameRatio + "px";
    }
    else{
        canvas.style.width = innerWidth - gameRatio + "px";
        canvas.style.height = innerWidth + "px";
    }
}

