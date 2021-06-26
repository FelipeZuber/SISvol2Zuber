class Doná extends Phaser.Scene{
    constructor(){
        super("Doná");
    }
    preload(){
    }
    create(){       
        this.add.image(800, 450, 'Doná').setScale(0.25);
        this.ClickSound =this.sound.add("ClickSound")
       
        var restartButton = this.add.image(775, 835,"Boton3").setScale(0.25)
        .setInteractive()
        .on("pointerdown",() => this.reiniciar());
    }
    
    reiniciar(){
        this.ClickSound.play()
        this.scene.start("MenúPrin")
    }
}