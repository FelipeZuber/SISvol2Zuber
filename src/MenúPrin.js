class MenúPrin extends Phaser.Scene{
    constructor(){
        super("MenúPrin");
    }
    preload(){
        this.load.image("MenuLVL", "./assets/MenuLVL.png");
    }
    create(){
        this.setVisit()
        this.setScore()
        this.setNivel()
        this.ClickSound =this.sound.add("ClickSound")
        this.MusicaMenú =this.sound.add("MusicaMenú")
        //this.MusicaMenú.play();
        if(mute==false){
            this.MusicaMenú.play();
        }
        
        this.add.image(800, 450, 'Menu').setScale(0.25);
        
        this.add.image(1330, 600,"Oro").setScale(0.35)

        var restartButton = this.add.image(775, 450,"Boton").setScale(0.25)
        .setInteractive()
        .on("pointerdown",() => this.reiniciar());

        var restartButton = this.add.image(775, 600,"ButtonsSelect").setScale(0.13)
        .setInteractive()
        .on("pointerdown",() => this.SelectMenu());
        
        var restartButton = this.add.image(775, 700,"ButtonsCredit").setScale(0.13)
        .setInteractive()
        .on("pointerdown",() => this.Créditos());

        var restartButton = this.add.image(775, 800,"ButtonsD").setScale(0.13)
        .setInteractive()
        .on("pointerdown",() => this.Doná());  

        var restartButton2 = this.add.image(1500, 50,"MuteIcon1").setScale(0.25)
        .setInteractive()
        .on("pointerdown",() => this.desmutear());
        
        this.visitsTxt = this.add.text(1300,640,"Visitas: "+ visits,{ font: '25px monospace', fill: '#de7e0d'})
        this.visitsTxt = this.add.text(1350,575," "+ oro,{ font: '50px monospace', fill: '#de7e0d'})
        this.visitsTxt = this.add.text(1300,680,"Nivel: "+ nivdesb,{ font: '25px monospace', fill: '#de7e0d'})
        if(mute == false){
            var restartButton1 = this.add.image(1400, 50,"MuteIcon2").setScale(0.25)
            .setInteractive()
            .on("pointerdown",() => this.mutear());            
        }
    }

    reiniciar(){
        this.ClickSound.play()
        this.scene.start("scene5")
        this.MusicaMenú.stop();
        gameOver = false 
    }
    SelectMenu(){
        this.ClickSound.play()
        this.scene.start("SelectNivel")
        this.MusicaMenú.stop();
    }
    Créditos(){
        this.ClickSound.play()
        this.scene.start("Créditos")
        this.MusicaMenú.stop();   
    }
    mutear(){
        mute = true;
        this.MusicaMenú.stop();
    }
    desmutear(){
        mute = false;
        this.MusicaMenú.play();
    }
    Doná(){
        this.ClickSound.play()
        this.scene.start("Doná")
        this.MusicaMenú.stop();
    }
    setVisit(){
		visits = (parseInt(localStorage.getItem('visits')) || 0) + 1;
		localStorage.setItem("visits",visits)
        
	}
	setScore(){
		oro = (parseInt(localStorage.getItem('oro')) || 0)+ score3;
		localStorage.setItem("oro",oro);
	}
    setNivel(){
		nivdesb = parseInt(localStorage.getItem('Niv2Unl')|| 0)
    }
        
}