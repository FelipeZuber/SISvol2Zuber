class PerdisteP extends Phaser.Scene{
    constructor(){
        super("PerdisteP");
    }
    preload(){
        this.load.image("PerdistePinchos", "./assets/PerdistePinchos.png");
    }
    create(){
        this.ClickSound =this.sound.add("ClickSound")
        this.DeadMenúSong =this.sound.add("DeadMenúSong")
        this.DeadMenúSong.play()
        this.DeadMenúSong.setLoop(true)
        
        this.cameras.main.setZoom(0.28);

        this.add.image(800, 450, "PerdistePinchos")



    }
    update(){
        if(Nivel == 1){
            var restartButton = this.add.image(1370, 800,"Boton2")
            .setInteractive()
            .on("pointerdown",() => this.reiniciar());
    
            var restartButton = this.add.image(1370, 1350,"Boton3")
            .setInteractive()
            .on("pointerdown",() => this.reiniciar2());

        }
        else if (Nivel == 2){
            var restartButton = this.add.image(1370, 800,"Boton2")
            .setInteractive()
            .on("pointerdown",() => this.reiniciar22());
    
            var restartButton = this.add.image(1370, 1350,"Boton3")
            .setInteractive()
            .on("pointerdown",() => this.reiniciar2V2());

        }
    }
    reiniciar(){
        this.DeadMenúSong.stop()
        this.ClickSound.play()
        this.scene.start("scene2")
        gameOver = false 
        score= 0
        score2= 0
    }
    reiniciar2(){
        this.DeadMenúSong.stop()
        this.ClickSound.play()
        this.scene.start("MenúPrin")
        gameOver = false 
        score= 0
        score2= 0
    }
    //Nivel 2
    reiniciar22(){
        this.DeadMenúSong.stop()
        this.ClickSound.play()
        this.scene.start("Nivel2")
        gameOver = false 
        score= 0
        score2= 0
    }
    reiniciar2V2(){
        this.DeadMenúSong.stop()
        this.ClickSound.play()
        this.scene.start("MenúPrin")
        gameOver = false 
        score= 0
        score2= 0
    }
}