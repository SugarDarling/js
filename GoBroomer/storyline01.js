class storyline01 extends Phaser.Scene {
  constructor() {
    super({
      key: "storyline01",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("storyline01","assets/storyline01.png");

  }

  create() {
    console.log("*** storyline01 scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'storyline01').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to storyline02 scene");
        this.scene.start( "storyline02");
      },
      this
    );
    }}