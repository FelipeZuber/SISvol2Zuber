class scene2 extends Phaser.Scene{
    constructor(){
        super("scene2");
    }
    create(){
        this.MúsicaLVL =this.sound.add("MúsicaLVL")
        if(mute==false){
            this.MúsicaLVL.play();
        }
        
        this.DañoPinchosSound =this.sound.add("DañoPinchosSound")
        this.PickUpCombustible =this.sound.add("PickUpCombustible")
        this.PickUpHerramientas =this.sound.add("PickUpHerramientas")
        this.PickUpOro =this.sound.add("PickUpOro")
        this.SinOxigeno =this.sound.add("SinOxigeno")
        this.OxigenSoundload =this.sound.add("OxigenSoundload")
        this.MúsicaLVL.setVolume(0.4);
        this.OxigenSoundload.setVolume(0.2);
        this.PickUpOro.setVolume(0.3);
        this.PickUpCombustible.setVolume(0.4);
        
        let bg = this.add.image(0, 0, "sky").setOrigin(0, 0);
        //Vidas totales
        this.vidas= 2;
        
        this.inmunedmgtime = 2;
        //Bordes del Mapa
        var Bordermap= this.add.rectangle(3500, 3620, 7000, 30);
        this.physics.add.staticGroup(Bordermap);
        var Bordermap2= this.add.rectangle(150, 1000, 30, 7000);
        this.physics.add.staticGroup(Bordermap2);
        var Bordermap3= this.add.rectangle(6500, 1000, 30, 7000);
        this.physics.add.staticGroup(Bordermap3);
        var Bordermap4= this.add.rectangle(3500, 10, 7000, 30);
        this.physics.add.staticGroup(Bordermap4);
        //Estructuras
        var St1= this.add.rectangle(700, 920, 1100, 60);
        this.physics.add.staticGroup(St1);
        var St2= this.add.rectangle(3350, 900, 1600, 90);
        this.physics.add.staticGroup(St2);
        var St3= this.add.rectangle(1150, 1950, 2200, 90);
        this.physics.add.staticGroup(St3);
        var St4= this.add.rectangle(5870, 3150, 2200, 90);
        this.physics.add.staticGroup(St4);
        var St5= this.add.rectangle(750, 3140, 2200, 90);
        this.physics.add.staticGroup(St5);
        var St6= this.add.rectangle(5470, 1930, 2200, 90);
        this.physics.add.staticGroup(St6);
        var St7= this.add.rectangle(6000, 890, 1400, 90);
        this.physics.add.staticGroup(St7);

        //Punto Central del Juego
        //var St8= this.add.rectangle(3334, 1875, 10, 10, 0xff0000);
        //this.physics.add.staticGroup(St8);

        //Movimiento de Plataformas
        movingPlatform = this.physics.add.image(2000, 1400, "PlatMov");
        movingPlatform.setImmovable(true);
        movingPlatform.body.allowGravity = false;
        movingPlatform.setVelocityX(50);
        
        movingPlatform2 = this.physics.add.image(4000, 1400, "PlatMov2");
        movingPlatform2.setImmovable(true);
        movingPlatform2.body.allowGravity = false;
        movingPlatform2.setVelocityX(50);
        
        movingPlatform3 = this.physics.add.image(2900, 2000, "PlatMov").setScale(0.5).refreshBody();
        movingPlatform3.setImmovable(true);
        movingPlatform3.body.allowGravity = false;
        movingPlatform3.setVelocityY(50);
        
        movingPlatform4 = this.physics.add.image(3500, 3100, "PlatMov2").setScale(0.5).refreshBody();
        movingPlatform4.setImmovable(true);
        movingPlatform4.body.allowGravity = false;
        movingPlatform4.setVelocityY(50);
       
        //Player
        player = this.physics.add.sprite(400, 730, 'ManAnim');
        
        player.setCollideWorldBounds(false);
        //player.setGravity();
        this.cameras.main.setBounds(0, 0, bg.displayWidth, bg.displayHeight);
        this.cameras.main.startFollow(player);
        this.cameras.main.setZoom(0.5);
        player.pinchos = 1;
        

        cursors = this.input.keyboard.createCursorKeys();


        //CombustibleCombustibleCombustibleCombustibleCombustibleCombustibleCombustibleCombustible
        // Cuadrante 1
        var repeatComb = Phaser.Math.Between(1,2);
        scoreC = repeatComb * 15;// hacer la suma de todos los ScoreC (ScoreCV2) y cambiar ScoreC por otra var en Update ;)
        var posFinX = 3334 / (repeatComb +1) ;
        var px = Phaser.Math.Between(200, posFinX);
        var stpX2 = Phaser.Math.Between(200, posFinX);
        var stpY2 = Phaser.Math.Between(20, 40);
        stars = this.physics.add.group({
            key: 'Combustible',
            repeat: repeatComb,
            setXY: { x: px, y: 10, stepX: stpX2, stepY: stpY2 },
        });
        stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        // Cuadrante 2
        var repeatCombV2 = Phaser.Math.Between(1,2);
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
        var repeatCombV3 = Phaser.Math.Between(1,2);
        scoreCV3 = repeatCombV3 * 15;
        var posFinXV3 = 3334/ (repeatCombV3 + 1);
        var pxV3 = Phaser.Math.Between(200, posFinXV3);
        var stpX2V3 = Phaser.Math.Between(200, posFinXV3);
        var stpY2V3 = Phaser.Math.Between(20, 40);
        starsV3 = this.physics.add.group({
            key: 'Combustible',
            repeat: repeatCombV3,
            setXY: { x: pxV3, y: 2000, stepX: stpX2V3, stepY: stpY2V3},
        });
        starsV3.children.iterate(function (childV3) {
            childV3.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        // Cuadrante 4
        var repeatCombV4 = Phaser.Math.Between(1,2);
        scoreCV4 = repeatCombV4 * 15;
        var posFinXV4 = 3334/ (repeatCombV4 + 1);
        var pxV4 = Phaser.Math.Between(3334, (posFinXV4 + 3000));
        var stpX2V4 = Phaser.Math.Between(100, posFinXV4);
        var stpY2V4 = Phaser.Math.Between(20, 30);
        starsV4 = this.physics.add.group({
            key: 'Combustible',
            repeat: repeatCombV4,
            setXY: { x: pxV4, y: 2000, stepX: stpX2V4, stepY: stpY2V4},
        });
        starsV4.children.iterate(function (childV4) {
            childV4.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        //PiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezasPiezas
        // Cuadrante 1
        var repeatComb2 = Phaser.Math.Between(1,2);
        scoreP = repeatComb2;
        var posFinX2 = 3334 / (repeatComb2 +1) ;
        var px = Phaser.Math.Between(200, posFinX2);
        var stpX3 = Phaser.Math.Between(250, posFinX2);
        var stpY3 = Phaser.Math.Between(20, 30);
        stars2 = this.physics.add.group({
            key: "Piezas",
            repeat: repeatComb2,
            setXY: {x: px, y: 40, stepX: stpX3, stepY: stpY3},
        })
        stars2.children.iterate(function (child2) {
            child2.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        //Cuadrante 2
        var repeatComb2V2 = Phaser.Math.Between(1,2);
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
        var repeatComb2V3 = Phaser.Math.Between(1,2);
        scorePV3 = repeatComb2V3;
        var posFinX2V3 = 3334 / (repeatComb2V3 +1) ;
        var pxPV3 = Phaser.Math.Between(200, posFinX2V3) ;
        var stpX3PV3 = Phaser.Math.Between(250, posFinX2V3);
        var stpY3PV3 = Phaser.Math.Between(20, 30);
        stars2V3 = this.physics.add.group({
            key: "Piezas",
            repeat: repeatComb2V3,
            setXY: {x: pxPV3, y: 2000, stepX: stpX3PV3, stepY: stpY3PV3},
        })
        stars2V3.children.iterate(function (child2V3) {
            child2V3.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        //Cuadrante 4
        var repeatComb2V4 = Phaser.Math.Between(1,2);
        scorePV4 = repeatComb2V4;
        var posFinX2V4 = 3334 / (repeatComb2V4 + 1) ;
        var pxPV4 = Phaser.Math.Between(3334, (posFinX2V4 + 3000));
        var stpX3PV4 = Phaser.Math.Between(250, posFinX2V4);
        var stpY3PV4 = Phaser.Math.Between(20, 30);
        stars2V4 = this.physics.add.group({
            key: "Piezas",
            repeat: repeatComb2V4,
            setXY: {x: pxPV4, y: 2000, stepX: stpX3PV4, stepY: stpY3PV4},
        })
        stars2V4.children.iterate(function (child2V4) {
            child2V4.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

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

        var stpY4 = Phaser.Math.Between(200, 300);
        Oxig = this.physics.add.group({
            key: 'Oxigeno',
            repeat: 0,
            setXY: { x: 5000, y: 2000, stepY: stpY4 },
        });
        Oxig.children.iterate(function (child4) {
            child4.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
        });

        //Pinchos
        //pinchos = this.physics.add.staticGroup();
        //pinchos.create(400, 400, "Pinchos");
        

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
        //Tiempo para que se termine el Juego
        this.initialTime = 100;
        
        textoxg = this.add.text(1700, -420, 'Oxigeno: %' + this.initialTime, { font: '80px monospace', fill: '#de7e0d'});
        timpoOxg = this.time.addEvent({ delay: 400, callback: this.PerdidaOxig, callbackScope: this, loop: true });
        
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

        this.physics.add.collider(player, Bordermap);this.physics.add.collider(stars, Bordermap);this.physics.add.collider(starsV2, Bordermap);this.physics.add.collider(starsV3, Bordermap);this.physics.add.collider(starsV4, Bordermap);
        this.physics.add.collider(player, Bordermap2);this.physics.add.collider(stars2, Bordermap);this.physics.add.collider(stars2V2, Bordermap);this.physics.add.collider(stars2V3, Bordermap);this.physics.add.collider(stars2V4, Bordermap);
        this.physics.add.collider(player, Bordermap3);this.physics.add.collider(stars3, Bordermap);this.physics.add.collider(Oxig, Bordermap)
        this.physics.add.collider(player, Bordermap4);

        this.physics.add.collider(player, St1);this.physics.add.collider(stars, St1);this.physics.add.collider(starsV2, St1);this.physics.add.collider(starsV3, St1);this.physics.add.collider(starsV4, St1);
        this.physics.add.collider(player, St2);this.physics.add.collider(stars, St2);this.physics.add.collider(starsV2, St2);this.physics.add.collider(starsV3, St2);this.physics.add.collider(starsV4, St2);
        this.physics.add.collider(player, St3);this.physics.add.collider(stars, St3);this.physics.add.collider(starsV2, St3);this.physics.add.collider(starsV3, St3);this.physics.add.collider(starsV4, St3);
        this.physics.add.collider(player, St4);this.physics.add.collider(stars, St4);this.physics.add.collider(starsV2, St4);this.physics.add.collider(starsV3, St4);this.physics.add.collider(starsV4, St4);
        this.physics.add.collider(player, St5);this.physics.add.collider(stars, St5);this.physics.add.collider(starsV2, St5);this.physics.add.collider(starsV3, St5);this.physics.add.collider(starsV4, St5);
        this.physics.add.collider(player, St6);this.physics.add.collider(stars, St6);this.physics.add.collider(starsV2, St6);this.physics.add.collider(starsV3, St6);this.physics.add.collider(starsV4, St6);
        this.physics.add.collider(player, St7);this.physics.add.collider(stars, St7);this.physics.add.collider(starsV2, St7);this.physics.add.collider(starsV3, St7);this.physics.add.collider(starsV4, St7);

        this.physics.add.collider(stars2, St1);this.physics.add.collider(stars2V2, St1);this.physics.add.collider(stars2V3, St1);this.physics.add.collider(stars2V4, St1);
        this.physics.add.collider(stars2, St2);this.physics.add.collider(stars2V2, St2);this.physics.add.collider(stars2V3, St2);this.physics.add.collider(stars2V4, St2);
        this.physics.add.collider(stars2, St3);this.physics.add.collider(stars2V2, St3);this.physics.add.collider(stars2V3, St3);this.physics.add.collider(stars2V4, St3);
        this.physics.add.collider(stars2, St4);this.physics.add.collider(stars2V2, St4);this.physics.add.collider(stars2V3, St4);this.physics.add.collider(stars2V4, St4);
        this.physics.add.collider(stars2, St5);this.physics.add.collider(stars2V2, St5);this.physics.add.collider(stars2V3, St5);this.physics.add.collider(stars2V4, St5);
        this.physics.add.collider(stars2, St6);this.physics.add.collider(stars2V2, St6);this.physics.add.collider(stars2V3, St6);this.physics.add.collider(stars2V4, St6);
        this.physics.add.collider(stars2, St7);this.physics.add.collider(stars2V2, St7);this.physics.add.collider(stars2V3, St7);this.physics.add.collider(stars2V4, St7);

        
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
        this.physics.add.collider(player, movingPlatform2);
        this.physics.add.collider(player, movingPlatform3);
        this.physics.add.collider(player, movingPlatform4);
        

        this.physics.add.overlap(player, stars, this.collectStar, null, this);
        this.physics.add.overlap(player, starsV2, this.collectStarV2, null, this);
        this.physics.add.overlap(player, starsV3, this.collectStarV3, null, this);
        this.physics.add.overlap(player, starsV4, this.collectStarV4, null, this);
        this.physics.add.overlap(player, stars2, this.collectStar2, null, this);
        this.physics.add.overlap(player, stars2V2, this.collectStar2V2, null, this);
        this.physics.add.overlap(player, stars2V3, this.collectStar2V3, null, this);
        this.physics.add.overlap(player, stars2V4, this.collectStar2V4, null, this);
        this.physics.add.overlap(player, stars3, this.collectStar3, null, this);
        this.physics.add.overlap(player, Oxig, this.PlsOxig, null, this);
        var pinchcollider = this.physics.add.collider(player, pinchos, this.pinchosF, null, this);

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
        

        totalscoreC = ((scoreC + 15) + (scoreCV2 + 15) + (scoreCV3 + 15) + (scoreCV4 + 15));
        totalscoreP = ((scoreP + 1) + (scorePV2 + 1) + (scorePV3 + 1) + (scorePV4 + 1));
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
                    this.MúsicaLVL.stop();
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
        if (movingPlatform.x >= 2100)
        {
            movingPlatform.setVelocityX(-300);
        }
        else if (movingPlatform.x <= 1000)
        {
            movingPlatform.setVelocityX(500);
        }

        if (movingPlatform2.x >= 6000)
        {
            movingPlatform2.setVelocityX(-300);
        }
        else if (movingPlatform2.x <= 5000)
        {
            movingPlatform2.setVelocityX(300);
        }

        //Plataformas Verticales
        if (movingPlatform3.y >= 3100)
        {
            movingPlatform3.setVelocityY(-300);
        }
        else if (movingPlatform3.y <= 2000)
        {
            movingPlatform3.setVelocityY(300);
        }

        if (movingPlatform4.y >= 3100)
        {
            movingPlatform4.setVelocityY(-300);
        }
        else if (movingPlatform4.y <= 2000)
        {
            movingPlatform4.setVelocityY(300);
        }

        //SCORE
        if (((score >= totalscoreC) && (score2 >= totalscoreP))){
            this.MúsicaLVL.stop();
            this.scene.start("scene4")
        }
        //Sin Oxigeno
        if (this.initialTime == 0){
            this.SinOxigeno.play();
            this.MúsicaLVL.stop();
            this.scene.start("scene3")
        }
        //SinVidas
        
       

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
    //Piezas V4
    collectStar2V4 (player, stars2V4){
        this.PickUpHerramientas.play();
        stars2V4.disableBody(true, true);
        score2 += 1;
        scoreText2.setText('Piezas de nave: ' + score2);
    }


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
    collectStarV4 (player, starsV4){
        this.PickUpCombustible.play();
        starsV4.disableBody(true, true);
        score += 15;
        scoreText.setText('Combustible: ' + score)
    }


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
    mutear(){
        mute = true;
        this.MúsicaLVL.stop();
    }
    desmutear(){
        mute = false;
        this.MúsicaLVL.play();
    }
}    