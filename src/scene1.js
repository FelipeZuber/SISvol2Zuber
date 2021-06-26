class scene1 extends Phaser.Scene{
    constructor() {
        super("scene1")
    }
    preload(){
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(300, 400, 1000, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;

        this.load.image("Logo", "./assets/Logo.png");
        

        this.load.on('progress', function (value) {
            console.log(value);
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(300, 400, 1000 * value, 30);
        });
        
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 150,
            text: 'Loading',
            style: {
                font: '50px monospace',
                fill: '#F39200'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
            
        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#F39200'
            }
        });
        assetText.setOrigin(0.5, 0.5);
                
        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });
        
        this.load.image("Menu", "./assets/Menu.png");
        this.load.image('ground 2', './assets/platform 2.png');
        this.load.image('ground', './assets/platform.png');
        this.load.image('Combustible', './assets/CombustibleIcon.png');
        this.load.image("Piezas", "./assets/PiezasIcon.png");
        this.load.image("Oxigeno", "./assets/OxigenIcon.png");
        this.load.image('bomb', './assets/bomb.png');
        this.load.image('Estructura 1', './assets/Estructura 1.png');
        this.load.image('Estructura 2', './assets/Estructura 2.png');
        this.load.image('Estructura 3', './assets/Estructura 3.png');
        this.load.image('Estructura 4', './assets/Estructura 4.png');
        this.load.image('Estructura 5', './assets/Estructura 5.png');
        this.load.image('Estructura 6', './assets/Estructura 6.png');
        this.load.image('Estructura 7', './assets/Estructura 7.png');
        this.load.image('Estructura 8', './assets/Estructura 8.png');
        this.load.image('ButtonsD', './assets/ButtonsD.png');
        this.load.image('Oro', './assets/Estructura 9.png');
        this.load.image('PlatMov', './assets/PlatMov.png');
        this.load.image('PlatMov2', './assets/PlatMov2.png');
        this.load.image('sky', './assets/Sky 16-9.png');
        this.load.image('FondInterface1', './assets/FondInterface1.png');
        this.load.image('Doná', './assets/Donaciones 16-9.png');
        this.load.spritesheet("ManAnim","./assets/ManAnim.png", { frameWidth: 176.8, frameHeight: 313});
        this.load.image('Boton', './assets/Buttons.png');
        this.load.image('ButtonsBA', './assets/ButtonsBA.png');
        this.load.image('Boton2', './assets/Buttons2.png');
        this.load.image('Boton3', './assets/Buttons3.png');
        this.load.image('Boton4', './assets/Buttons4.png');
        this.load.image('Pinchos', './assets/Pinchos.png');
        this.load.image('MuteIcon1', './assets/Mute Icon1.png');
        this.load.image('MuteIcon2', './assets/Mute Icon2.png');
        this.load.image('ButtonsCredit', './assets/ButtonsCredit.png');
        this.load.image('ButtonsSelect', './assets/ButtonsSelect.png');
        this.load.spritesheet("MuerteAnim","./assets/MuerteAnim.png", { frameWidth: 301, frameHeight: 300});
        this.load.image('sky2', './assets/Background 2 16-9.png');
        this.load.image('HeartIcon', './assets/HeartIcon.png');
        this.load.audio('MusicaMenú', './assets/sfx-songs/Menú.mp3');
        this.load.audio('MúsicaLVL', './assets/sfx-songs/MúsicaLVL.mp3');
        this.load.audio('MúsicaLVL 2', './assets/sfx-songs/MúsicaLVL 2.mp3');
        this.load.audio('DeadMenúSong', './assets/sfx-songs/DeadMenúSong.mp3');
        this.load.audio('PickUpCombustible', './assets/sfx-songs/PickUpCombustible.mp3');
        this.load.audio('DañoPinchosSound', './assets/sfx-songs/DañoPinchosSound.mp3');
        this.load.audio('PickUpHerramientas', './assets/sfx-songs/PickUpHerramientas.mp3');
        this.load.audio('PickUpOro', './assets/sfx-songs/PickUpOro.mp3');
        this.load.audio('SinOxigeno', './assets/sfx-songs/SinOxigeno.mp3');
        this.load.audio('OxigenSoundload', './assets/sfx-songs/OxigenSoundload.mp3');
        this.load.audio('ClickSound', './assets/sfx-songs/ClickSound.mp3');
        

        this.load.on('progress', function (value) {
            console.log(value);
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(310, 410, 980 * value, 30);
        });
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 25,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#f39200'
            }    
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.on('complete', function () {
            percentText.destroy();
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            assetText.destroy();
        }); 
    }
    create(){
        this.initialTime2 = 2;
        scale = this.add.image(800, 450, "Logo").setScale(0.1);
        
        tiempoLogo = this.time.addEvent({ delay: 1000, callback: this.tiempoLogo, callbackScope: this, loop: true });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('ManAnim', { start: 0, end: 17 }),
            frameRate: 20,
            repeat: -1,
        });
    
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'ManAnim', frame: 18 } ],
            frameRate: 20
        });
    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('ManAnim', { start: 19, end: 36 }),
            frameRate: 20,
            repeat: -1,
        });
        this.anims.create({
            key: 'jumpadel',
            frames: [ { key: 'ManAnim' , frame: 37 } ],
            frameRate: 1,
        });
        this.anims.create({
            key: 'Muerto',
            frames:  this.anims.generateFrameNumbers('MuerteAnim', { start: 0, end: 4 }),
            frameRate: 7,
            repeat: 0,
        });
        
        
    }
    update(){
        if (this.initialTime2 == 0){
            this.scene.start("MenúPrin")    
            //this.scene.start("MenúLvl2") 
            //this.scene.start("scene4") 
            
        }
    }
    tiempoLogo (){
        this.initialTime2 -= 1; 
    }
}