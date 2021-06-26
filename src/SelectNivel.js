class SelectNivel extends Phaser.Scene{
    constructor(){
        super("SelectNivel");
    }
    preload(){
        this.load.image('SelectNivel', './assets/SelectNivel 16-9.png');
    }
    create(){  
        this.add.image(800, 450, 'SelectNivel').setScale(0.25);
        this.ClickSound =this.sound.add("ClickSound")

        var restartButton = this.add.image(400, 550,"sky").setScale(0.08)
        .setInteractive()
        .on("pointerdown",() => this.reiniciar2());
        
        var restartButton = this.add.image(775, 800,"Boton3").setScale(0.25)
        .setInteractive()
        .on("pointerdown",() => this.reiniciar());
        if(nivdesb >= 1){
            var restartButton2 = this.add.image(1200, 550,"sky2").setScale(0.08)
            .setInteractive()
            .on("pointerdown",() => this.reiniciar3());
        }

    }

    reiniciar(){
        this.ClickSound.play()
        this.scene.start("MenúPrin")
    }

    reiniciar2(){
        this.ClickSound.play()
        this.scene.start("scene5")
    }
    reiniciar3(){
        this.ClickSound.play()
        this.scene.start("MenúLvl2")
    }
}