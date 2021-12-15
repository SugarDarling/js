class preload extends Phaser.Scene {
  constructor() {
    super({
      key: "preload",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("cover","assets/coverPage.png");

    //collect sound
    this.load.audio("collect","assets/collect.WAV");

    //background music
    this.load.audio("BGM","assets/BGM.mp3");
  }

  create() {
    console.log("*** preload scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'cover').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to mainPage scene");

        this.scene.start(
          "mainPage",
          // Optional parameters
          {}
        );
      },
      this
    );

    // Add any text in the main page
    this.add.text(90, 600, "Press spacebar to continue", {
      font: "30px ARCHADECLASSIC ",
      fill: "#000000",
    });

    // Create all the game animations here
  }
}
