class mainPage extends Phaser.Scene {
  constructor() {
    super({
      key: "mainPage",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("mainPage","assets/mainPage.png");

  }

  create() {
    console.log("*** mainPage scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'mainPage').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to storyline01 scene");
        this.scene.start( "storyline01");
      },
      this
    );
    }}