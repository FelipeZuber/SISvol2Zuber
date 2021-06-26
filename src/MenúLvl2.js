class MenúLvl2 extends Phaser.Scene{
    constructor(){
        super("MenúLvl2");
    }
    preload(){
        this.load.image("MenuLVL 2", "./assets/MenúLVL  2.png");
    }
    create(){
        this.ClickSound =this.sound.add("ClickSound")
        var MenuLVL2 = this.add.image(800, 450,"MenuLVL 2").setScale(0.24);
        MenuLVL2.setInteractive()
        MenuLVL2.on("pointerdown",() => this.restart());
        Nivel=2
    }
    restart(){
        this.ClickSound.play()
        this.scene.start("Nivel2")
    }
}