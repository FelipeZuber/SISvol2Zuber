class Nivel2 extends Phaser.Scene{
    constructor(){
        super("Nivel2");
    }
    create(){
        this.MúsicaLVL2 =this.sound.add("MúsicaLVL 2")
        //this.MúsicaLVL2.play();
        this.DañoPinchosSound =this.sound.add("DañoPinchosSound")
        this.PickUpCombustible =this.sound.add("PickUpCombustible")
        this.PickUpHerramientas =this.sound.add("PickUpHerramientas")
        this.PickUpOro =this.sound.add("PickUpOro")
        this.SinOxigeno =this.sound.add("SinOxigeno")
        this.OxigenSoundload =this.sound.add("OxigenSoundload")
        this.MúsicaLVL2.setVolume(0.4);
        this.OxigenSoundload.setVolume(0.2);
        this.PickUpOro.setVolume(0.3);
        this.PickUpCombustible.setVolume(0.4);
        if(mute==false){
            this.MúsicaLVL2.play();
        }
        let bg = this.add.image(0, 0, "sky2").setOrigin(0, 0);
        //Vidas totales
        this.vidas= 2;
        this.inmunedmgtime = 2;
        //Bordes del Mapa
        var Bordermap= this.add.rectangle(3500, 4200, 7000, 30);
        this.physics.add.staticGroup(Bordermap);
        var Bordermap2= this.add.rectangle(10, 1000, 30, 7000);
        this.physics.add.staticGroup(Bordermap2);
        var Bordermap3= this.add.rectangle(6500, 1000, 30, 7000);
        this.physics.add.staticGroup(Bordermap3);
        var Bordermap4= this.add.rectangle(3500, 10, 7000, 30);
        this.physics.add.staticGroup(Bordermap4);
        //Estructuras
        var St1= this.add.rectangle(1650, 830, 3200, 60);
        this.physics.add.staticGroup(St1);
        var St2= this.add.rectangle(2900, 1480, 1550, 60);
        this.physics.add.staticGroup(St2);
        var St3= this.add.rectangle(750, 1480, 1550, 60);
        this.physics.add.staticGroup(St3);
        var St4= this.add.rectangle(750, 2780, 1550, 60);
        this.physics.add.staticGroup(St4);
        var St5= this.add.rectangle(2900, 2780, 1550, 60);
        this.physics.add.staticGroup(St5);
        var St6= this.add.rectangle(2080, 2050, 4300, 60);
        this.physics.add.staticGroup(St6);
        var St7= this.add.rectangle(5700, 970, 3000, 60);
        this.physics.add.staticGroup(St7);

        //Punto Central del Juego
        //var St8= this.add.rectangle(3334, 1875, 10, 10, 0xff0000);
        //this.physics.add.staticGroup(St8);

        //Movimiento de Plataformas
        movingPlatform = this.physics.add.image(2000, 3300, "PlatMov");
        movingPlatform.setImmovable(true);
        movingPlatform.body.allowGravity = false;
        movingPlatform.setVelocityX(300);
        
        movingPlatform3 = this.physics.add.image(5800, 2000, "PlatMov");
        movingPlatform3.setImmovable(true);
        movingPlatform3.body.allowGravity = false;
        movingPlatform3.setVelocityY(5);
        
       
        //Player
        player = this.physics.add.sprite(400, 500, 'ManAnim');
        
        player.setCollideWorldBounds(false);
        //player.setGravity();
        this.cameras.main.setBounds(0, 0, bg.displayWidth, bg.displayHeight);
        this.cameras.main.startFollow(player);
        this.cameras.main.setZoom(0.5);
        
        player.pinchos = 1; 
        

        cursors = this.input.keyboard.createCursorKeys();


        //CombustibleCombustibleCombustibleCombustibleCombustibleCombustibleCombustibleCombustible
        // Cuadrante 1
        var repeatComb = Phaser.Math.Between(0,1);
        scoreC = repeatComb * 15;// hacer la suma de todos los ScoreC (ScoreCV2) y cambiar ScoreC por otra var en Update ;)
        var posFinX = 3334 / (repeatComb +1) ;
        var px = Phaser.Math.Between(200, posFinX);
        var stpX2 = Phaser.Math.Between(200, posFinX);
        var stpY2 = Phaser.Math.Between(20, 40);
        stars = this.physics.add.group({
            key: 'Combustible',
            repeat: repeatComb,
            setXY: { x: px, y: 1000, stepX: stpX2, stepY: stpY2 },
        });
        stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        // Cuadrante 2
        var repeatCombV2 = Phaser.Math.Between(0,1);
        scoreCV2 = repeatCombV2 * 15;
        var posFinXV2 = 3334/ (repeatCombV2+1);
        var pxV2 = Phaser.Math.Between(3334, (posFinXV2 + 3000));
        var stpX2V2 = Phaser.Math.Between(200, posFinXV2);
        var stpY2V2 = Phaser.Math.Between(20, 40);
        starsV2 = this.physics.add.group({
            key: 'Combustible',
            repeat: repeatCombV2,
            setXY: { x: pxV2, y: 10, stepX: stpX2V2, stepY: stpY2V2 },
        });
        starsV2.children.iterate(function (childV2) {
            childV2.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        // Cuadrante 3
        scoreCV3 = 1 * 15;
        var stpY2V3 = Phaser.Math.Between(20, 40);
        starsV3 = this.physics.add.group({
            key: 'Combustible',
            repeat: 1,
            setXY: { x: 800, y: 2000, stepX: 2000, stepY: stpY2V3},
        });
        starsV3.children.iterate(function (childV3) {
            childV3.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        // Cuadrante 4
        //var repeatCombV4 = Phaser.Math.Between(1,2);
        //scoreCV4 = repeatCombV4 * 15;
        //var posFinXV4 = 3334/ (repeatCombV4 + 1);
        //var pxV4 = Phaser.Math.Between(3334, (posFinXV4 + 3000));
        //var stpX2V4 = Phaser.Math.Between(100, posFinXV4);
        //var stpY2V4 = Phaser.Math.Between(20, 30);
        //starsV4 = this.physics.add.group({
        //    key: 'Combustible',
        //    repeat: repeatCombV4,
        //    setXY: { x: pxV4, y: 2000, stepX: stpX2V4, stepY: stpY2V4},
        //});
        //starsV4.children.iterate(function (childV4) {
        //    childV4.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        //});

        //PiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezas
        // Cuadrante 1
        var repeatComb2 = Phaser.Math.Between(0,1);
        scoreP = repeatComb2;
        var posFinX2 = 3334 / (repeatComb2 +1) ;
        var px = Phaser.Math.Between(200, posFinX2);
        var stpX3 = Phaser.Math.Between(250, posFinX2);
        var stpY3 = Phaser.Math.Between(20, 30);
        stars2 = this.physics.add.group({
            key: "Piezas",
            repeat: repeatComb2,
            setXY: {x: px, y: 1000, stepX: stpX3, stepY: stpY3},
        })
        stars2.children.iterate(function (child2) {
            child2.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        //Cuadrante 2
        var repeatComb2V2 = Phaser.Math.Between(0,1);
        scorePV2 = repeatComb2V2;
        var posFinX2V2 = 3334 / (repeatComb2V2 +1) ;
        var pxPV2 = Phaser.Math.Between(3334, (posFinX2V2 + 3000));
        var stpX3PV2 = Phaser.Math.Between(250, posFinX2V2);
        var stpY3PV2 = Phaser.Math.Between(20, 30);
        stars2V2 = this.physics.add.group({
            key: "Piezas",
            repeat: repeatComb2V2,
            setXY: {x: pxPV2, y: 40, stepX: stpX3PV2, stepY: stpY3PV2},
        })
        stars2V2.children.iterate(function (child2V2) {
            child2V2.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        //Cuadrante 3
        scorePV3 = 1;
        var stpY3PV3 = Phaser.Math.Between(20, 30);
        stars2V3 = this.physics.add.group({
            key: "Piezas",
            repeat: 1,
            setXY: {x: 1000, y: 2000, stepX: 2000, stepY: stpY3PV3},
        })
        stars2V3.children.iterate(function (child2V3) {
            child2V3.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        //Cuadrante 4
        //var repeatComb2V4 = Phaser.Math.Between(1,2);
        //scorePV4 = repeatComb2V4;
        //var posFinX2V4 = 3334 / (repeatComb2V4 + 1) ;
        //var pxPV4 = Phaser.Math.Between(3334, (posFinX2V4 + 3000));
        //var stpX3PV4 = Phaser.Math.Between(250, posFinX2V4);
        //var stpY3PV4 = Phaser.Math.Between(20, 30);
        //stars2V4 = this.physics.add.group({
        //    key: "Piezas",
        //    repeat: repeatComb2V4,
        //    setXY: {x: pxPV4, y: 2000, stepX: stpX3PV4, stepY: stpY3PV4},
        //})
        //stars2V4.children.iterate(function (child2V4) {
        //    child2V4.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        //});

        //Oro
        var pxO = Phaser.Math.Between(110, 666);
        var pyO = Phaser.Math.Between(10, 500);
        var stpX = Phaser.Math.Between(200, 666);
        var stpY = Phaser.Math.Between(200, 300);
        stars3 = this.physics.add.group({
            key: "Oro",
            repeat: 2,
            setXY: {x: pxO, y: pyO, stepX: stpX, stepY: stpY},
        })
        stars3.children.iterate(function (child3) {
            child3.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        //Oxigeno
        var stpX4 = Phaser.Math.Between(200, 400);
        var stpY4 = Phaser.Math.Between(200, 300);
        Oxig = this.physics.add.group({
            key: 'Oxigeno',
            repeat: 0,
            setXY: { x: 120, y: 1000, stepX: stpX4, stepY: stpY4 },
        });
        Oxig.children.iterate(function (child4) {
            child4.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });


        //Pinchos
        pinchos = this.physics.add.staticGroup();
        pinchos.create(100, 900, "Pinchos");
        pinchos.create(500, 900, "Pinchos");
        pinchos.create(900, 900, "Pinchos");
        pinchos.create(1300, 900, "Pinchos");
        pinchos.create(1700, 900, "Pinchos");
        pinchos.create(2100, 900, "Pinchos");
        pinchos.create(2500, 900, "Pinchos");
        pinchos.create(2900, 900, "Pinchos");

        pinchos.create(4500, 250, "Pinchos");
        pinchos.create(4900, 250, "Pinchos");
        pinchos.create(5300, 250, "Pinchos");
        pinchos.create(5700, 250, "Pinchos");
        pinchos.create(6100, 250, "Pinchos");
        pinchos.create(6500, 250, "Pinchos");

        pinchos.create(100, 2150, "Pinchos");
        pinchos.create(500, 2150, "Pinchos");
        pinchos.create(900, 2150, "Pinchos");
        pinchos.create(1300, 2150, "Pinchos");
        pinchos.create(1700, 2150, "Pinchos");
        pinchos.create(2100, 2150, "Pinchos");
        pinchos.create(2500, 2150, "Pinchos");
        pinchos.create(2900, 2150, "Pinchos");
        pinchos.create(3300, 2150, "Pinchos");
        pinchos.create(3700, 2150, "Pinchos");
        //Pincho fondos
        pinchos.create(100, 4180, "Pinchos");
        pinchos.create(500, 4180, "Pinchos");
        pinchos.create(900, 4180, "Pinchos");
        pinchos.create(1300, 4180, "Pinchos");
        pinchos.create(1700, 4180, "Pinchos");
        pinchos.create(2100, 4180, "Pinchos");
        pinchos.create(2500, 4180, "Pinchos");
        pinchos.create(2900, 4180, "Pinchos");
        pinchos.create(3300, 4180, "Pinchos");
        pinchos.create(3700, 4180, "Pinchos");
        pinchos.create(4100, 4180, "Pinchos");
        pinchos.create(4500, 4180, "Pinchos");
        pinchos.create(4900, 4180, "Pinchos");
        pinchos.create(5300, 4180, "Pinchos");
        pinchos.create(5700, 4180, "Pinchos");
        pinchos.create(6100, 4180, "Pinchos");
        pinchos.create(6500, 4180, "Pinchos");
        pinchos.create(6900, 4180, "Pinchos");
        
        //
        
        bombs = this.physics.add.group({repeat:0, setXY: {stepX: 20}});

        FondInter1 = this.add.image(-20, -340,"FondInterface1");
        FondInter1.scrollFactorX = 0
        FondInter1.scrollFactorY = 0

        Oroicon= this.add.image(1180, -380, "Oro").setScale(0.5);
        Oroicon.scrollFactorX = 0
        Oroicon.scrollFactorY = 0

        Oroicon2= this.add.image(220, -380, "Piezas").setScale(0.5);
        Oroicon2.scrollFactorX = 0
        Oroicon2.scrollFactorY = 0

        Oroicon3= this.add.image(-660, -385, "Combustible").setScale(0.4);
        Oroicon3.scrollFactorX = 0
        Oroicon3.scrollFactorY = 0

        scoreText = this.add.text(-600, -420, 'Combustible: 0', { font: '80px monospace', fill: '#de7e0d'});
        scoreText2 = this.add.text(290, -420, 'Piezas de nave: 0', { font: '80px monospace', fill: '#de7e0d'});
        scoreText3 = this.add.text(1230, -420, 'Oro: 0', { font: '80px monospace', fill: '#de7e0d'});
        //
        
        //
        //Tiempo para que se termine el Juego
        this.initialTime = 100;
        this.BombTime = 2000;
        textoxg = this.add.text(1700, -420, 'Oxigeno: %' + this.initialTime, { font: '80px monospace', fill: '#de7e0d'});
        timpoOxg = this.time.addEvent({ delay: 450, callback: this.PerdidaOxig, callbackScope: this, loop: true });
        
        //tiempo de spawn bombs
        BombTime = this.time.addEvent({ delay: 10, callback: this.timeBomb, callbackScope: this, loop: true });

        vadiasIcon = this.add.image(1850, -270, "HeartIcon").setScale(0.4);
        vadiasIcon.scrollFactorX = 0
        vadiasIcon.scrollFactorY = 0

        vadiasIcon2 = this.add.image(1950, -270, "HeartIcon").setScale(0.4);
        vadiasIcon2.scrollFactorX = 0
        vadiasIcon2.scrollFactorY = 0

        scoreText.scrollFactorX = 0
        scoreText.scrollFactorY = 0

        scoreText2.scrollFactorX = 0
        scoreText2.scrollFactorY = 0

        scoreText3.scrollFactorX = 0
        scoreText3.scrollFactorY = 0

        textoxg.scrollFactorX = 0
        textoxg.scrollFactorY = 0

        this.physics.add.collider(player, Bordermap);this.physics.add.collider(stars, Bordermap);this.physics.add.collider(starsV2, Bordermap);this.physics.add.collider(starsV3, Bordermap);//this.physics.add.collider(starsV4, Bordermap);
        this.physics.add.collider(player, Bordermap2);this.physics.add.collider(stars2, Bordermap);this.physics.add.collider(stars2V2, Bordermap);this.physics.add.collider(stars2V3, Bordermap);//this.physics.add.collider(stars2V4, Bordermap);
        this.physics.add.collider(player, Bordermap3);this.physics.add.collider(stars3, Bordermap);this.physics.add.collider(Oxig, Bordermap)
        this.physics.add.collider(player, Bordermap4);

        this.physics.add.collider(player, St1);this.physics.add.collider(stars, St1);this.physics.add.collider(starsV2, St1);this.physics.add.collider(starsV3, St1);//this.physics.add.collider(starsV4, St1);
        this.physics.add.collider(player, St2);this.physics.add.collider(stars, St2);this.physics.add.collider(starsV2, St2);this.physics.add.collider(starsV3, St2);//this.physics.add.collider(starsV4, St2);
        this.physics.add.collider(player, St3);this.physics.add.collider(stars, St3);this.physics.add.collider(starsV2, St3);this.physics.add.collider(starsV3, St3);//this.physics.add.collider(starsV4, St3);
        this.physics.add.collider(player, St4);this.physics.add.collider(stars, St4);this.physics.add.collider(starsV2, St4);this.physics.add.collider(starsV3, St4);//this.physics.add.collider(starsV4, St4);
        this.physics.add.collider(player, St5);this.physics.add.collider(stars, St5);this.physics.add.collider(starsV2, St5);this.physics.add.collider(starsV3, St5);//this.physics.add.collider(starsV4, St5);
        this.physics.add.collider(player, St6);this.physics.add.collider(stars, St6);this.physics.add.collider(starsV2, St6);this.physics.add.collider(starsV3, St6);//this.physics.add.collider(starsV4, St6);
        this.physics.add.collider(player, St7);this.physics.add.collider(stars, St7);this.physics.add.collider(starsV2, St7);this.physics.add.collider(starsV3, St7);//this.physics.add.collider(starsV4, St7);

        this.physics.add.collider(stars2, St1);this.physics.add.collider(stars2V2, St1);this.physics.add.collider(stars2V3, St1);//this.physics.add.collider(stars2V4, St1);
        this.physics.add.collider(stars2, St2);this.physics.add.collider(stars2V2, St2);this.physics.add.collider(stars2V3, St2);//this.physics.add.collider(stars2V4, St2);
        this.physics.add.collider(stars2, St3);this.physics.add.collider(stars2V2, St3);this.physics.add.collider(stars2V3, St3);//this.physics.add.collider(stars2V4, St3);
        this.physics.add.collider(stars2, St4);this.physics.add.collider(stars2V2, St4);this.physics.add.collider(stars2V3, St4);//this.physics.add.collider(stars2V4, St4);
        this.physics.add.collider(stars2, St5);this.physics.add.collider(stars2V2, St5);this.physics.add.collider(stars2V3, St5);//this.physics.add.collider(stars2V4, St5);
        this.physics.add.collider(stars2, St6);this.physics.add.collider(stars2V2, St6);this.physics.add.collider(stars2V3, St6);//this.physics.add.collider(stars2V4, St6);
        this.physics.add.collider(stars2, St7);this.physics.add.collider(stars2V2, St7);this.physics.add.collider(stars2V3, St7);//this.physics.add.collider(stars2V4, St7);

        
        this.physics.add.collider(stars3, St1);
        this.physics.add.collider(stars3, St2);
        this.physics.add.collider(stars3, St3);
        this.physics.add.collider(stars3, St4);
        this.physics.add.collider(stars3, St5);
        this.physics.add.collider(stars3, St6);
        this.physics.add.collider(stars3, St7);
        
        this.physics.add.collider(Oxig, St1);
        this.physics.add.collider(Oxig, St2);
        this.physics.add.collider(Oxig, St3);
        this.physics.add.collider(Oxig, St4);
        this.physics.add.collider(Oxig, St5);
        this.physics.add.collider(Oxig, St6);
        this.physics.add.collider(Oxig, St7);

        this.physics.add.collider(player, movingPlatform);
        this.physics.add.collider(stars3, movingPlatform);
        this.physics.add.collider(stars2V3, movingPlatform);
        this.physics.add.collider(player, movingPlatform2);
        this.physics.add.collider(player, movingPlatform3);
        this.physics.add.collider(player, movingPlatform4);
        

        this.physics.add.overlap(player, stars, this.collectStar, null, this);
        this.physics.add.overlap(player, starsV2, this.collectStarV2, null, this);
        this.physics.add.overlap(player, starsV3, this.collectStarV3, null, this);
        //this.physics.add.overlap(player, starsV4, this.collectStarV4, null, this);
        this.physics.add.overlap(player, stars2, this.collectStar2, null, this);
        this.physics.add.overlap(player, stars2V2, this.collectStar2V2, null, this);
        this.physics.add.overlap(player, stars2V3, this.collectStar2V3, null, this);
        //this.physics.add.overlap(player, stars2V4, this.collectStar2V4, null, this);
        this.physics.add.overlap(player, stars3, this.collectStar3, null, this);
        this.physics.add.overlap(player, Oxig, this.PlsOxig, null, this);
        var pinchcollider = this.physics.add.collider(player, pinchos, this.pinchosF, null, this);
        //meteorito
        this.physics.add.collider(player, bombs, this.hitBomb, null, this);

        var restartButton2 = this.add.image(2200, -260,"MuteIcon1").setScale(0.25)
        .setInteractive()
        .on("pointerdown",() => this.desmutear());
        restartButton2.scrollFactorX = 0
        restartButton2.scrollFactorY = 0
        
        var restartButton1 = this.add.image(2100, -260,"MuteIcon2").setScale(0.25)
        .setInteractive()
        .on("pointerdown",() => this.mutear());
        restartButton1.scrollFactorX = 0
        restartButton1.scrollFactorY = 0

        totalscoreC = ((scoreC + 15) + (scoreCV2 + 15) + (scoreCV3 + 15));
        totalscoreP = ((scoreP + 1) + (scorePV2 + 1) + (scorePV3 + 1));
    }
    update()
    {
        if (gameOver)
        {
            return;
        } 
        if(this.vidas == 1){  
            vadiasIcon.visible = false;
        }
        if(this.vidas <= 0){
            if(player.pinchos == 1){
                vadiasIcon2.visible = false;
                player.setVelocityX(0)
                player.anims.play('Muerto', true);
                player.pinchos = 0;
                setTimeout(() => {
                    this.MúsicaLVL2.stop();
                    this.scene.start("PerdisteP")  
                }, 1000);
            }
        }
        else if (cursors.left.isDown && this.vidas > 0)
        {
            player.setVelocityX(-1000);
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown && this.vidas > 0)
        {
            player.setVelocityX(1000);
            player.anims.play('right', true);
        }
        else{
            if(this.vidas > 0){
            player.setVelocityX(0);
            player.anims.play('turn');

            if (!(player.body.touching.down))
        {
            player.anims.play("jumpadel")
        }
        }
    }


        if (cursors.up.isDown && player.body.touching.down && this.vidas > 0)
        {
            player.setVelocityY(-600);
            
        }
        
        // Plataformas Horizontales
        if (movingPlatform.x >= 4700)
        {
            movingPlatform.setVelocityX(-300);
        }
        else if (movingPlatform.x <= 1200)
        {
            movingPlatform.setVelocityX(300);
        }


        //Plataformas Verticales
        if (movingPlatform3.y >= 3550)
        {
            movingPlatform3.setVelocityY(-300);
        }
        else if (movingPlatform3.y <= 2000)
        {
            movingPlatform3.setVelocityY(300);
        }

        //SCORE
        if (((score >= totalscoreC) && (score2 >= totalscoreP))){
            this.MúsicaLVL2.stop();
            this.scene.start("scene4")
            
        }
        //Sin Oxigeno
        if (this.initialTime == 0){
            this.SinOxigeno.play();
            this.MúsicaLVL2.stop();
            this.scene.start("scene3")
        }
        
        //Meteoritos
        if ((this.BombTime == 1700) ||(this.BombTime == 1500) ||(this.BombTime == 1300) ||(this.BombTime == 1100) ||(this.BombTime == 900) || (this.BombTime == 700) || (this.BombTime == 300) || (this.BombTime == 100) || (this.BombTime == 500)){ 
            var posx = (player.x < 3334) ? Phaser.Math.Between(3334, 4000) : Phaser.Math.Between(1000, 3334);
            var bomb = bombs.create(posx, -90, 'Meteorito');
            bomb.setCollideWorldBounds(false);
            bomb.setVelocity(Phaser.Math.Between(-400, 400), 200);
            bomb.allowGravity = false;
        }
       

    }

    //Piezas 1
    collectStar2 (player, stars2){
        this.PickUpHerramientas.play();
        stars2.disableBody(true, true);
        score2 += 1;
        scoreText2.setText('Piezas de nave: ' + score2);
    }
    //Piezas V2
    collectStar2V2 (player, stars2V2){
        this.PickUpHerramientas.play();
        stars2V2.disableBody(true, true);
        score2 += 1;
        scoreText2.setText('Piezas de nave: ' + score2);
    }
    //Piezas V3
    collectStar2V3 (player, stars2V3){
        this.PickUpHerramientas.play();
        stars2V3.disableBody(true, true);
        score2 += 1;
        scoreText2.setText('Piezas de nave: ' + score2); 
    }
    // //Piezas V4
    // collectStar2V4 (player, stars2V4){
    //     this.PickUpHerramientas.play();
    //     stars2V4.disableBody(true, true);
    //     score2 += 1;
    //     scoreText2.setText('Piezas de nave: ' + score2);
    // }

    //Combustible
    collectStar (player, stars){
        this.PickUpCombustible.play();
        stars.disableBody(true, true);
        score += 15;
        scoreText.setText('Combustible: ' + score);
    }
    //Combustible V2
    collectStarV2 (player, starsV2){
        this.PickUpCombustible.play();
        starsV2.disableBody(true, true);
        score += 15;
        scoreText.setText('Combustible: ' + score)
    }
    //Combustible V3
    collectStarV3 (player, starsV3){
        this.PickUpCombustible.play();
        starsV3.disableBody(true, true);
        score += 15;
        scoreText.setText('Combustible: ' + score)
    }
    //Combustible V3
   /*  collectStarV4 (player, starsV4){
        this.PickUpCombustible.play();
        starsV4.disableBody(true, true);
        score += 15;
        scoreText.setText('Combustible: ' + score)
    }
 */

    collectStar3 (player, stars3){
        this.PickUpOro.play();
        stars3.disableBody(true, true);
        score3 += 1;
        scoreText3.setText('Oro: ' + score3);
    }
    PlsOxig(player, Oxig){
        Oxig.disableBody(true, true);
        this.OxigenSoundload.play();
        oxigenCount = this.initialTime;
        oxigenCount += 30;
        this.initialTime = oxigenCount;
        //this.initialTime += Math.round(oxigenCount);
    }
    pinchosF(player, pinchos){  
        this.vidas -= 1;    
        this.DañoPinchosSound.play();
    }
    PerdidaOxig (){
        this.initialTime -= 1;
        textoxg.setText('Oxigeno: %' + this.initialTime);
    }
    AnimDead(){
        //player2 = this.physics.add.sprite(player.x, player.y, 'MuerteAnim');
        player.anims.stop("turn", false)
        player.anims.stop("left", false)
        player.anims.stop("right", false)
        player.anims.stop("jumpadel", false)


        player.anims.play("left", false)
        setTimeout(() => {
            this.scene.start("scene3") 
        }, 10000);
    }
    timeBomb (){
        this.BombTime -= 1;
    }
    hitBomb(player,bomb){
        bomb.disableBody(false,true)
        this.vidas -= 1;
        this.DañoPinchosSound.play();
    }    
    mutear(){
        mute = true;
        this.MúsicaLVL2.stop();
    }
    desmutear(){
        mute = false;
        this.MúsicaLVL2.play();
    }

}