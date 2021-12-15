class instructions1 extends Phaser.Scene {
  constructor() {
    super({
      key: "instructions1",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("instructions1","assets/instructions1.png");

  }

  create() {
    console.log("*** instructions1 scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'instructions1').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to instructions2 scene");
        this.scene.start( "instructions2");
      },
      this
    );
    }}