class scene4 extends Phaser.Scene{
    constructor(){
        super("scene4");
    }
    preload(){
        this.load.image("Ganaste", "./assets/Ganaste.png");
    }
    create(){
        nivdesb= 1
        this.ClickSound =this.sound.add("ClickSound")
        this.cameras.main.setZoom(0.24);
        this.add.image(800, 450, "Ganaste")
        this.setNivel()

    }
    update(){
        if (Nivel == 1){
            var restartButton = this.add.image(-1600, 1800,"Boton2")
            .setInteractive()
            .on("pointerdown",() => this.reiniciar());

            var restartButton = this.add.image(3000, 1800,"Boton3")
            .setInteractive()
            .on("pointerdown",() => this.reiniciar2());

            var restartButton = this.add.image(600, 1800,"Boton4")
            .setInteractive()
            .on("pointerdown",() => this.reiniciar3());       
        }
        else if(Nivel == 2 ){
            var restartButton = this.add.image(-1600, 1800,"Boton2")
            .setInteractive()
            .on("pointerdown",() => this.reiniciar22());

            var restartButton = this.add.image(3000, 1800,"Boton3")
            .setInteractive()
            .on("pointerdown",() => this.reiniciar2V2());
        }

    }

    reiniciar(){
        this.ClickSound.play()
        this.scene.start("scene2")
        nivdesb= 1
        gameOver = false 
        score= 0
        score2= 0
    }
    reiniciar2(){
        this.ClickSound.play()
        this.scene.start("MenúPrin")
        nivdesb= 1
        gameOver = false 
        score= 0
        score2= 0
    }
    reiniciar3(){
        nivdesb= 1
        this.ClickSound.play()
        this.scene.start("MenúLvl2")
        gameOver = false 
        score= 0
        score2= 0
    }
    //LVL2
    reiniciar22(){
        nivdesb= 1
        this.ClickSound.play()
        this.scene.start("Nivel2")
        gameOver = false 
        score= 0
        score2= 0
    }
    reiniciar2V2(){
        nivdesb= 1
        this.ClickSound.play()
        this.scene.start("MenúPrin")
        gameOver = false 
        score= 0
        score2= 0
    }
    setNivel(){
		localStorage.setItem("Niv2Unl",nivdesb);
	}
}