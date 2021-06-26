class scene5 extends Phaser.Scene{
    constructor(){
        super("scene5");
    }
    preload(){
        this.load.image("MenuLVL", "./assets/MenuLVL.png");
    }
    create(){
        this.ClickSound =this.sound.add("ClickSound")
        Nivel= 1
        var MenuLVL = this.add.image(800, 450,"MenuLVL").setScale(0.24);
        MenuLVL.setInteractive()
        MenuLVL.on("pointerdown",() => this.reiniciar());
    }
    reiniciar(){
        this.ClickSound.play()
        this.scene.start("scene2")
    }
}