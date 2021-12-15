class gameover extends Phaser.Scene {
  constructor() {
    super({
      key: "gameover",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("gameover","assets/gameover.png");

  }

  create() {
    console.log("*** gameover scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'gameover').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to mainPage scene");
        this.scene.start( "mainPage");
      },
      this
    );
//collectsound
         this.collectsound = this.sound.add("collect");
this.collectsound.play();
    }}