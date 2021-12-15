class RuleOfTheGame extends Phaser.Scene {
    constructor() {
      super({
        key: "RuleOfTheGame",
      });
  
      // Put global variable here
    }
  
    preload() {
  
      this.load.image("RuleOfTheGame","assets/RuleOfTheGame.png");
  
    }
  
    create() {
      console.log("*** RuleOfTheGame scene");
  
      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'RuleOfTheGame').setOrigin(0, 0);
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to instructions1 scene");
          this.scene.start( "instructions1");
        },
        this
      );
      }}