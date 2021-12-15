class map3 extends Phaser.Scene {

    constructor() {
        super({ key: 'map3' });
        
        // Put global variable here
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory

        this.playerPos = data.playerPos;
    }

    preload() {
    //step 1 load Json
        this.load.tilemapTiledJSON("map33","assets/Map_3.json");

    //load image
    this.load.image("popiya1","assets/pippoya.png");
    this.load.image("popiya2","assets/pippoya2.png");

     //item 1 n 2
     this.load.atlas( 'item1', 'assets/item1.png', 'assets/item1.json');
     this.load.atlas( 'item2', 'assets/item2.png', 'assets/item2.json');

    }

    create() {
        console.log('*** map3 scene');

        let map = this.make.tilemap({key: "map33"});

    //collectsound
        this.collectsound = this.sound.add("collect");

        let pippoyaTiles = map.addTilesetImage("popiya1", "popiya1");
        let pippoya2Tiles = map.addTilesetImage("popiya2", "popiya2");

        let tilesArray = [ pippoyaTiles,pippoya2Tiles ]

        this.groundLayer = map.createLayer("groundLayer",tilesArray, 0, 0);
        this.gfLayer = map.createLayer("gfLayer",tilesArray, 0, 0);
        this.rockLayer = map.createLayer("rockLayer",tilesArray, 0, 0);
        this.treeLayer = map.createLayer("treeLayer",tilesArray, 0, 0);


 //iterm animation
 this.anims.create({
    key: 'item1',
    frames: [
    { key: 'item1', frame: "item-05"},
    { key: 'item1', frame: "item-32"},
    
     ],
    frameRate: 6,
    repeat: -1
    })       

this.anims.create({
        key: 'item2',
        frames: [
        { key: 'item2', frame: "item-06"},
        { key: 'item2', frame: "item-31"},
        
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
    //collect item item1_place n remove x3
    this.item1 = this.physics.add.sprite(280, 145, 'item1').play("item1"); 
    //overlap_item1
    this.physics.add.overlap(this.player, this.item1, this.collectitem, null, this);

        //collect item item1 1_place n remove
        this.item11 = this.physics.add.sprite(340, 80, 'item1').play("item1"); 
        //overlap_item1
        this.physics.add.overlap(this.player, this.item11, this.collectitem, null, this);
        
        //collect item item1 2_place n remove
        this.item12 = this.physics.add.sprite(387, 177, 'item1').play("item1"); 
        //overlap_item1
        this.physics.add.overlap(this.player, this.item12, this.collectitem, null, this);

    //collect item item2_place n remove x3
    this.item2 = this.physics.add.sprite(1269, 495, 'item2').play("item2"); 
    //overlap_item2
    this.physics.add.overlap(this.player, this.item2, this.collectitem, null, this);

        //collect item item2 1_place n remove
        this.item21 = this.physics.add.sprite(1157, 557, 'item2').play("item2"); 
        //overlap_item2
        this.physics.add.overlap(this.player, this.item21, this.collectitem, null, this);
        
        //collect item item2 2_place n remove
        this.item22 = this.physics.add.sprite(1239, 610, 'item2').play("item2"); 
        //overlap_item2
        this.physics.add.overlap(this.player, this.item22, this.collectitem, null, this);

// //collect item and 它的位子 然后移除
//     //collect item item1_place n remove x3
//     this.item1 = this.physics.add.sprite(280, 145, 'item1').play("item1"); 
//      //collect item item1 1_place n remove
//         this.item11 = this.physics.add.sprite(340, 80, 'item1').play("item1");
//      //collect item item1 2_place n remove
//         this.item12 = this.physics.add.sprite(387, 177, 'item1').play("item1");    
// //collect item item2_place n remove x3
//     this.item2 = this.physics.add.sprite(1269, 495, 'item2').play("item2"); 
//         //collect item item2 1_place n remove
//                 this.item21 = this.physics.add.sprite(1157, 557, 'item2').play("item2"); 
//         //collect item item2 2_place n remove
//                 this.item22 = this.physics.add.sprite(1239, 610, 'item2').play("item2");         
    
                
//     this.physics.add.collider(this.player, this.rockLayer);
//     this.physics.add.collider(this.player, this.treeLayer);   
    
    
//     //overlap_item1
//     this.physics.add.overlap(this.player, this.item1, this.collectitem, null, this);        
//         //overlap_item1
//         this.physics.add.overlap(this.player, this.item11, this.collectitem, null, this);
//         //overlap_item1
//         this.physics.add.overlap(this.player, this.item12, this.collectitem, null, this);
//     //overlap_item2
//     this.physics.add.overlap(this.player, this.item2, this.collectitem, null, this);
//         //overlap_item2
//         this.physics.add.overlap(this.player, this.item21, this.collectitem, null, this);
//         //overlap_item2
//         this.physics.add.overlap(this.player, this.item22, this.collectitem, null, this);

    //scoreText
    this.item1Score = this.add.text(18, 19, window.item1 + ' / Items collected ', { 
    fontSize: '15px', 
    fill: '#000000', 
    }).setScrollFactor(0);

    // this.item2Score = this.add.text(52, 280, window.item2 + '  ', { 
    // fontSize: '20px', 
    // fill: '000000', 
    // }).setScrollFactor(0);

    // this.item3Score = this.add.text(52, 300, window.item3 + ' ', { 
    // fontSize: '20px', 
    // fill: '000000', 
    // }).setScrollFactor(0);
    }


    update() {

    // go to map2
    if ( this.player.x < 27
        && this.player.y > 272 && this.player.y < 367 ) {
            this.map2();
        }

    // //go to map3
    if ( this.player.x > 1275
        && this.player.y > 336 && this.player.y < 419 ) {
            this.map4();
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

        map2(player, tile) {
            console.log("map2 function");
            this.scene.start("map2");
     }

        // // Function to jump to library
        map4(player, tile) {
            console.log("map4 function");
            this.scene.start("map4");
        }

    //collect item
        // item 1 x3
        collectitem(player,item1)
        {
        console.log("collectitem1");
        item1.disableBody(true,true);
        this.collectsound.play();

        window.item1 = window.item1 + 1;
        console.log("  / Items collected", window.item1);

        this.item1Score.setText(  window.item1 + '  / Items collected ');
        }

        // collectitem(player,item2)
        // {
        // console.log("collectitem2");
        // item2.disableBody(true,true);
        // this.collectsound.play();

        // window.item2 = window.item2 + 1;
        // console.log(" Orang flower Collected ", window.item2);

        // this.item2Score.setText(  window.item2 + ' Orang flower Collected ');
        // }

        // collectitem(player,item3)
        // {
        // console.log("collectitem3");
        // item3.disableBody(true,true);
        // this.collectsound.play();

        // window.item3 = window.item3 + 1;
        // console.log(" Love insect collected ", window.item3);

        // this.item3Score.setText(  window.item3 + ' Love insect collected ');
        // }

        // collectitem2(player,item11)
        // {
        // item11.disableBody(true,true);
        // this.collectsound.play();
        // }

        // collectitem3(player,item12)
        // {
        // item12.disableBody(true,true);
        // this.collectsound.play();
        // }

        // //item 2 x3
        // collectitem(player,item2)
        // {
        // item2.disableBody(true,true);
        // this.collectsound.play();
        // }

        // collectitem2(player,item21)
        // {
        // item21.disableBody(true,true);
        // this.collectsound.play();
        // }

        // collectitem3(player,item22)
        // {
        // item22.disableBody(true,true);
        // this.collectsound.play();
        // }

    // collectitem(player, item1){
    //     console.log("item1 collected");
    //     this.score = this.score + 1 ;
    //     this.collectitSnd.play();
    //     this.item1Text.setText(this.score);
    //     item1.disableBody (true, true);
    
    //     return false;
    //     }

}
