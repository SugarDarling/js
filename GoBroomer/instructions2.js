class instructions2 extends Phaser.Scene {
    constructor() {
      super({
        key: "instructions2",
      });
  
      // Put global variable here
    }
  
    preload() {
  
      this.load.image("instructions2","assets/instructions2.png");
  
    }
  
    create() {
      console.log("*** instructions2 scene");
  
      // Add image and detect spacebar keypress
      this.add.image(0, 0, 'instructions2').setOrigin(0, 0);
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to world scene");
          this.scene.start( "world");
        },
        this
      );
      }}