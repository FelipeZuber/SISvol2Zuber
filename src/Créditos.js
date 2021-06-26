class Créditos extends Phaser.Scene{
    constructor(){
        super("Créditos");
    }
    preload(){
        this.load.image('Creditos 16-9', './assets/Creditos 16-9.png');
    }
    create(){       
        this.add.image(800, 450, 'Creditos 16-9').setScale(0.25);
        this.ClickSound =this.sound.add("ClickSound")
       
        var restartButton = this.add.image(775, 800,"Boton3").setScale(0.25)
        .setInteractive()
        .on("pointerdown",() => this.reiniciar());

        var restartButton2 = this.add.image(775, 680,"ButtonsBA").setScale(0.06)
        .setInteractive()
        .on("pointerdown",() => this.borrar());
    }
    borrar(){
        this.ClickSound.play()
        localStorage.removeItem('Niv2Unl');
        localStorage.removeItem('oro');
    }

    reiniciar(){
        this.ClickSound.play()
        this.scene.start("MenúPrin")
    }
}

