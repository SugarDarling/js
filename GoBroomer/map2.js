class map2 extends Phaser.Scene {

    constructor() {
        super({ key: 'map2' });
        
    }

//Go!Broomer, map2
    init(data) {
        this.player = data.player
        this.inventory = data.inventory

        this.playerPos = data.playerPos;
    }

    preload() {
    //step 1 load Json
        this.load.tilemapTiledJSON("map22","assets/Map_2.json");

    //load image
    this.load.image("popiya1","assets/pippoya.png");
    this.load.image("popiya2","assets/pippoya2.png");

    //npc / enemy
    this.load.atlas( 'crowl_fly', 'assets/crowl_fly.png', 'assets/crowl_fly.json');

    }

    create() {
        console.log('*** map2 scene');

        let map = this.make.tilemap({key: "map22"});

        let pippoyaTiles = map.addTilesetImage("popiya1", "popiya1");
        let pippoya2Tiles = map.addTilesetImage("popiya2", "popiya2");

        let tilesArray = [ pippoyaTiles,pippoya2Tiles ]

        this.groundLayer = map.createLayer("groundLayer",tilesArray, 0, 0);
        this.wrLayer = map.createLayer("wrLayer",tilesArray, 0, 0);
        this.grassLayer = map.createLayer("grassLayer",tilesArray, 0, 0);
        this.treeLayer = map.createLayer("treeLayer",tilesArray, 0, 0);


//this.time.addEvent({ delay: 1000, callback: this.moveDownUp3, callbackScope: this, loop: false });
this.time.addEvent({ delay: 1000, callback: this.moveDownUp1, callbackScope: this, loop: false });
this.time.addEvent({ delay: 1000, callback: this.moveDownUp2, callbackScope: this, loop: false });
this.time.addEvent({ delay: 1000, callback: this.moveDownUp3, callbackScope: this, loop: false });

//npc
    this.anims.create({
    key: 'crowl_fly',
    frames: [
    { key: 'crowl_fly', frame: "crowl_fly-09"},
    { key: 'crowl_fly', frame: "crowl_fly-16"},
    { key: 'crowl_fly', frame: "crowl_fly-28"},
    { key: 'crowl_fly', frame: "crowl_fly-17"},
    
     ],
    frameRate: 6,
    repeat: -1
    })

    this.physics.world.bounds.width = this.groundLayer.width; 
    this.physics.world.bounds.height = this.groundLayer.height;

    this.player = this.physics.add.sprite(44, 302, "right");

 //npc /enemy
//    this.add.sprite(170, 200, "crowl_fly").play("crowl_fly");
   this.crowl_fly1 = this.physics.add.sprite(187, 176, 'crowl_fly').play('crowl_fly');
   this.crowl_fly2 = this.physics.add.sprite(602, 209, 'crowl_fly').play('crowl_fly');
   this.crowl_fly3 = this.physics.add.sprite(800, 288, 'crowl_fly').play('crowl_fly');

    //enable debug
    window.player = this.player;


    this.player.setCollideWorldBounds(true); // don't go out of the this.map 

    // // create the arrow keys
     this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player 
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);

    this.wrLayer.setCollisionByExclusion(-1, true)
    this.treeLayer.setCollisionByExclusion(-1, true)


    this.physics.add.collider(this.player, this.wrLayer);
    this.physics.add.collider(this.player, this.treeLayer);

    //scoreText
    this.item1Score = this.add.text(18, 19, window.item1 + ' / Items collected ', { 
        fontSize: '15px', 
        fill: '#000000', 
        }).setScrollFactor(0);
            
    }


    update() {
    //go back to worldmap, check for map2 exit
    if ( this.player.x < 7
        && this.player.y > 275 && this.player.y <348 ) {
            this.world();
        }

    // //go to map3
    if ( this.player.x > 1275
        && this.player.y > 272 && this.player.y < 367 ) {
            this.map3();
        }


    if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-200);
        this.player.anims.play("left", true); 
        } 
        else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(200);
        this.player.anims.play("right", true);
        } 
        else if (this.cursors.up.isDown) {
        this.player.body.setVelocityY(-200);
        this.player.anims.play("up", true);
        //console.log('up');
        } 
        else if (this.cursors.down.isDown) {
        this.player.body.setVelocityY(200);
        this.player.anims.play("down", true);
        //console.log('down');
        } 
        else {
        this.player.anims.stop(); 
        this.player.body.setVelocity(0, 0);
        }
     }

        // Function to jump to worldmap
        world(player, tile) {
        console.log("world function");
        this.scene.start("world");
     }

        // // Function to jump to computerlab
        map3(player, tile) {
            console.log("map3 function");
            this.scene.start("map3");
        }

        collectitem(player,item1)
        {
        console.log("collectitem1");
        item1.disableBody(true,true);
        this.collectsound.play();

        window.item1 = window.item1 + 1;
        console.log("  / Items collected", window.item1);

        this.item1Score.setText(  window.item1 + '  / Items collected ');
        }

 moveDownUp1() {
        console.log('moveDownUp')
        this.tweens.timeline({
            targets: this.crowl_fly1,
            ease: 'Linear',
            loop: -1, // loop forever
            duration: 2000,
            tweens: [
            {
                y: 395,
            },
            {
                y: 145,
            },
        ]
        });
     }

      moveDownUp2() {
        console.log('moveDownUp')
        this.tweens.timeline({
            targets: this.crowl_fly2,
            ease: 'Linear',
            loop: -1, // loop forever
            duration: 2000,
            tweens: [
            {
                y: 431,
            },
            {
                y: 185,
            },
        ]
        });
     }

     moveDownUp3() {
        console.log('moveDownUp')
        this.tweens.timeline({
            targets: this.crowl_fly3,
            ease: 'Linear',
            loop: -1, // loop forever
            duration: 2000,
            tweens: [
            {
                x: 800,
            },
            {
                x: 1275,
            },
        ]
        });
     }
     
}


