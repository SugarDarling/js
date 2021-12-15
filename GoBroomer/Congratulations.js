class Congratulations extends Phaser.Scene {
  constructor() {
    super({
      key: "Congratulations",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("Congratulations","assets/Congratulations-01.png");

  }

  create() {
    console.log("*** Congratulations scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'Congratulations').setOrigin(0, 0);

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