class storyline02 extends Phaser.Scene {
  constructor() {
    super({
      key: "storyline02",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("storyline02","assets/storyline02.png");

  }

  create() {
    console.log("*** storyline02 scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'storyline02').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to RuleOfTheGame scene");
        this.scene.start( "RuleOfTheGame");
      },
      this
    );
    }}