class map4 extends Phaser.Scene {

    constructor() {
        super({ key: 'map4' });
        
        // Put global variable here
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory

        this.playerPos = data.playerPos;
    }

    preload() {
    //step 1 load Json
        this.load.tilemapTiledJSON("map44","assets/Map_4.json");

    //load image
    this.load.image("popiya1","assets/pippoya.png");
    this.load.image("popiya2","assets/pippoya2.png");

    //item 3
    this.load.atlas( 'item3', 'assets/item3.png', 'assets/item3.json');
    

    }

    create() {
        console.log('*** map4 scene');

        let map = this.make.tilemap({key: "map44"});

    //collectsound
        this.collectsound = this.sound.add("collect");

        let pippoyaTiles = map.addTilesetImage("popiya1", "popiya1");
        let pippoya2Tiles = map.addTilesetImage("popiya2", "popiya2");

        let tilesArray = [ pippoyaTiles,pippoya2Tiles ]

        this.groundLayer = map.createLayer("groundLayer",tilesArray, 0, 0);
        this.houseLayer = map.createLayer("houseLayerr",tilesArray, 0, 0);
        this.rockLayer = map.createLayer("rockLayer",tilesArray, 0, 0);
        this.treeLayer = map.createLayer("treeLayer",tilesArray, 0, 0);

    //iterm animation
        this.anims.create({
        key: 'item3',
        frames: [
        { key: 'item3', frame: "item-33"},
        { key: 'item3', frame: "item-34"},
        
        ],
        frameRate: 6,
        repeat: -1
        })       


    this.physics.world.bounds.width = this.groundLayer.width; 
    this.physics.world.bounds.height = this.groundLayer.height;

    this.player = this.physics.add.sprite(44, 302, "right");

    //enable debug
    window.player = this.player;


    this.player.setCollideWorldBounds(true); // don't go out of the this.map 

    // // create the arrow keys
     this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player 
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);

    this.rockLayer.setCollisionByExclusion(-1, true)
    this.treeLayer.setCollisionByExclusion(-1, true)


    this.physics.add.collider(this.player, this.rockLayer);
    this.physics.add.collider(this.player, this.treeLayer);
  
//collect item and 它的位子 然后移除
    //collect item item3_place n remove x3
    this.item3 = this.physics.add.sprite(416, 368, 'item3').play("item3"); 
    //overlap_item3
    this.physics.add.overlap(this.player, this.item3, this.collectitem, null, this);

        //collect item item3 1_place n remove
        this.item31 = this.physics.add.sprite(479, 43, 'item3').play("item3"); 
        //overlap_item3
        this.physics.add.overlap(this.player, this.item31, this.collectitem, null, this);
        
        //collect item item3 2_place n remove
        this.item32 = this.physics.add.sprite(410, 527, 'item3').play("item3"); 
        //overlap_item3
        this.physics.add.overlap(this.player, this.item32, this.collectitem, null, this);

    //scoreText
    this.item1Score = this.add.text(18, 19, window.item1 + ' / Items collected ', { 
        fontSize: '15px', 
        fill: '#000000', 
        }).setScrollFactor(0);
    
    }

    update() {

    //go back to worldmap, check for blockA exit
    if ( this.player.x <37
        && this.player.y > 253 && this.player.y < 335 ) {
            this.Congratulations();
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

        // Function to jump to Congratulations
        Congratulations(player, tile) {
            console.log("Congratulations function");
            this.scene.start("Congratulations");
     }
    
      //collect item
        //item 3 x3
        collectitem(player,item1)
        {
        console.log("collectitem1");
        item1.disableBody(true,true);
        this.collectsound.play();

        window.item1 = window.item1 + 1;
        console.log("  / Items collected", window.item1);

        this.item1Score.setText(  window.item1 + '  / Items collected ');
        }


}
